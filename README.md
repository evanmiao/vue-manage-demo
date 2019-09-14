# 物料管理平台

> my first vue project

## 关于此项目

- 项目介绍：该项目使用 Vue 实现了一个物料管理平台。包含发布物料、物料管理两个页面，发布物料页实现了三级联动选择框、表单验证等功能，物料管理页实现了编辑、复制、删除、分页、路由传参跳转等功能。项目以 Vue CLI 为基础创建模版，使用 Less 作 CSS 预处理，引用 Element UI 作交互。通过 Vue Router 实现路由的跳转，用 Axios 获取数据，用 Local Storage 存储数据。

- 技术栈：Vue、Vue CLI、Vue Router、Axios、Element UI、Less、npm

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

``` bash
├── build                        // webpack 配置文件
├── config                       // 项目开发环境配置
│   ├── index.js                 // 项目打包部署配置
├── src
│   ├── assets                   // 静态资源
│   |   ├── reset.css            // 重置样式
│   ├── components
│   |   ├── Aside.vue            // 侧边栏公共组件
│   |   ├── Header.vue           // 头部公共组件
│   |   ├── CreatMain.vue        // 发布物料页内容组件
│   |   ├── ManageMain.vue       // 物料管理页内容组件
│   ├── page
│   |   ├── Creat.vue            // 发布物料页
│   |   ├── Manage.vue           // 物料管理页
│   ├── router
│   |   ├── index.js             // 路由
│   ├── App.vue                  // 页面入口文件
│   └── main.js                  // 程序入口文件，加载各种公共组件
├── static
│   ├── data.json                // 三级联动数据
│   ├── tableData.json           // 表格数据
├── index.html                   // 入口 HTML 文件
├── package.json                 // 项目依赖
└── vue.config.js                // vue-cli 3.0 配置
```
