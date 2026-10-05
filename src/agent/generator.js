import * as THREE from 'three';
import { createAppliance } from '../models/index.js';

export const APPLIANCES = {
  fridge: { name: '双门冰箱', height: 1.62 },
  washer: { name: '波轮洗衣机', height: 0.88 },
  aircon: { name: '窗式空调', height: 0.42 },
  tv: { name: '复古电视机', height: 0.42 },
  fan: { name: '落地电风扇', height: 1.18 },
  radio: { name: '台式收音机', height: 0.22 },
  boombox: { name: '双卡收录机', height: 0.34 },
  microwave: { name: '微波炉', height: 0.3 },
  riceCooker: { name: '电饭煲', height: 0.28 },
  kettle: { name: '电热水壶', height: 0.27 },
  oven: { name: '台式电烤箱', height: 0.28 },
  lamp: { name: '复古台灯', height: 0.5 },
  vacuum: { name: '桶式吸尘器', height: 0.46 },
  telephone: { name: '转盘电话机', height: 0.15 },
  sewingMachine: { name: '老式缝纫机', height: 0.38 },
  hairDryer: { name: '电吹风', height: 0.26 },
};

const SHAPES = [
  { id: 'fridge', kw: ['冰箱', '冷藏柜'] },
  { id: 'washer', kw: ['洗衣机'] },
  { id: 'aircon', kw: ['空调', '冷气机'] },
  { id: 'tv', kw: ['电视机', '电视', '彩电'] },
  { id: 'fan', kw: ['电风扇', '风扇', '电扇', '落地扇', '台扇'] },
  { id: 'radio', kw: ['收音机', '收音'] },
  { id: 'boombox', kw: ['收录机', '录音机', '双卡', 'boombox'] },
  { id: 'microwave', kw: ['微波炉'] },
  { id: 'riceCooker', kw: ['电饭煲', '饭煲', '电饭锅'] },
  { id: 'kettle', kw: ['电热水壶', '热水壶', '电水壶', '水壶'] },
  { id: 'oven', kw: ['电烤箱', '烤箱', '烤炉'] },
  { id: 'lamp', kw: ['台灯', '落地灯', '灯'] },
  { id: 'vacuum', kw: ['吸尘器', '除尘器'] },
  { id: 'telephone', kw: ['电话机', '电话', '座机'] },
  { id: 'sewingMachine', kw: ['缝纫机', '缝纫'] },
  { id: 'hairDryer', kw: ['电吹风', '吹风机', '吹风'] },
  { id: 'cube', kw: ['立方体', '正方体', '方块', '方体', '盒子', 'cube', 'box'] },
  { id: 'sphere', kw: ['球体', '圆球', '球', 'sphere', 'ball'] },
  { id: 'cylinder', kw: ['圆柱', '柱体', 'cylinder'] },
  { id: 'cone', kw: ['圆锥', '锥体', 'cone'] },
  { id: 'torus', kw: ['圆环', '环形', '甜甜圈', 'torus', 'ring'] },
  { id: 'capsule', kw: ['胶囊', 'capsule'] },
  { id: 'pyramid', kw: ['棱锥', '金字塔', 'pyramid'] },
  { id: 'plane', kw: ['圆盘', '平面', '底座', 'platform', 'disc'] },
];

export const COLORS = [
  { en: 'red', kw: ['红'], hex: 0xd94b4b, name: '红色' },
  { en: 'orange', kw: ['橙'], hex: 0xe08a3c, name: '橙色' },
  { en: 'yellow', kw: ['黄'], hex: 0xe8c547, name: '黄色' },
  { en: 'green', kw: ['绿'], hex: 0x4caf6d, name: '绿色' },
  { en: 'cyan', kw: ['青'], hex: 0x4fc7c7, name: '青色' },
  { en: 'blue', kw: ['蓝', '兰'], hex: 0x4a7dbd, name: '蓝色' },
  { en: 'purple', kw: ['紫'], hex: 0x8a5fd3, name: '紫色' },
  { en: 'pink', kw: ['粉'], hex: 0xe57fa8, name: '粉色' },
  { en: 'gold', kw: ['金'], hex: 0xc9a45c, name: '金色' },
  { en: 'silver', kw: ['银'], hex: 0xc0c6cc, name: '银色' },
  { en: 'copper', kw: ['铜'], hex: 0xb87333, name: '铜色' },
  { en: 'brown', kw: ['棕'], hex: 0x7a5537, name: '棕色' },
  { en: 'gray', kw: ['灰'], hex: 0x8b9099, name: '灰色' },
  { en: 'black', kw: ['黑'], hex: 0x2a2d33, name: '黑色' },
  { en: 'white', kw: ['白'], hex: 0xf0efe9, name: '白色' },
];

