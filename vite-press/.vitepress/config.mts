import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "快速入门",
  description: "快速入门,介绍项目",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/images/icon/vitepress-logo.svg"
      }
    ]
  ],
  themeConfig: {
    logo: "/images/icon/vitepress-logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "NestJs", link: "/guide/nestjs/index" },
      { text: "Vue", link: "/guide/vue/index" },
      { text: "React", link: "/guide/react/index" }
    ],
    sidebar: {
      '/guide/nestjs': [
        {
          text: "介绍",
          items: [
            { text: "功能", link: "/guide/nestjs/index" },
            { text: "Runtime API Examples", link: "/api-examples" }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ]
  },
  vite: {
    server: {
      port: 10010,
      host: true
    }
  }
})
