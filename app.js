//app.js
const AV = require('./libs/leancloud/av-weapp-min')

AV.init({
  appId: 'mHNyMthW8oYXgEoQe4PKd1ES-gzGzoHsz',
  appKey: 'd5IeSJVEtb2x6DHDT1BY7dbQ'
})

App({
  onLaunch: function () {
    wx.setNavigationBarTitle({
      title: '王成刚的博客'
    })
  }
})