export const COLOR_BY_EN = Object.fromEntries(COLORS.map((c) => [c.en, c]));

export const BASIC_SHAPES = ['cube', 'sphere', 'cylinder', 'cone', 'torus', 'capsule', 'pyramid', 'plane'];

export const SHAPE_LABELS = {
  cube: '立方体',
  sphere: '球体',
  cylinder: '圆柱体',
  cone: '圆锥体',
  torus: '圆环',
  capsule: '胶囊体',
  pyramid: '四棱锥',
  plane: '圆盘基座',
};

export function createEmptySpec() {
  return { kind: null, color: null, colorName: null, scale: 1, count: 1, absolute: null };
}

function detectShape(text) {
  for (const shape of SHAPES) {
    if (shape.kw.some((k) => text.includes(k))) return shape.id;
  }
  return null;
}

function detectColor(text) {
  for (const color of COLORS) {
    if (color.kw.some((k) => text.includes(k))) return color;
  }
  return null;
}

/**
 * 解析用户输入并与上一轮规格合并，支持「换成金色」「大一点」这类增量修改。
 */
export function parsePrompt(text, prev) {
  const spec = prev ? { ...prev } : createEmptySpec();
  const lower = text.toLowerCase();
  const changed = { shape: false, color: false, scale: false, count: false };

  const shape = detectShape(text) || detectShape(lower);
  if (shape) {
    spec.kind = shape;
    changed.shape = true;
  }

  const color = detectColor(text);
  if (color) {
    spec.color = color.hex;
    spec.colorName = color.name;
    changed.color = true;
  }

  const absMatch = text.match(/(\d+(?:\.\d+)?)\s*(米|m|厘米|cm)/i);
  if (absMatch) {
    const value = parseFloat(absMatch[1]);
    const unit = absMatch[2].toLowerCase();
    const meters = unit === '厘米' || unit === 'cm' ? value / 100 : value;
    spec.absolute = Math.max(0.05, Math.min(6, meters));
    spec.scale = 1;
    changed.scale = true;
  } else if (/(大一点|大一些|大些|更大|放大)/.test(text)) {
    spec.scale = Math.min(4, spec.scale * 1.35);
    spec.absolute = null;
    changed.scale = true;
  } else if (/(小一点|小一些|小些|更小|缩小)/.test(text)) {
    spec.scale = Math.max(0.25, spec.scale * 0.72);
    spec.absolute = null;
    changed.scale = true;
  } else if (/(很大|巨大|超大)/.test(text)) {
    spec.scale = 2.2;
    spec.absolute = null;
    changed.scale = true;
  } else if (/(很小|迷你|超小)/.test(text)) {
    spec.scale = 0.45;
    spec.absolute = null;
    changed.scale = true;
  } else if (/大/.test(text)) {
    spec.scale = 1.5;
    spec.absolute = null;
    changed.scale = true;
  } else if (/小/.test(text)) {
    spec.scale = 0.65;
    spec.absolute = null;
    changed.scale = true;
  }

  const countMatch = text.match(/(\d+)\s*个/);
  if (countMatch) {
    const n = parseInt(countMatch[1], 10);
    if (n >= 1 && n <= 12) {
      spec.count = n;
      changed.count = true;
    }
  }

  if (!spec.kind) {
    spec.kind = 'cube';
    spec.assumed = true;
  }

  return { spec, changed };
}

function baseMaterial(spec) {
  const hasColor = Boolean(spec.color);
  return new THREE.MeshStandardMaterial({
    color: spec.color ?? 0xc9a45c,
    roughness: hasColor ? 0.44 : 0.24,
    metalness: hasColor ? 0.06 : 0.85,
    envMapIntensity: hasColor ? 0.7 : 1.15,
  });
}

