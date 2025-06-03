---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 陆可的人生乐趣
  text: 记录人生
  textsuffix: 得意须尽欢
  tagline: 欢迎👏关注我的数字人生乐园
  image:
    src: /keep_passoin.png
    alt: 保持热爱
  actions:
    - theme: brand
      text: 自我介绍
      link: /about
    - theme: alt
      text: 日志记录
      link: /note
    - theme: alt
      text: 研究领域
      link: /area

features:
  - icon: 🛠️
    title: 实事求是
    details: 尽量表达自己的真实想法，而不是去迎合别人的想法
  - icon: 🛠️
    title: 乐观向上
    details: 乐观是一种心态，而不是一种态度
  - icon: 🛠️
    title: 谦虚谨慎
    details: 谦虚是一种态度，而不是一种心态

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.yitang.top/homework/prod/db7ab71265308687b1186584798c54eb.png',
    name: 'Luke Jiang',
    title: 'Freelancer / Writer / Programmer / Enteruprear',
    links: [
      { icon: 'github', link: 'https://github.com/Cretu' },
      { icon: 'twitter', link: 'https://twitter.com/Cretu' },
      { icon: 'wechat', link: 'https://twitter.com/Cretu' },
      { icon: 'linkedin', link: 'https://twitter.com/Cretu' }
    ]
  },
  {
    avatar: 'https://cdn.yitang.top/homework/prod/db7ab71265308687b1186584798c54eb.png',
    name: 'Luke Jiang',
    title: 'Freelancer / Writer / Programmer / Enteruprear',
    links: [
      { icon: 'github', link: 'https://github.com/Cretu' },
      { icon: 'twitter', link: 'https://twitter.com/Cretu' },
      { icon: 'wechat', link: 'https://twitter.com/Cretu' },
      { icon: 'linkedin', link: 'https://twitter.com/Cretu' }
    ]
  }
]

const items = [
  // 普通 iconify 图标
  {
    name: 'iconify',
    link: 'https://iconify.design/',
    icon: 'line-md:iconify2-static',
    color: '#1769AA',
    alt: 'iconify icon',
    rel: 'noopener noreferrer'
  },
  // 深浅色模式的 iconify 图标
  {
    name: 'Vercel',
    link: 'https://vercel.com/',
    icon: { light: 'ion:logo-vercel', dark: 'ion:logo-vercel' },
    color: { light: '#000000', dark: '#FFFFFF' },
    alt: 'Vercel icon',
    rel: 'noopener noreferrer'
  },
  // 深浅色模式的 iconify 图标（无 color）
  {
    name: 'Vite',
    link: 'https://vitejs.dev/',
    icon: { light: 'skill-icons:vite-light', dark: 'skill-icons:vite-dark' },
    alt: 'Vite icon',
    rel: 'noopener noreferrer'
  },
  // 普通图片
  {
    name: '支付宝',
    link: 'https://i.theojs.cn/alipay.webp',
    image: 'https://i.theojs.cn/logo/alipay.svg',
    alt: 'alipay icon',
    rel: 'noopener noreferrer'
  },
  // 深浅色模式图片
  {
    name: 'GitHub',
    link: 'https://github.com',
    image: {
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg'
    },
    alt: 'github icon',
    rel: 'noopener noreferrer'
  },
  // 带标签的图标
  {
    name: 'Vue',
    link: 'https://vuejs.org/',
    icon: 'vscode-icons:file-type-vue',
    tag: 'new',
    alt: 'vue icon',
    rel: 'noopener noreferrer'
  }
]
</script>

<Home />

### 我的社交
<Box :items="items" />

### 我的名片
<VPTeamMembers size="small" :members="members" />
