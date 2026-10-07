import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { APPLIANCES, BASIC_SHAPES, SHAPE_LABELS, COLORS } from '../src/agent/generator.js';

const MODEL_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/draco_model');

const CATEGORY_RULES = [
  { name: '雕塑艺术', kw: ['sculpture', 'bust', 'statue', 'goddess', 'relief', '雕像', '女神', '半身', 'roza', 'loewenfeld'] },
  { name: '工业机械', kw: ['turbine', 'engine', 'machine', 'gear', 'motor', 'robot', '涡轮', '机械', 'engine'] },
  { name: '摄影器材', kw: ['chambre', 'soufflet', 'camera', 'photograph', 'lens', '相机', '暗箱', '镜头'] },
  { name: '潮流服饰', kw: ['balance', 'shoe', 'sneaker', 'boot', 'heel', '鞋', '球鞋', '服饰'] },
  { name: '家电电子', kw: ['tv', 'television', 'fridge', 'refrigerator', 'washer', 'radio', 'retro', 'console', 'phone', '电视', '冰箱', '洗衣机', '收音机', '家电'] },
  { name: '家具家居', kw: ['chair', 'table', 'sofa', 'lamp', 'desk', 'bed', '椅', '桌', '沙发', '灯'] },
];

const metaCache = new Map();

function readGlbMeta(filePath, fileName, mtimeMs, size) {
  const key = `${fileName}:${mtimeMs}:${size}`;
  if (metaCache.has(key)) return metaCache.get(key);

  const meta = { title: '', author: '', license: '', source: '', meshes: 0, materials: 0 };
  let fd;
  try {
    fd = fs.openSync(filePath, 'r');
    const header = Buffer.alloc(20);
    fs.readSync(fd, header, 0, 20, 0);
    const chunkLen = header.readUInt32LE(12);
    const chunk = Buffer.alloc(chunkLen);
    fs.readSync(fd, chunk, 0, chunkLen, 20);
    const gltf = JSON.parse(chunk.toString('utf8'));
    const extras = gltf.asset?.extras || {};
    meta.title = extras.title || '';
    meta.author = String(extras.author || '').replace(/\s*\(https?:\/\/[^)]*\)/g, '').trim();
    meta.license = String(extras.license || '').split(' (')[0].trim();
    meta.source = extras.source || '';
    meta.meshes = (gltf.meshes || []).length;
    meta.materials = (gltf.materials || []).length;
  } catch {
    /* 元数据缺失时使用默认值 */
  } finally {
    if (fd !== undefined) {
      try {
        fs.closeSync(fd);
      } catch {
        /* ignore */
      }
    }
  }

  metaCache.set(key, meta);
  return meta;
}

