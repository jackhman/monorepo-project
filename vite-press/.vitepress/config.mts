import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/monorepo-project/",
  title: "小火车况且况且",
  description: "快速入门,介绍项目",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "images/icon/vitepress-logo.svg",
        type: "image/svg+xml"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        href: "images/common/funny.png",
        type: "image/png"
      }
    ]
  ],
  themeConfig: {
    logo: "/images/icon/vitepress-logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "NestJS", link: "/guide/nestjs/index" },
      { text: "Vue", link: "/guide/vue/index" },
      { text: "React", link: "/guide/react/index" }
    ],
    aside: "left",
    outline: {
      label: "导航"
    },
    sidebar: {
      '/guide/nestjs': [
        {
          text: "基础",
          items: [
            {
              text: "入门",
              link: "/guide/nestjs/index"
            },
            {
              text: "配置",
              items: [
                {
                  text: "链接数据库",
                  link: "/guide/nestjs/config/database"
                },
                {
                  text: "定义模块",
                  link: "/guide/nestjs/config/module"
                }
              ]
            },
            { text: "示例", link: "/guide/markdown-examples" }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present <a href="https://github.com/liuzhao2580" target="_blank">小火车况且况且</a>'
    }
  },
  lastUpdated: true,
  vite: {
    server: {
      port: 10010,
      host: true
    }
  }
})
