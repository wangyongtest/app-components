import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
    '/': [
      { text: '快速开始', link: '/' },
      {
        text: '通用'
      },
      {
        text: '导航',
      },
      {
        text: '反馈',
      },
      {
        text: '数据录入',
      },
      {
        text: '数据展示',
        children: [
          { text: 'Example', link: '/components/example/' },
        ]
      },
      {
        text: '布局',
      },
    ]
  }
  
  const config = {
    themeConfig: {
      sidebar,
    },
    markdown:{
        config: (md) => {
            md.use(demoBlockPlugin)
        }
    }
  }
  
  export default config