# 个人自我介绍主页 | Vue3 + TS + Vite
## 项目简介
这是工作室前端面试项目，基于Vue3+TypeScript+Vite开发的个人主页，包含登录验证、图片轮播、留言板三大功能。

## ✨ 功能清单
1. 登录校验：未登录只能看到登录页，登录成功才能访问自我介绍、轮播图、留言板块
2. 图片轮播：多张生活照片自动轮播
3. 留言板：支持提交留言，可对接大模型API实现AI自动回复。<u>留言临时存储在localStorage，仅保存本地浏览器，页面刷新不会立刻丢失，清除缓存或切换浏览器会消失</u>

## 📋 需求分析
1.<u>项目背景：学院工作室前端面试项目</u>
2.<u>产品目标：完成有登录验证、图片轮播、留言板三大功能的个人自我介绍主页</u>
3.项目分为三周迭代：
  第1周：原生HTML+CSS+JS，完成页面基础样式与交互；
  第2周：迁移到Vue3+TS，拆分成组件（登录组件、轮播组件、留言板组件），实现组件化开发；
  第3周：Git版本管理，推送GitHub，GitHub Actions部署上线，编写项目文档。


## 🤖 <u>AI辅助开发说明</u>
使用cline agent，调用deepseek大模型：
1. 首先自己学习了git以及github进行项目管理的所有操作，后续的项目内容均自己操作提交，未使用AI
2. 将项目需求以文字形式发送给AI，生成完成这一项目所需基本步骤，按照给出的项目目录自己在vscode上新建项目，搭建失败后让agent帮助搭建Vite+Vue3+TS项目骨架，生成基础组件代码
3. AI编写轮播图逻辑、登录状态判断、留言板页面结构与CSS样式
4. 自己在代码中添加轮播图路径以、登录的账号密码
5. 打开网页查看功能及页面情况，给出CSS样式修改方案，处理图片显示问题，进一步修改和完善代码
6. 在代码预留的API接口中接入密匙，测试AI留言功能，测试完成后删除，恢复模拟功能
7. 先自己用vercel尝试部署，因登录问题失败后，AI建议用GitHub Action完成部署，学习后根据指导手动部署，提交一直失败，最后使用agent排查问题，重新生成部署所需文件，完成部署

## 🐛 踩坑记录
1. 轮播图图片被裁切：AI原来使用`object-fit:cover`固定高度，图片上下被遮挡，修改为`object-fit:contain`搭配max-height
2. 项目文件全部写在App.vue，没有组件拆分：学习Vue组件化，把轮播、留言板拆成独立vue组件，方便维护
3. PowerShell执行npm<u>（Node.js的包管理器，用来下载、安装前端项目依赖包）</u>命令报错，切换CMD终端解决
5. 图片路径问题：本地预览正常，部署后图片404，图片放入public目录并使用`import.meta.env.BASE_URL`解决
6. AI 生成的CSS代码出现黄色波浪警告，清理隐藏不可见字符解决
7. TypeScript TS7016报错：缺少`.vue`类型声明，新增`vite-env.d.ts`补充模块声明
8. GitHub Actions流水线构建失败：Node版本过低，修改部署yml配置升级Node版本
9. Git推送代码超时卡住：配置git代理，使用代理完成代码推送

## 🧰 技术栈
- 开发框架：Vue3
- 语言：TypeScript
- 构建工具：Vite
- 样式：CSS（卡通马卡龙风格）
- 版本控制：Git
- 部署：GitHub Actions + GitHub Pages

## 🖥️ 本地运行
> 前置条件：本机安装 Node.js
```bash
# 进入vue项目文件夹
cd second

# 安装项目依赖
npm install

# 本地开发预览
npm run dev

# 打包构建
npm run build

# 预览打包后的静态页面
npm run preview
```

## 🌐 线上访问地址
https://sfxhsmmn.github.io/kfyz-qdzs/
每次向 main 分支执行 git push 提交代码，会自动触发 Actions 构建部署，等待 1~3 分钟即可更新线上网页。

## 📁 项目目录
```plaintext
kfyz-qdzs/
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions自动部署配置，推送代码自动打包发布
├── second/               # Vue项目根目录
│   ├── public/           # 静态资源，存放轮播图片
│   ├── src/
│   │   ├── components/   # 组件：轮播Slider、留言板MessageBox
│   │   ├── App.vue       # 主页面（登录界面 + 主页展示）
│   │   ├── main.ts       # Vue入口文件
│   │   └── vite-env.d.ts # TS类型声明，解决.vue文件类型报错
│   ├── vite.config.ts    # Vite配置，适配GitHub Pages子路径
│   ├── tsconfig.json     # TypeScript 配置文件
│   └── package.json      # 项目依赖管理
├── 第一周/               # 第一周原生网页代码
└── README.md             # 项目说明文档
```

## 🔐 登录信息
账号：zkd
密码：88888888


