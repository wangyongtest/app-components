# vue3.0+ + vite + ts

## 在根目录下创建 app-components 组件库

- 每个组件对应一个文件夹
  - index.ts 入口文件
  - src
    - conponents 组件不复用的组件
    - composables hooks
    - index.scss 样式文件
    - index.tsx 逻辑控制代码

## 测试组件是否能正常运行

1：在最外层 main.ts 中引入 Example 插件， 使用 use 挂载
2：在 app.vue 中使用组件
结论：正常显示组件 --> success

## 在根目录下创建 dosc 文件夹， 配置 vitepress

    - 安装 vitepress  npm i vitepress -D
    - 在 docs 目录下创建配置文件 vite.config.ts，配置和项目vite.config.ts 相同，但仅解析 tsx语法
    - 在package.json 下增加启动命令
    - 在 docs 下创建 .vitepress文件夹
    - 在 docs/.vitepress 下 创建 配置文件 config.ts，配置文档左侧菜单
    - 安装 vitepress-theme-demoblock 文档样式 插件

## 安装 开发组件的测试用例 [位置单个插件目录下]

    - 安装插件 npm i -D jest @types/jest
    - 在 app-components/example下创建__test__测试用例文件夹
    - 创建 example.specx.ts 测试用例文件
    - 添加测试命令  "test": "jest"
    - 执行 npm run test --testMatch='**/**/[插件名].apec.ts' 运行单个插件的单元测试
    - 安装 npm i -D @vue/test-utils 插件，dom挂载对象插件
    - npm i babel-jest @babel/preset-env -D 用于解析 es6 或 TS语法
