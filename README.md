# Cloudscape 3D · 行业解决方案平台

基于 Three.js + Vite 多页面构建的 3D 解决方案演示平台，包含智能体工作台、行业 3D 案例库，以及多套可交互的行业解决方案演示页。

## 功能模块

- **智能体工作台** `index.html`：自然语言生成 3D 场景，内置模型直通、增量修改、语音输入与大模型兜底
- **行业 3D 案例库** `gallery.html`：19 个模型案例、全文检索、全屏查看器与「行业方案中枢」决策链
- **解决方案总览** `solutions.html`：汇总各行业方案入口
- **行业演示页**：工业拆解、太阳系科普、整车换色、中国古建展馆、博物馆数字化展陈、社区 Demo

## 技术栈

| 方向 | 选型 |
| --- | --- |
| 3D 渲染 | Three.js 0.186（GLTFLoader / DRACOLoader / MeshoptDecoder） |
| 构建 | Vite 8 多页面应用 |
| 后端 | Node.js 原生 HTTP 服务（大模型代理与管理接口） |
| 交互 | OrbitControls、MediaPipe Hands 手势、Web Audio 实时合成音效 |
| 样式 | 原生 CSS，统一黑金主题 |

## 目录结构

```
.
├── index.html                # 智能体工作台
├── gallery.html              # 行业 3D 案例库
├── solutions.html            # 解决方案总览
├── disassembly.html          # 工业零部件可视化（爆炸拆解）
├── solar.html                # 太阳系在线科普
├── su7.html                  # 整车在线换色定制
├── architecture.html         # 中国古建数字展馆
├── museum.html               # 博物馆数字化展陈
├── community.html            # 社区 Demo
├── src/
│   ├── agent/                # 工作台逻辑（生成 / 模型库 / 视口）
│   ├── *.js / *.css          # 各页面逻辑与样式
│   └── data/                 # 页面静态数据
├── server/index.js           # 后端服务（LLM 代理 + 模型清单）
├── public/                   # 静态资源（模型、封面、Draco 解码器）
└── vite.config.js            # 多页面入口与代理配置
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动后端（默认 3001）
npm run server

# 启动前端预览（默认 4173）
npm run preview
```

开发模式：

```bash
npm run dev
```

## 页面清单

| 路径 | 说明 |
| --- | --- |
| `/` | 智能体工作台 |
| `/gallery.html` | 行业 3D 案例库 |
| `/solutions.html` | 解决方案总览 |
| `/disassembly.html` | 工业零部件可视化 |
| `/solar.html` | 太阳系在线科普 |
| `/su7.html` | 整车在线换色定制 |
| `/architecture.html` | 中国古建数字展馆 |
| `/museum.html` | 博物馆数字化展陈 |
| `/community.html` | 社区 Demo |

## 后端接口

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/models` | 返回模型清单（标题、分类、描述、许可等） |
| GET | `/api/models/raw/<filename>` | 返回模型文件 |
| POST | `/api/advisor` | 行业方案中枢，输出决策链（分析 / 组合 / 展陈 / 步骤 / 成本） |
| POST | `/api/agent` | 工作台自然语言生成接口 |

## 说明

- 大体积模型资源不纳入版本控制：`public/**/*.glb` 与 `public/su7/` 已在 `.gitignore` 中排除
- 大模型密钥仅在后端读取，前端不打包任何凭据
- 模型许可统一标注为「Sketchfab 授权」
