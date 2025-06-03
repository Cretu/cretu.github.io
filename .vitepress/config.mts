import { defineConfig , DefaultTheme} from 'vitepress'
import { calculateSidebar as originalCalculateSidebar } from "@nolebase/vitepress-plugin-sidebar"
import tabsPlugin from '@red-asuka/vitepress-plugin-tabs'

import pkg from '../package.json'
const version = `v` + pkg.version
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Luke's Digital Garden",
  description: "得之我幸，惟吾德馨",
  // base: '/digital-garden/',
  cleanUrls: true,
  lang: 'zh-CN',
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: false,
  markdown: {
    config: (md) => {
      tabsPlugin(md)
    },
    theme: 'vitesse-dark',
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: `LDG<code class="VPBadge tip">${version}</code>`,
    logo: {
      src: '/Luke-avatar.png',
      alt: 'Luke Jiang'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '日志', link: '/note' },
      { text: '领域', link: '/area' },
      { text: '<Badge type="warning" text="beta" />', link: '/reference' }
    ],

    // sidebar: {
    //   '/note/': { base: '/note/', items: sidebarNote() },
    //   '/area/': { base: '/area/', items: sidebarArea() }
    // },
    sidebar: calculateSidebarWithDefaultOpen([ 
      '首页', 
      { folderName: 'note', separate: true }, 
      { folderName: 'area', separate: true }, 
    ], ""), 

    outline: 'deep',
    outlineTitle: '页面导航',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cretu' },
      { icon: 'twitter', link: 'https://twitter.com/Cretu' }, 
      { icon: 'wechat', link: 'https://chat.vitejs.dev/Cretu' }, 
      { icon: 'tiktok', link: 'https://chat.vitejs.dev/Cretu' }, 
      { icon: 'linkedin', link: 'https://chat.vitejs.dev/Cretu' }, 
    ],

    footer: {
      message: '自由共享 · 保留署名',
      copyright: `Copyright © ${new Date().getFullYear()} Luke Jiang`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
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

function calculateSidebarWithDefaultOpen(targets, base) { 
  const result = originalCalculateSidebar(targets, base) 
  if (Array.isArray(result)) { 
    result.forEach(item => { 
      item.collapsed = false
    }) 
  } else { 
    Object.values(result).forEach(items => { 
      if (Array.isArray(items)) {
        items.forEach(item => { 
          item.collapsed = false
        }) 
      }
    }) 
  } 
  return result 
}
