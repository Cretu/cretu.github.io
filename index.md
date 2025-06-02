---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "记录人生的乐趣"
  text: "得之我幸，失之我命"
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
      { icon: 'twitter', link: 'https://twitter.com/Cretu' }
    ]
  }
]
</script>

### 我的名片
<VPTeamMembers size="small" :members="members" />
