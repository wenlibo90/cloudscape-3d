import './agent.css';
import { createViewport } from './viewport.js';
import {
  parsePrompt,
  buildModel,
  buildScene,
  matchLocalModel,
  isModifierOnly,
  getPromptLibrary,
  IDEAS,
  createEmptySpec,
} from './generator.js';
import { requestAgent, checkHealth } from './llm.js';
import { fetchLibrary, matchLibraryModel, loadLibraryModel } from './library.js';

const canvas = document.getElementById('viewport');
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chips = document.getElementById('chips');
const statName = document.getElementById('stat-name');
const statFaces = document.getElementById('stat-faces');
const statState = document.getElementById('stat-state');
const boot = document.getElementById('boot');
const bootLog = document.getElementById('boot-log');

const NEGATIVE_FEEDBACK =
  /(太简单|太简陋|太粗糙|太丑|太难看|难看|不满意|不太行|不好看|太差|差劲|什么玩意|敷衍|糊弄|凑合|不像|没有细节|不够精细|不够真实|太假|太low|垃圾|很烂|提升一下|精细一点|真实一点|更真实|更精细|细节不够|质量不行)/i;

const viewport = createViewport(canvas);
let lastSpec = createEmptySpec();
let busy = false;
let llmReady = false;
const history = [];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function setStatusDot(text, online) {
  const el = document.querySelector('.status');
  if (!el) return;
  el.innerHTML = `<i></i>${text}`;
  el.classList.toggle('is-offline', !online);
}

/* ---------------- 状态与 HUD ---------------- */
function setState(text, mode) {
  statState.textContent = text;
  statState.className = mode === 'busy' ? 'is-busy' : mode === 'active' ? 'is-active' : '';
}

function updateStats(meta, label) {
  statName.textContent = label;
  statFaces.textContent = meta.faces.toLocaleString('en-US');
}

/* ---------------- 消息渲染 ---------------- */
function renderRich(el, text) {
  const parts = text.split('`');
  parts.forEach((part, i) => {
    if (i % 2 === 1) {
      const code = document.createElement('code');
      code.textContent = part;
      el.appendChild(code);
    } else if (part) {
      el.appendChild(document.createTextNode(part));
    }
  });
}

function scrollLog() {
  chatLog.scrollTop = chatLog.scrollHeight;
}

function addMessage(role, text) {
  const wrap = document.createElement('div');
  wrap.className = `msg ${role}`;

  const meta = document.createElement('div');
  meta.className = 'msg-meta';
  meta.textContent = role === 'user' ? 'YOU' : 'AGENT';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  renderRich(bubble, text);

  wrap.append(meta, bubble);
  chatLog.appendChild(wrap);
  scrollLog();
  return bubble;
}