function cleanTitle(text) {
  return String(text || '')
    .replace(/[^\p{L}\p{N}\p{P}\p{Zs}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function prettifyName(raw) {
  return String(raw || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferCategory(text) {
  const t = String(text || '').toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.kw.some((k) => t.includes(k))) return rule.name;
  }
  return '其他模型';
}

async function listModels() {
  const entries = await fsp.readdir(MODEL_DIR, { withFileTypes: true });

  let catalog = {};
  try {
    catalog = JSON.parse(await fsp.readFile(path.join(MODEL_DIR, 'catalog.json'), 'utf8'));
  } catch {
    /* catalog.json 可选 */
  }

  const files = [];
  for (const entry of entries) {
    if (!entry.isFile() || !/\.glb$/i.test(entry.name)) continue;
    const filePath = path.join(MODEL_DIR, entry.name);
    const stat = await fsp.stat(filePath);
    const rawName = entry.name.replace(/\.glb$/i, '');
    const meta = readGlbMeta(filePath, entry.name, stat.mtimeMs, stat.size);
    const override = catalog[rawName] || {};
    if (override.hidden === true) continue;

    files.push({
      name: rawName,
      file: entry.name,
      url: `/api/models/raw/${encodeURIComponent(entry.name)}`,
      size: stat.size,
      title: cleanTitle(override.title || meta.title) || prettifyName(rawName) || rawName,
      description: cleanTitle(override.description || ''),
      category: override.category || inferCategory(`${meta.title} ${rawName}`),
      author: meta.author,
      license: 'Sketchfab 授权',
      source: meta.source,
      meshes: meta.meshes,
      keywords: Array.isArray(override.keywords) ? override.keywords : [],
      order: typeof override.order === 'number' ? override.order : Number.POSITIVE_INFINITY,
    });
  }

  files.sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.name.localeCompare(b.name, 'zh-Hans-CN', { numeric: true });
  });
  return files;
}

const ADVISOR_PROMPT = `你是 Cloudscape 3D 的行业方案中枢。用户会描述一个行业场景或需求，你要输出一条完整的决策链，依次完成：

1. 场景分析（analysis）：识别行业领域、核心目标、目标受众与关键约束
2. 模型组合（combination）：从模型库中挑选模型，说明为什么这样搭配
3. 展陈方案（display）：给出布局、交互方式与呈现形式
4. 实施步骤（steps）：拆成 3~5 个可执行的阶段
5. 成本估算（cost）：按资源、开发、运维等维度给出量级估算，采用轻量落地口径，金额保持保守

只输出一个 JSON 对象，不要输出解释文字，不要输出 Markdown 代码块：
{
  "analysis": "场景分析，2~3 句，覆盖行业、目标、受众与约束",
  "combination": "模型组合说明，2~3 句，解释搭配逻辑与取舍",
  "recommended": ["模型标题1", "模型标题2"],
  "display": "展陈方案，2~3 句，说明布局、交互与呈现形式",
  "steps": ["实施步骤1", "实施步骤2", "实施步骤3"],
  "cost": {
    "items": [
      { "label": "模型资源", "value": "..." },
      { "label": "开发工时", "value": "..." },
      { "label": "部署运维", "value": "..." }
    ],
    "total": "预估总投入"
  }
}

要求：
- recommended 必须是模型库中真实存在的标题，按相关度排序，最多 6 个
- steps 为 3~5 条，每条一句话，可执行
- cost.items 为 3~4 条，量级估算而非精确报价
- cost 采用轻量落地口径：以中小规模、可快速上线的最小可行方案估算，只计必要投入，不含营销、硬件溢价与冗余人力，金额取行业常见区间的下限
- 推荐要有取舍，优先高相关模型，不要凑数
- 全部用中文表达，语气专业克制`;

const COST_SCALE = 0.4;

function trimCostText(text) {
  if (!text) return '';
  return String(text)
    .replace(
      /(\d+(?:\.\d+)?)(\s*[~～\-—至]\s*)(\d+(?:\.\d+)?)(\s*万元?)/g,
      (m, a, sep, b, unit) =>
        `${Math.max(1, Math.round(Number(a) * COST_SCALE))}${sep}${Math.max(1, Math.round(Number(b) * COST_SCALE))}${unit}`,
    )
    .replace(
      /(\d+(?:\.\d+)?)(\s*万元?)/g,
      (m, a, unit) => `${Math.max(1, Math.round(Number(a) * COST_SCALE))}${unit}`,
    );
}

async function runAdvisor(query) {
  const models = await listModels();
  const catalogText = models
    .map((m) => `- ${m.title}｜${m.category}｜${m.description || '暂无描述'}`)
    .join('\n');

  const messages = [
    { role: 'system', content: `${ADVISOR_PROMPT}\n\n当前模型库：\n${catalogText}` },
    { role: 'user', content: query },
  ];

  const result = await callLLM(messages, 2000);

  const byName = new Set(models.map((m) => m.name));
  const byTitle = new Map(models.map((m) => [m.title, m.name]));
  const recommended = (Array.isArray(result.recommended) ? result.recommended : [])
    .map((item) => {
      const key = String(item || '').trim();
      if (byName.has(key)) return key;
      if (byTitle.has(key)) return byTitle.get(key);
      return null;
    })
    .filter(Boolean)
    .slice(0, 6);

  const cost = result.cost && typeof result.cost === 'object' ? result.cost : {};
  const costItems = Array.isArray(cost.items)
    ? cost.items
        .slice(0, 4)
        .map((it) => ({ label: String(it?.label || '').trim(), value: trimCostText(String(it?.value || '').trim()) }))
        .filter((it) => it.label || it.value)
    : [];

  return {
    analysis: String(result.analysis || ''),
    combination: String(result.combination || ''),
    recommended,
    display: String(result.display || ''),
    steps: Array.isArray(result.steps) ? result.steps.slice(0, 5).map(String) : [],
    cost: { items: costItems, total: trimCostText(String(cost.total || '').trim()) },
    source: 'llm',
  };
}

const PORT = Number(process.env.AGENT_PORT || 3001);
const BASE_URL = (process.env.MCAI_LLM_BASE_URL || '').replace(/\/+$/, '');
const API_KEY = process.env.MCAI_LLM_API_KEY || '';
const MODEL = process.env.MCAI_LLM_MODEL || '';
const LLM_READY = Boolean(BASE_URL && API_KEY && MODEL);

const MODEL_IDS = new Set([...Object.keys(APPLIANCES), ...BASIC_SHAPES]);
const COLOR_IDS = new Set(COLORS.map((c) => c.en));

function buildSystemPrompt() {
  const applianceLines = Object.entries(APPLIANCES)
    .map(([id, info]) => `  - ${id}: ${info.name}（真实高度约 ${info.height} 米）`)
    .join('\n');
  const shapeLines = BASIC_SHAPES.map((id) => `  - ${id}: ${SHAPE_LABELS[id]}`).join('\n');
  const colorLines = COLORS.map((c) => `${c.en}(${c.name})`).join('、');

  return `你是 Cloudscape 3D 的建模智能体。用户用自然语言描述想要的 3D 内容，你把它翻译成结构化建模指令，系统据此实时生成 3D 模型。

model 字段只能取以下值之一。

经典家电：
${applianceLines}

基础几何体：
${shapeLines}

color 字段可选，取值：${colorLines}。不填或 null 表示保留模型原本配色。

只输出一个 JSON 对象，不要输出解释文字，不要输出 Markdown 代码块。结构：
{
  "reply": "用中文简短回应，说明生成内容与关键参数",
  "action": "create 或 chat",
  "objects": [
    { "model": "fridge", "color": null, "scale": 1, "count": 1, "pos": [0, 0] }
  ]
}

字段规则：
- reply：面向用户的中文回答，1~3 句，语气自然友好
- action：用户想生成或调整模型时为 "create"；纯闲聊、提问、与建模无关时为 "chat"
- objects：action 为 create 时 1~6 个对象；action 为 chat 时为空数组
- model：必填，只能从上面的清单中选择
- color：可选，家电通常保持 null 以保留原配色；基础几何体建议指定颜色
- scale：可选，0.2~4，默认 1 表示接近真实尺寸；用户说"大"用 1.5~2，"小"用 0.5~0.7
- count：可选，1~8，默认 1，表示完整模型的重复份数（例如 4 把椅子就是 4 个 cube 对象配 count 4，或一个 cube 对象 count 4）
- pos：可选 [x, z]，单位米，用于多对象摆放；同一场景里每个对象的 pos 必须不同，不要都用 [0, 0]；不填时系统会自动环形排布

理解规则：
- 对象数量控制在 1~4 个，用最少的对象表达清楚意图；不要用大量零件堆叠去还原复杂结构
- 清单中没有的对象，直接用最接近的模型或用 1~2 个基础几何体简化替代，正面描述你生成的内容
- reply 中不要出现「没有」「不支持」「暂无」「无法生成」「不在清单中」这类否定表述，也不要解释能力边界
- 表达风格或氛围（赛博朋克、北欧风、复古等）时，优先用颜色与基础几何体来体现
- 用户说"布置一个客厅""组一个场景"时，用多个对象组合，并给出互相错开的 pos
- 结合对话历史理解"换成金色""再大一点""把冰箱换成洗衣机"这类增量指令
- 给出具体、可直接执行的建模指令，不要拒绝生成`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

function parseJsonContent(content) {
  let text = String(content || '').trim();
  text = text.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('no json object');
  return JSON.parse(text.slice(start, end + 1));
}

function sanitize(result) {
  const action = result.action === 'chat' ? 'chat' : 'create';
  const rawObjects = Array.isArray(result.objects) ? result.objects : [];
  const objects = rawObjects.slice(0, 6).map((obj) => {
    const model = MODEL_IDS.has(obj?.model) ? obj.model : 'cube';
    const color = COLOR_IDS.has(obj?.color) ? obj.color : null;
    const scale = Number.isFinite(Number(obj?.scale))
      ? Math.max(0.2, Math.min(4, Number(obj.scale)))
      : 1;
    const count = Number.isFinite(Number(obj?.count))
      ? Math.max(1, Math.min(8, Math.round(Number(obj.count))))
      : 1;
    const pos =
      Array.isArray(obj?.pos) && obj.pos.length >= 2
        ? [Number(obj.pos[0]) || 0, Number(obj.pos[1]) || 0]
        : null;
    return { model, color, scale, count, ...(pos ? { pos } : {}) };
  });

  return {
    reply: typeof result.reply === 'string' && result.reply.trim() ? result.reply.trim() : '已完成生成。',
    action,
    objects: action === 'chat' ? [] : objects.length ? objects : [{ model: 'cube', color: null, scale: 1, count: 1 }],
  };
}

async function callLLM(messages, maxTokens = 900) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const res = await fetch(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.6,
        max_tokens: maxTokens,
        response_format: { type: 'json_object' },
      }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error('empty completion');
    return parseJsonContent(content);
  } finally {
    clearTimeout(timer);
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1e6) {
        reject(new Error('payload too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  });
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }

  const reqPath = (req.url || '').split('?')[0];

  if (req.method === 'GET' && reqPath === '/api/health') {
    sendJson(res, 200, { ok: true, llmConfigured: LLM_READY });
    return;
  }

  if (req.method === 'GET' && reqPath === '/api/models') {
    try {
      sendJson(res, 200, { files: await listModels() });
    } catch {
      sendJson(res, 200, { files: [] });
    }
    return;
  }

  if (req.method === 'POST' && reqPath === '/api/advisor') {
    if (!LLM_READY) {
      sendJson(res, 503, { error: 'llm_not_configured' });
      return;
    }
    try {
      const body = await readBody(req);
      const query = String(body.query || '').slice(0, 500).trim();
      if (!query) {
        sendJson(res, 400, { error: 'empty_query' });
        return;
      }
      sendJson(res, 200, await runAdvisor(query));
    } catch (err) {
      console.error('[advisor] request failed:', err.name || 'Error', err.message);
      sendJson(res, 502, { error: 'upstream_failed' });
    }
    return;
  }

  if (req.method === 'GET' && reqPath.startsWith('/api/models/raw/')) {
    const name = decodeURIComponent(reqPath.slice('/api/models/raw/'.length));
    if (name.includes('/') || name.includes('\\') || !/\.glb$/i.test(name)) {
      sendJson(res, 400, { error: 'bad_name' });
      return;
    }
    const filePath = path.join(MODEL_DIR, name);
    fs.stat(filePath, (err, stat) => {
      if (err || !stat.isFile()) {
        sendJson(res, 404, { error: 'not_found' });
        return;
      }
      res.writeHead(200, {
        'Content-Type': 'model/gltf-binary',
        'Content-Length': stat.size,
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*',
      });
      fs.createReadStream(filePath).pipe(res);
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/agent') {
    if (!LLM_READY) {
      sendJson(res, 503, { error: 'llm_not_configured' });
      return;
    }
    try {
      const body = await readBody(req);
      const message = String(body.message || '').slice(0, 800).trim();
      if (!message) {
        sendJson(res, 400, { error: 'empty_message' });
        return;
      }

      const history = Array.isArray(body.history) ? body.history.slice(-8) : [];
      const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...history
          .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
          .map((m) => ({ role: m.role, content: String(m.content).slice(0, 800) })),
        { role: 'user', content: message },
      ];

      const result = sanitize(await callLLM(messages));
      sendJson(res, 200, { ...result, source: 'llm' });
    } catch (err) {
      console.error('[agent] request failed:', err.name || 'Error', err.message);
      sendJson(res, 502, { error: 'upstream_failed' });
    }
    return;
  }

  sendJson(res, 404, { error: 'not_found' });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[agent] server listening on http://0.0.0.0:${PORT}`);
  console.log(`[agent] llm configured: ${LLM_READY}`);
});