function shapeGeometry(kind) {
  switch (kind) {
    case 'sphere':
      return { geo: new THREE.SphereGeometry(0.6, 48, 32), y: 0.6, name: '球体' };
    case 'cylinder':
      return { geo: new THREE.CylinderGeometry(0.45, 0.45, 1.15, 48), y: 0.575, name: '圆柱体' };
    case 'cone':
      return { geo: new THREE.ConeGeometry(0.55, 1.2, 48), y: 0.6, name: '圆锥体' };
    case 'torus':
      return { geo: new THREE.TorusGeometry(0.55, 0.2, 24, 72), y: 0.75, name: '圆环' };
    case 'capsule':
      return { geo: new THREE.CapsuleGeometry(0.38, 0.7, 16, 32), y: 0.73, name: '胶囊体' };
    case 'pyramid':
      return { geo: new THREE.ConeGeometry(0.72, 1.2, 4), y: 0.6, name: '四棱锥', rotateY: Math.PI / 4 };
    case 'plane':
      return { geo: new THREE.CylinderGeometry(1.15, 1.15, 0.1, 64), y: 0.05, name: '圆盘基座' };
    case 'cube':
    default:
      return { geo: new THREE.BoxGeometry(1, 1, 1), y: 0.5, name: '立方体' };
  }
}

function resolveScale(spec, defaultValue) {
  if (spec.absolute) return spec.absolute / defaultValue;
  return spec.scale;
}

/**
 * 根据规格构建模型 Group，模型底部对齐 y = 0。
 */
export function buildModel(spec) {
  if (APPLIANCES[spec.kind]) {
    const info = APPLIANCES[spec.kind];
    const group = createAppliance(spec.kind);
    if (spec.color) applyColorToAppliance(group, spec.color);
    const scale = resolveScale(spec, info.height);
    group.scale.setScalar(scale);
    return {
      group,
      label: info.name,
      sub: spec.colorName ? `${spec.colorName}款` : '经典配色',
    };
  }

  const { geo, y, name, rotateY } = shapeGeometry(spec.kind);
  const group = new THREE.Group();
  const mat = baseMaterial(spec);
  const count = spec.count || 1;

  const rw = 1.15;
  for (let i = 0; i < count; i++) {
    const m = new THREE.Mesh(geo, count > 1 ? mat.clone() : mat);
    if (rotateY) m.rotation.y = rotateY;
    if (count > 1) {
      const angle = (i / count) * Math.PI * 2;
      m.position.set(Math.cos(angle) * rw, y, Math.sin(angle) * rw);
    } else {
      m.position.y = y;
    }
    group.add(m);
  }

  const scale = resolveScale(spec, 1);
  group.scale.setScalar(scale);

  return {
    group,
    label: count > 1 ? `${count} 个 ${name}` : name,
    sub: spec.colorName ? `${spec.colorName}` : '金属质感',
  };
}

/** 家电改色：替换亮色非金属主体材质，保留镀铬、玻璃与深色细节 */
function applyColorToAppliance(group, hex) {
  group.traverse((child) => {
    if (!child.isMesh || !child.material) return;
    const mats = Array.isArray(child.material) ? child.material : [child.material];
    mats.forEach((m) => {
      if (!m.isMeshStandardMaterial || m.metalness >= 0.8) return;
      const luminance = m.color.r * 0.299 + m.color.g * 0.587 + m.color.b * 0.114;
      if (luminance < 0.25) return;
      m.color.setHex(hex);
    });
  });
}

/** 根据大模型返回的单条对象指令构建模型 */
export function buildObject(obj = {}) {
  const colorInfo = obj.color ? COLOR_BY_EN[obj.color] : null;
  const count = Number.isFinite(obj.count) ? Math.max(1, Math.min(8, Math.round(obj.count))) : 1;
  const scale = Number.isFinite(obj.scale) ? Math.max(0.2, Math.min(4, obj.scale)) : 1;

  const spec = {
    kind: obj.model || 'cube',
    color: colorInfo ? colorInfo.hex : null,
    colorName: colorInfo ? colorInfo.name : null,
    scale,
    count,
    absolute: null,
  };

  const built = buildModel(spec);
  if (APPLIANCES[spec.kind] && colorInfo) {
    applyColorToAppliance(built.group, colorInfo.hex);
  }
  return built;
}

