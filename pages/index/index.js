const AV = require('../../libs/leancloud/av-weapp-min')
const util = require('../../utils/util')
Page({
  data: {
    posts: [],
    pages: [],
    open: false
  },
  onLoad: function() {
    const query = new AV.Query('Post')
    query.descending('publishedAt').find().then(posts => {
      posts.map(post => {
        if(post.has('publishedAt')) {
          post.set('publishedAt', util.formatTime(post.get('publishedAt')))
        }
      })

      this.setData({
        posts
      })
    })
    
  },
  navigate: function(event) {
    const id = event.currentTarget.id
    wx.navigateTo({
      url: `/pages/post/index?id=${id}`
    })
  },
  navToggle: function() {
    this.setData({
      open: !this.data.open
    })
  },


})