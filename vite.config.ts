import { AnnouncementPlugin } from 'vitepress-plugin-announcement'

export default {
  plugins: [
    // 配置AnnouncementPlugin插件
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
}