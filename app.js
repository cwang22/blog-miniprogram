//app.js
const AV = require('./libs/leancloud/av-weapp-min')

AV.init({
  appId: 'OB1CKxdT8BW2j3mJLhSXhWch-gzGzoHsz',
  appKey: 'FxkchRxgQSMgA0wvPFvfUAIF'
})

App({
  onLaunch: function () {
    wx.setNavigationBarTitle({
      title: '王成刚的博客'
    })
  }
})