# 物料管理平台

> my first vue project

## 项目简介

简略的 Vue 练手项目，只做了发布物料、物料管理两个页面，发布物料页实现了三级联动选择框、表单验证等功能，物料管理页实现了编辑、复制、删除、路由传参跳转等功能。

## 技术栈
- [Vue](https://cn.vuejs.org/) + [Vue CLI 2](https://cli.vuejs.org/zh/) ：搭建项目模版
- [Vue Router](https://router.vuejs.org/zh/) ：前端路由跳转
- [Element UI](https://element.eleme.cn/#/zh-CN/) ：基于 Vue 的桌面端组件库
- [Less](http://lesscss.org/) ：CSS 预处理器
- [Axios](https://www.axios.com/) ：基于 Promise 的 HTTP 库
- [Web Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API) ：浏览器缓存
- [webpack](https://webpack.js.org/) ：静态模块打包器
- [npm](https://www.npmjs.com/) ：包管理

## 开发和发布

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构

``` pre
vue-manage-demo
├── build                        // webpack 配置文件
│   ├── build.js                 // 生成环境构建
│   ├── check-versions.js        // node npm 版本检查
│   ├── utils.js                 // 构建相关工具
│   ├── vue-loader.conf.js       // css 加载器配置
│   ├── webpack.base.conf.js     // webpack 基础配置
│   ├── webpack.dev.conf.js      // webpack 开发环境配置
│   └── webpack.prod.conf.js     // webpack 生产环境配置
├── config                       // 项目基本配置文件
│   ├── dev.env.js               // 开发环境配置
│   ├── index.js                 // 主要配置（监听端口、打包路径等）
│   └── prod.env.js              // 生产环境配置
├── src                          // 项目核心文件（源码）
│   ├── assets                   // 资源目录（会被 webpack 构建）
│   │   └── reset.css            // 重置样式
│   ├── components               // 组件目录
│   │   ├── Aside.vue            // 侧边栏公共组件
│   │   ├── CreateMain.vue       // 发布物料页内容组件
│   │   ├── Header.vue           // 头部公共组件
│   │   └── ManageMain.vue       // 物料管理页内容组件
│   ├── pages                    // 页面目录
│   │   ├── Create.vue           // 发布物料页
│   │   └── Manage.vue           // 物料管理页
│   ├── router                   // 路由
│   │   └── index.js             // 路由配置文件
│   ├── App.vue                  // 根组件
│   └── main.js                  // 入口 js 文件，加载各种公共组件
├── static                       // 静态资源目录（不会被 webpack 构建，存放图片、字体等）
│   ├── .gitkeep                 // git 追踪空文件夹
│   ├── data.json                // 三级联动数据
│   └── tableData.json           // 物料表格数据
├── .balelrc                     // 使用 babel 的配置文件，用来设置转码规则和插件
├── .editerconfig                // 代码规范（缩进等）
├── .gitignore                   // git 忽略文件
├── .postcssrc.js                // 指定 css 预处理器，默认配置了 autoprefixer ，自动补全浏览器前缀
├── deploy.sh                    // 部署脚本
├── index.html                   // 项目入口文件
├── package-lock.json            // 锁定依赖包版本号，npm 5 新增，可以优化性能
└── package.json                 // 项目依赖
```
