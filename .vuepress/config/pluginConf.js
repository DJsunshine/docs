const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
  '@vuepress/last-updated':{
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      return moment(timestamp).format("LLLL")
    }
  },
  '@vuepress/pwa':{
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用",
      buttonText: "刷新"
    }
  }, 
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',

    // 其他的 Vssue 配置
    owner: 'DJsunshine',
    repo: 'docs',
    clientId: '48d8a6ef19726091355c',
    clientSecret: '9ae6d70e493d5c6ff28ba9f24fa5df62452b5975',
    autoCreateIssue: true
  },
  '@vuepress/back-to-top': true
}