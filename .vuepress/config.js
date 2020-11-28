module.exports = {
  title: '可乐比酒更醉人',
  description: '可乐比酒更醉人的笔记',
  head: [
    ['meta', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明' }],
    ['meta', { name: 'author', content: '可乐比酒更质醉人' }]

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