/** 根据大模型返回的对象数组构建整场景 Group，自动环形排布 */
export function buildScene(objects) {
  const list = Array.isArray(objects) && objects.length ? objects.slice(0, 6) : [{ model: 'cube' }];
  const root = new THREE.Group();
  const labels = [];
  const colors = new Set();
  const used = new Set();

  list.forEach((obj, i) => {
    const built = buildObject(obj);
    labels.push(built.label);
    if (obj.color && COLOR_BY_EN[obj.color]) colors.add(COLOR_BY_EN[obj.color].name);

    let x = 0;
    let z = 0;
    if (list.length > 1) {
      let custom = Array.isArray(obj.pos) && obj.pos.length >= 2 && Number.isFinite(Number(obj.pos[0]));
      if (custom) {
        x = Number(obj.pos[0]);
        z = Number(obj.pos[1]);
        const key = `${x.toFixed(2)},${z.toFixed(2)}`;
        if (used.has(key)) custom = false;
        else used.add(key);
      }
      if (!custom) {
        const radius = 0.9 + list.length * 0.32;
        const angle = (i / list.length) * Math.PI * 2 - Math.PI / 2;
        x = Math.cos(angle) * radius;
        z = Math.sin(angle) * radius;
        used.add(`${x.toFixed(2)},${z.toFixed(2)}`);
      }
    }
    built.group.position.set(x, 0, z);
    root.add(built.group);
  });

  const label = list.length === 1 ? labels[0] : `${list.length} 件组合`;
  const sub = colors.size ? [...colors].join('/') : list.length > 1 ? '组合场景' : '经典配色';
  return { group: root, label, sub };
}

/** 出现这些词说明是场景组合或风格表达，需要交给大模型理解 */
const SCENE_HINTS = [
  '和', '与', '以及', '搭配', '布置', '场景', '组合', '套装', '一套',
  '客厅', '卧室', '厨房', '书房', '房间', '空间', '家里', '风格',
  '赛博朋克', '北欧', '工业风', '极简', '复古风', '现代', '加上', '再加', '摆放',
];

/**
 * 判断输入是否可以由内置模型直接生成。
 * 只接受「单一模型 + 颜色/尺寸/数量」这类明确指令，命中时无需调用大模型。
 * 返回 spec 表示命中，返回 null 表示需要交给大模型。
 */
const NEW_INTENT = /(生成|创建|新建|来一|来个|做一个|做个|做一|布置|摆放|添加|加一)/;

/** 判断输入是否只是对上一轮模型的增量修改（换色 / 改大小 / 改数量） */
export function isModifierOnly(text) {
  const t = String(text || '').trim();
  if (!t || NEW_INTENT.test(t)) return false;
  if (detectShape(t)) return false;

  const hasColor = detectColor(t) !== null;
  const hasSize = /(\d+(?:\.\d+)?)\s*(米|m|厘米|cm)|大一点|大一些|大些|更大|放大|小一点|小一些|小些|更小|缩小|很大|巨大|超大|很小|迷你|超小|大|小/.test(t);
  const hasCount = /(\d+)\s*个/.test(t);

  return hasColor || hasSize || hasCount;
}

export function matchLocalModel(text) {
  const t = String(text || '').trim();
  if (!t || t.length > 16) return null;
  if (SCENE_HINTS.some((hint) => t.includes(hint))) return null;

  const hits = new Set();
  for (const shape of SHAPES) {
    if (shape.kw.some((k) => t.includes(k))) hits.add(shape.id);
  }
  if (hits.size !== 1) return null;

  return parsePrompt(t, null).spec;
}

const UNIT_BY_ID = { hairDryer: '个', telephone: '个', lamp: '个', kettle: '个' };

/** 提示词库：覆盖全部内置模型与常用玩法，供「更多」面板展示 */
export function getPromptLibrary() {
  const appliances = Object.entries(APPLIANCES).map(
    ([id, info]) => `生成一${UNIT_BY_ID[id] || '台'}${info.name}`
  );

  const shapes = BASIC_SHAPES.map((id) => `生成一个${SHAPE_LABELS[id]}`);

  const tips = [
    '生成 5 个紫色球体',
    '生成一个 2 米高的圆柱',
    '生成一个超大的金色球体',
    '生成一个很小的银色圆锥',
    '帮我布置一个有冰箱和洗衣机的家',
    '生成一张北欧风木质餐桌，配四把椅子',
    '来一个赛博朋克风格的金色圆环',
    '把刚才的模型换成蓝色，再大一点',
  ];

  return [
    { title: '经典家电', items: appliances },
    { title: '基础几何体', items: shapes },
    { title: '进阶玩法', items: tips },
  ];
}

export const IDEAS = [
  '狮子鱼',
  '运动鞋',
  '生成一台冰箱',
  '复古台灯',
  '台式收音机',
  '微波炉',
  '复古电视',
  '台式电烤箱',
  '老式缝纫机',
  '生成一个金色圆环',
  '生成 5 个紫色球体',
];

export const SUPPORTED = Object.keys(APPLIANCES);


