const AV = require('../../libs/leancloud/av-weapp-min')
const WxParse = require('../../libs/wxParse/wxParse')
const util = require('../../utils/util')

Page({
  data: {
    post: {},
    isPage: false,
    open:false
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '读取中'
    })
    let id
    let type
    if(options.id) {
      id = options.id
      type = 'Post'
    } else {
      id = options.page
      type = 'Page'
      this.setData({
        isPage: true
      })
    }
    const query = new AV.Query(type)
    query.get(id).then(post => {
      if (post.has('publishedAt')) {
        post.set('publishedAt', util.formatTime(post.get('publishedAt')))
      }

      this.setData({ post })
      WxParse.wxParse('article', 'html', post.get('content'), this)
      wx.hideLoading()
    })
  },
  navToggle: function () {
    this.setData({
      open: !this.data.open
    })
  },
})
