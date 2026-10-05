# 用户指令记忆

本文件记录了用户的指令、偏好和教导，用于在未来的交互中提供参考。

## 格式

### 用户指令条目

[用户指令摘要]
- Date: [YYYY-MM-DD]
- Context: [提及的场景或时间]
- Instructions:
  - [用户教导或指示的内容，逐行描述]

### 项目知识条目

[项目知识摘要]
- Date: [YYYY-MM-DD]
- Context: Agent 在执行 [具体任务描述] 时发现
- Category: [运维部署|构建方法|测试方法|排错调试|工作流协作|环境配置]
- Instructions:
  - [具体的知识点，逐行描述]

## 去重策略
- 添加新条目前，检查是否存在相似或相同的指令
- 若发现重复，跳过新条目或与已有条目合并
- 合并时，更新上下文或日期信息

## 条目

项目构建与模型导出流程
- Date: 2026-10-01
- Context: Agent 在搭建 3D 老家电博物馆与智能体工作台时发现
- Category: 构建方法
- Instructions:
  - 前端构建：`cd /workspace && npm run build`，产物输出到 `dist/`
  - glb 模型由 Node 脚本生成：`npm run export:glb`，产物输出到 `public/models/`
  - 关键：模型定义在 `src/models/*.js`，修改模型代码后必须重新执行 `npm run export:glb`，否则 glb 不会更新
  - 模型 glb 必须被 `public/models/` 收录，前端通过 `/models/{id}.glb` 路径加载
  - 本项目为 Vite 多页面应用：`index.html` 为智能体工作台，`museum.html` 为老家电博物馆
  - 新增页面时必须同步在 `vite.config.js` 的 `build.rollupOptions.input` 中注册入口，否则不会进入构建产物

本地预览方式
- Date: 2026-09-30
- Context: Agent 在部署预览时发现
- Category: 运维部署
- Instructions:
  - 本项目使用 `npm run preview` 提供预览（生产构建，端口 4173），比 dev 模式更省内存
  - 预览前必须先执行 `npm run build`，因为 preview 服务的是 `dist/` 产物
  - vite 配置已设置 `host: '0.0.0.0'` 与 `allowedHosts`，外部可访问

无头浏览器截图验证方法
- Date: 2026-09-30
- Context: Agent 在验证 3D 渲染效果时发现
- Category: 排错调试
- Instructions:
  - 环境未预装浏览器，需要 `npm install -D puppeteer` 后安装运行库：`apt-get install -y --no-install-recommends libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libdbus-1-3 libxkbcommon0 libatspi2.0-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libpango-1.0-0 libcairo2 libasound2 libglib2.0-0`
  - 环境仅有 `chrome-headless-shell` 二进制，需通过 `CHROME_BIN=/root/.cache/puppeteer/chrome-headless-shell/*/chrome-headless-shell-linux64/chrome-headless-shell` 指定
  - 必须加启动参数 `--no-sandbox --disable-dev-shm-usage --enable-unsafe-swiftshader --use-gl=angle --use-angle=swiftshader`，否则 WebGL 不可用
  - swiftshader 软件渲染帧率极低，截图前等待时间需 12 秒以上；`backdrop-filter` 会显著拖慢渲染，验证时可通过注入 CSS 禁用
  - 截图脚本位于 `scripts/screenshot.js`

环境中文渲染
- Date: 2026-10-01
- Context: Agent 在无头截图验证中文界面时发现
- Category: 环境配置
- Instructions:
  - 容器默认未安装中文字体，无头截图会渲染为方块（tofu）
  - 已通过 `apt-get install -y --no-install-recommends fonts-noto-cjk` 解决，可用字体名为「Noto Sans CJK SC」
  - 新增中文界面截图任务前，先确认 `fc-list | grep "CJK SC"` 有输出
  - 页面字体栈保持系统字体优先，用户真实浏览器无需额外 CDN 字体

新增家电模型的注册流程
- Date: 2026-10-01
- Context: Agent 在扩充智能体模型库时发现
- Category: 工作流协作
- Instructions:
  - 新增一款家电需要改三处，缺一处都会导致对话无法生成该模型：
    1. 在 `src/models/` 下编写 builder 函数（模型底部对齐 y = 0）
    2. 在 `src/models/index.js` 的 `BUILDERS` 中注册 id
    3. 在 `src/agent/generator.js` 的 `APPLIANCES` 中补充名称与高度，并在 `SHAPES` 中补充中文关键词
  - 模型高度用于「2 米」这类绝对尺寸换算，需要填写真实高度
  - 基础几何体（立方体 / 球 / 圆柱等）无需注册，由 `SHAPES` 后半段的关键词直接匹配
  - 后端提示词里的模型清单与颜色清单由 `src/agent/generator.js` 动态导出生成，新增模型不需要改动 server 代码

模型造型批量检视方法
- Date: 2026-10-01
- Context: Agent 在批量核对 16 款模型造型时发现
- Category: 排错调试
- Instructions:
  - `scripts/model-preview.html` 是开发用检视页，以 4x4 网格渲染全部家电并显示编号名称，不参与生产构建
  - 需先启动 `npm run dev`，再访问 `http://localhost:5173/scripts/model-preview.html`
  - 正式对外页面为 `gallery.html`（模型库），已注册进 `vite.config.js` 构建入口
  - 检视页按高度归一化展示，便于核对造型；调整列间距时注意大件（微波炉 / 烤箱 / 空调）宽度可达小件的 4 倍