async function addAgentMessageTyped(text) {
  const wrap = document.createElement('div');
  wrap.className = 'msg agent';

  const meta = document.createElement('div');
  meta.className = 'msg-meta';
  meta.textContent = 'AGENT';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  bubble.appendChild(cursor);

  wrap.append(meta, bubble);
  chatLog.appendChild(wrap);

  const plain = text.replace(/`/g, '');
  for (let i = 0; i < plain.length; i++) {
    cursor.insertAdjacentText('beforebegin', plain[i]);
    if (i % 3 === 0) {
      scrollLog();
      await sleep(14);
    }
  }
  cursor.remove();
  bubble.textContent = '';
  renderRich(bubble, text);
  scrollLog();
}

/* ---------------- 生成流程 ---------------- */
function finishTurn() {
  busy = false;
  chatSend.disabled = false;
  chatInput.disabled = false;
  chatInput.focus();
}

function pushHistory(userText, replyText) {
  history.push({ role: 'user', content: userText }, { role: 'assistant', content: replyText });
  if (history.length > 12) history.splice(0, history.length - 12);
}

async function presentModel(built, reply, stateText = '生成中', viewMeta = {}) {
  setState(stateText, 'busy');
  const meta = viewport.setModel(built.group, { name: built.label, ...viewMeta });
  updateStats(meta, built.label);
  await sleep(880);

  const detail = `\n\n· 三角面 ${meta.faces.toLocaleString('en-US')} · 整体高度约 ${meta.size.y.toFixed(2)} m`;
  await addAgentMessageTyped(`${reply}${detail}`);

  setState('就绪', 'active');
  finishTurn();
}

async function generateFrom(text, options = {}) {
  const { echo = true } = options;
  if (busy) return;
  busy = true;
  chatSend.disabled = true;
  chatInput.disabled = true;

  if (echo) addMessage('user', text);

  // 0) 负面反馈 / 高精度诉求：说明能力边界
  if (NEGATIVE_FEEDBACK.test(text)) {
    const reply = '功能受限，暂不支持高精模型直接生成。';
    pushHistory(text, reply);
    await addAgentMessageTyped(reply);
    setState('就绪', 'active');
    finishTurn();
    return;
  }

  // 1) 内置模型直通：命中即本地秒出，不调用大模型
  const localSpec = matchLocalModel(text);
  if (localSpec) {
    const built = buildModel(localSpec);
    lastSpec = localSpec;
    pushHistory(text, `已生成 ${built.label}`);
    await presentModel(built, `已生成 \`${built.label}\`（${built.sub}）`, '内置直出');
    return;
  }

  // 2) 纯增量修改：换色 / 改大小 / 改数量，直接作用于上一轮模型
  if (lastSpec && lastSpec.kind && isModifierOnly(text)) {
    const { spec } = parsePrompt(text, lastSpec);
    lastSpec = spec;
    const built = buildModel(spec);
    const note = spec.colorName ? `（${spec.colorName}）` : '';
    pushHistory(text, `已调整 ${built.label}${note}`);
    await presentModel(built, `已调整为 \`${built.label}\`${note}`, '调整');
    return;
  }

  // 3) 模型库关键词匹配：命中则加载对应 glb
  const libraryFiles = await fetchLibrary();
  const libraryHit = matchLibraryModel(text, libraryFiles);
  if (libraryHit) {
    setState('载入模型', 'busy');
    try {
      const group = await loadLibraryModel(libraryHit);
      const built = {
        group,
        label: libraryHit.title || libraryHit.name,
        sub: `${libraryHit.category || '模型库'} · 模型库`,
      };
      pushHistory(text, `已从模型库载入 ${built.label}`);
      await presentModel(
        built,
        `已从模型库载入 \`${built.label}\``,
        '模型库',
        { preserveMaterials: true }
      );
      return;
    } catch (err) {
      console.warn('[agent] 模型库载入失败，继续走大模型:', err.message);
    }
  }

  // 3) 交给大模型理解意图
  let result = null;
  if (llmReady) {
    setState('理解中', 'busy');
    try {
      result = await requestAgent(text, history);
      pushHistory(text, result.reply || '');
    } catch (err) {
      console.warn('[agent] 大模型调用失败，降级为本地解析:', err.message);
      result = null;
    }
  }

  if (result && result.action === 'chat' && (!result.objects || result.objects.length === 0)) {
    await addAgentMessageTyped(result.reply);
    setState('就绪', 'active');
    finishTurn();
    return;
  }

  if (result && Array.isArray(result.objects) && result.objects.length) {
    await presentModel(buildScene(result.objects), result.reply);
    return;
  }

  // 3) 本地兜底
  const { spec } = parsePrompt(text, lastSpec);
  lastSpec = spec;
  const built = buildModel(spec);
  await presentModel(built, `已生成 \`${built.label}\`（${built.sub}）`);
}

async function loadLibraryById(name) {
  const files = await fetchLibrary();
  const item = files.find((f) => f.name === name);

  if (!item) {
    await addAgentMessageTyped('模型库中未找到该模型，已为你生成默认模型。');
    generateFrom('生成一台冰箱');
    return;
  }

  busy = true;
  chatSend.disabled = true;
  chatInput.disabled = true;
  addMessage('user', `生成同款：${item.title}`);

  setState('载入模型', 'busy');
  try {
    const group = await loadLibraryModel(item);
    const built = {
      group,
      label: item.title || item.name,
      sub: `${item.category || '模型库'} · 模型库`,
    };
    pushHistory(`生成同款：${item.title}`, `已从模型库载入 ${item.title}`);
    await presentModel(
      built,
      `已从模型库载入 \`${built.label}\``,
      '模型库',
      { preserveMaterials: true }
    );
  } catch (err) {
    console.warn('[agent] 模型库载入失败:', err.message);
    setState('就绪', 'active');
    finishTurn();
  }
}

/* ---------------- 交互绑定 ---------------- */
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text || busy) return;
  chatInput.value = '';
  generateFrom(text);
});

