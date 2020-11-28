const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
  base: "/docs/",
  title: '可乐比酒更醉人',
  description: '可乐比酒更醉人的笔记',
  head: [
    ['meta', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明' }],
    ['meta', { name: 'author', content: '可乐比酒更质醉人' }]

  ], 
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
  themeConfig: {
    // lastUpdated: 'Last Updated',
    lastUpdated: '更新时间 ', // string | boolean
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: {
      "/css/": [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      "/javascript/": [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ],
      "/": [
        ""
      ]
    }, 
  }
} 