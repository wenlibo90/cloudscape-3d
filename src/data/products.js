export const PRODUCTS = [
  {
    id: 'fridge',
    name: '琴岛-利勃海尔 双门冰箱',
    nameEn: 'Qindao-Liebherr Refrigerator',
    model: 'BCD-176',
    year: '1984',
    brand: '海尔 Haier',
    category: '制冷冰箱',
    accent: '#2f6fb0',
    tagline: '一座厨房里最沉默、也最可靠的白色方柜。',
    story:
      '1984 年，青岛电冰箱总厂引进德国利勃海尔四星级冰箱技术，次年诞生“琴岛-利勃海尔”冰箱。张瑞敏当众砸毁 76 台不合格冰箱的故事，让“质量”第一次成为中国制造的底线。',
    highlights: ['四星级冷冻', '全镀铬拉手', '象牙白烤漆钢板'],
    specs: [
      { label: '容积', value: '双门 4 星级' },
      { label: '外壳', value: '象牙白烤漆钢板' },
      { label: '把手', value: '全镀铬拉手' },
      { label: '铭牌', value: '琴岛-利勃海尔' },
    ],
  },
  {
    id: 'washer',
    name: '海尔 波轮洗衣机',
    nameEn: 'Haier Pulsator Washer',
    model: 'XPB60-8S',
    year: '1992',
    brand: '海尔 Haier',
    category: '洗涤电器',
    accent: '#3f9c8f',
    tagline: '顶开一扇盖，解放了无数双手。',
    story:
      '顶开式波轮洗衣机是 1990 年代中国家庭的标配。机械旋钮选择洗涤程序，指示灯亮起，桶内波轮卷起水流。它把星期天的洗衣日，变成了一次旋钮的转动。',
    highlights: ['波轮洗涤', '机械程序旋钮', '前开透明顶盖'],
    specs: [
      { label: '洗涤方式', value: '波轮式' },
      { label: '控制', value: '机械旋钮 + 按键' },
      { label: '顶盖', value: '前开式透明盖' },
      { label: '机身', value: '白色注塑外壳' },
    ],
  },
  {
    id: 'aircon',
    name: '海尔 窗式空调',
    nameEn: 'Haier Window Air Conditioner',
    model: 'KC-21',
    year: '1993',
    brand: '海尔 Haier',
    category: '空气调节',
    accent: '#c98a3c',
    tagline: '装在窗台上的一方清凉。',
    story:
      '窗式空调把整机嵌进窗框，压缩机、冷凝器与出风口合为一体。导风叶片来回摆动，米黄色外壳被岁月晒出淡淡光泽，是许多人对“夏天”最早的技术记忆。',
    highlights: ['窗式一体机', '手动摆动导风叶', '双旋钮面板'],
    specs: [
      { label: '安装方式', value: '窗式一体机' },
      { label: '导风', value: '手动摆动叶片' },
      { label: '控制', value: '双旋钮面板' },
      { label: '外壳', value: '米黄工程塑料' },
    ],
  },
  {
    id: 'tv',
    name: '海尔 大王子 彩色电视机',
    nameEn: 'Haier Prince Color TV',
    model: 'CR-21',
    year: '1992',
    brand: '海尔',
    category: '影音电视',
    accent: '#7a5537',
    tagline: '厚重的显像管电视，一家人围坐的客厅中心。',
    story:
      'CRT 电视依靠阴极射线管成像，机身厚重、屏幕带弧度。频道旋钮、拉杆天线、外壳上的一圈木纹装饰，是九十年代客厅里最具仪式感的物件。',
    highlights: ['阴极射线管显示', '机械频道调节', '一体化扬声器'],
    specs: [
      { label: '屏幕尺寸', value: '21 英寸' },
      { label: '显像方式', value: 'CRT 阴极射线管' },
      { label: '调谐方式', value: '机械频道旋钮' },
      { label: '伴音', value: '内置单声道扬声器' },
    ],
  },
];

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}