/* ---------------- 语音输入 ---------------- */
const chatMic = document.getElementById('chat-mic');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;
let recognizing = false;
let voiceBase = '';

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'zh-CN';
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  recognition.addEventListener('start', () => {
    recognizing = true;
    chatMic.classList.add('is-listening');
  });

  recognition.addEventListener('end', () => {
    recognizing = false;
    chatMic.classList.remove('is-listening');
  });

  recognition.addEventListener('result', (event) => {
    let text = '';
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      text += event.results[i][0].transcript;
    }
    chatInput.value = `${voiceBase}${text}`.trim();
    chatInput.focus();
  });

  recognition.addEventListener('error', (event) => {
    recognizing = false;
    chatMic.classList.remove('is-listening');
    if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
      chatMic.title = '麦克风权限被拒绝，请在浏览器中允许访问';
    } else if (event.error === 'network') {
      chatMic.title = '语音服务不可用，请检查网络';
    } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
      chatMic.title = '语音识别暂不可用';
    }
  });

  chatMic.addEventListener('click', () => {
    if (busy) return;
    if (recognizing) {
      recognition.stop();
      return;
    }
    const existing = chatInput.value.trim();
    voiceBase = existing ? `${existing} ` : '';
    try {
      recognition.start();
    } catch {
      /* 忽略连续点击导致的重复启动 */
    }
  });
} else {
  chatMic.hidden = true;
}

IDEAS.forEach((idea) => {
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'chip';
  chip.textContent = idea;
  chip.addEventListener('click', () => {
    if (busy) return;
    chatInput.value = idea;
    chatForm.requestSubmit();
  });
  chips.appendChild(chip);
});

/* ---------------- 提示词库面板 ---------------- */
const promptPanel = document.getElementById('prompt-panel');
const promptPanelBody = document.getElementById('prompt-panel-body');

const SHOW_PROMPT_LIBRARY = false;

const moreChip = document.createElement('button');
moreChip.type = 'button';
moreChip.className = 'chip chip-more';
moreChip.textContent = '更多 ▾';
moreChip.hidden = !SHOW_PROMPT_LIBRARY;
chips.appendChild(moreChip);

function setPromptPanel(open) {
  promptPanel.classList.toggle('is-open', open);
  chatLog.style.display = open ? 'none' : '';
  moreChip.textContent = open ? '收起 ▴' : '更多 ▾';
  if (open) promptPanel.scrollTop = 0;
}

function runPrompt(text) {
  setPromptPanel(false);
  if (busy) return;
  chatInput.value = text;
  chatForm.requestSubmit();
}

function buildPromptPanel() {
  if (promptPanelBody.dataset.built) return;

  getPromptLibrary().forEach((group) => {
    const wrap = document.createElement('div');
    wrap.className = 'prompt-group';

    const title = document.createElement('div');
    title.className = 'prompt-group-title';
    title.textContent = group.title;

    const items = document.createElement('div');
    items.className = 'prompt-items';

    group.items.forEach((text) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'prompt-item';
      btn.textContent = text;
      btn.addEventListener('click', () => runPrompt(text));
      items.appendChild(btn);
    });

    wrap.append(title, items);
    promptPanelBody.appendChild(wrap);
  });

  const tip = document.createElement('div');
  tip.className = 'prompt-tip';
  tip.textContent =
    '内置 16 款经典家电与 8 种基础几何体。颜色支持红、橙、黄、绿、青、蓝、紫、粉、金、银、铜、棕、灰、黑、白；尺寸和数量可用「大 / 小」「2 米」「5 个」描述；也可以直接描述一个场景，交给大模型来组合。';
  promptPanelBody.appendChild(tip);

  promptPanelBody.dataset.built = '1';
}

moreChip.addEventListener('click', () => {
  const opening = !promptPanel.classList.contains('is-open');
  if (opening) buildPromptPanel();
  setPromptPanel(opening);
});

document.getElementById('prompt-close').addEventListener('click', () => setPromptPanel(false));

/* ---------------- 启动动画 ---------------- */
async function runBoot() {
  const lines = [
    '> 初始化 WebGL 渲染管线 ...',
    '> 装载参数化建模内核 ...',
    '> 连接 Cloudscape 智能体 ...',
    '> 系统就绪',
  ];
  for (const line of lines) {
    const el = document.createElement('div');
    el.textContent = line;
    bootLog.appendChild(el);
    await sleep(260);
  }
  await sleep(360);
  boot.classList.add('is-hidden');
  setTimeout(() => {
    boot.style.display = 'none';
  }, 760);
}

async function start() {
  const health = checkHealth();
  await runBoot();
  llmReady = await health;

  setStatusDot(llmReady ? '大模型已接入' : '本地模式', llmReady);

  await addAgentMessageTyped(
    llmReady
      ? '你好，我是 Cloudscape 3D 生成智能体，已接入大模型。\n用日常语言描述你想要的场景即可，例如：生成一台冰箱和洗衣机、改成红色。'
      : '你好，我是 Cloudscape 3D 生成智能体。\n描述你想要的模型，我会实时生成。'
  );

  setState('已就绪', 'active');
  chatInput.focus();
  await sleep(200);

  const loadName = new URLSearchParams(location.search).get('load');
  if (loadName) {
    await loadLibraryById(loadName);
    return;
  }

  generateFrom('生成一台冰箱');
}

start();