大模型接入与前后端启动
- Date: 2026-10-01
- Context: Agent 在把关键词匹配升级为智能对话时发现
- Category: 运维部署
- Instructions:
  - 后端服务位于 `server/index.js`，端口 3001，启动命令 `npm run server`
  - 后端从平台注入的环境变量读取模型配置：`MCAI_LLM_BASE_URL`、`MCAI_LLM_API_KEY`、`MCAI_LLM_MODEL`，接口为 OpenAI 兼容的 `/chat/completions`
  - 上述变量属于敏感凭据，只能在后端读取，禁止打印、输出或打包进前端
  - 前端统一请求同源 `/api/agent`，由 Vite 的 `server.proxy` 与 `preview.proxy` 转发到 3001，密钥不出现在浏览器
  - 完整启动顺序：先 `npm run server`，再 `npm run preview`，两个进程缺一不可
  - 前端启动时探测 `/api/health`，接口不可用时自动降级为本地关键词匹配，保证离线也能生成
  - 修改 proxy 配置或环境变量后，必须重启后端与前端进程才能生效
  - 后端返回结构化建模指令（reply / action / objects），对象数量上限 6，字段在 `server/index.js` 的 `sanitize` 中做白名单校验

生成入口采用「内置直通优先」策略
- Date: 2026-10-01
- Context: 用户反馈初始化与点击快捷指令加载过慢
- Category: 工作流协作
- Instructions:
  - 对话输入先经 `matchLocalModel`（`src/agent/generator.js`）判定：命中单一内置模型时本地直接生成，不调用大模型
  - 判定规则：文本长度不超过 16 字、不含场景连接词、恰好命中一个模型关键词
  - 场景 / 风格 / 增量修改 / 闲聊等复杂输入才交给大模型理解
  - 大模型不可用时同样回退到本地关键词解析，保证离线可用
  - 调整模型关键词或新增模型时，需同步检查 `SCENE_HINTS`，避免把单个模型请求误判为场景而绕道大模型
  - 实测参考（软件渲染环境）：内置直通约 0.3~0.4 秒，大模型约 7 秒

模型库页面与 glb 资源
- Date: 2026-10-01
- Context: 用户要求模型库作为行业案例展示窗口，统一中文内容
- Category: 工作流协作
- Instructions:
  - `gallery.html` 是「行业 3D 案例库」，定位为展示工作台跨行业生成能力的窗口，内容全部使用中文
  - 后端接口：`GET /api/models` 返回清单（title / description / category / author / license / source / size / meshes），`GET /api/models/raw/<filename>` 返回 glb
  - 后端读取源码目录 `public/draco_model`，新增模型只需放入 glb 并重启后端，无需改代码或重新构建
  - 中文名称与描述维护在 `public/draco_model/catalog.json`，按「文件名（不含扩展名）」为键覆盖 title / category / description
  - 未在 catalog.json 中配置的模型，标题回退到 glb 的 `asset.extras.title`，分类由 `CATEGORY_RULES` 关键词规则推断
  - 许可统一输出为「Sketchfab 授权」，不再显示具体 CC 协议
  - 垂直领域划分：家电电子 / 文博艺术 / 消费零售 / 工业装备 / 天文航天 / 自然生态 / 医疗健康 / 科研仪器
  - 页面固定 16 个展示位，不足补空位卡片，数量调整改 `src/gallery.js` 的 `TOTAL_SLOTS`
  - Draco 解码器位于 `public/draco/`，`DRACOLoader.decoderPath` 固定为 `/draco/`
  - 缩略图由离屏 WebGLRenderer 渲染并缓存；全屏查看器使用独立 renderer + OrbitControls（旋转 / 缩放 / 平移 / 重置 / 自动旋转 / 全屏）

页面顶栏统一规范（参照 solar.html）
- Date: 2026-10-04
- Context: 用户要求以后新建页面的标题与返回工作台统一，规范与样式设计参照 solar.html
- Category: 工作流协作
- Instructions:
  - 新建页面顶栏统一结构：左侧 `.titles`（内含 `.title-line > h1` 与 `<p>` 副标题），右侧 `.back` 返回工作台链接（`href="/"`）
  - 标题 `h1` 使用黑金渐变文字：`linear-gradient(100deg, #f6f3ec 0%, #e3c98f 36%, #c9a45c 64%, #7d6633 100%)` 配合 `background-clip: text`，字号 `clamp(20px, 2.2vw, 28px)`
  - `.titles` 左侧带金色竖线（`border-left` + `border-image: linear-gradient(180deg, var(--gold-light), var(--gold), transparent) 1`）
  - 返回按钮位于右上角，胶囊描边样式，hover 向右位移 `translateX(3px)`
  - 已按此规范统一的页面：`solar.html`、`disassembly.html`；后续新页面直接复用该结构
  - 所有 HTML 页面（含根目录与 `scripts/` 下的开发页）必须在 `<head>` 声明 favicon，统一写法 `<link rel="icon" type="image/png" href="/favicon.png" />`

Git 提交排除大体积模型资源
- Date: 2026-10-05
- Context: 用户在首次提交时明确要求
- Category: 工作流协作
- Instructions:
  - `public/` 目录下所有 `.glb` 模型文件不纳入版本控制
  - `public/su7/` 整个文件夹不纳入版本控制
  - 上述规则已写入 `.gitignore`，后续所有 `git add` / 提交均不包含这些文件
