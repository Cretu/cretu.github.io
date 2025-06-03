import { defineConfig , DefaultTheme} from 'vitepress'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Luke's Digital Garden",
  description: "得之我幸，惟吾德馨",
  // base: '/digital-garden/',
  cleanUrls: true,
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: false,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/Luke-avatar.png',
      alt: 'Luke Jiang'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '日志', link: '/note' }
    ],

    sidebar: {
      '/note/': { base: '/note/', items: sidebarNote() },
      '/area/': { base: '/area/', items: sidebarArea() }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cretu' }
    ],

    footer: {
      message: '自由共享 · 保留署名',
      copyright: `Copyright © ${new Date().getFullYear()} Luke Jiang`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '取消'
            }
          }
        }
      }
    }
  },

  // 配置AnnouncementPlugin插件
  vite: {
    // ↓↓↓↓↓
    plugins: [
      AnnouncementPlugin({
        twinkle: true,
        duration: 5000,
        title: '公告',
        body: [
          { type: 'text', content: '👇公众号👇 ---👇 赞赏 👇' }
        ],
        footer: [
          {
            type: 'button',
            content: '点赞👍',
            link: '#'
          },
          {
            type: 'button',
            content: '收藏⭐',
            link: '#',
            props: {
              type: 'success'
            }
          },
        ],
      })
    ]
    // ↑↑↑↑↑
  }
})

function sidebarNote(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}

function sidebarArea(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/zh/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}