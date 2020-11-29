const headConf = require('./config/headConf.js')
const pluginConf = require('./config/pluginConf.js')
module.exports = {
  base: "/",
  title: '可乐比酒更醉人',
  description: '可乐比酒更醉人的笔记', 
  head: headConf,
  plugins: pluginConf,
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