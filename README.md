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
