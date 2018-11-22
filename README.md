# 小程序版个人博客

### 简介
为了试水小程序而制作的我的[个人博客](https://seewang.me)小程序版，实现了内容获取，基础样式，页面路由等简单功能。

由于我的博客部署在海外主机而没有备案，因此采用了曲线救国的方式，使用定时脚本将数据同步至 LeanCloud, 再由小程序从 LeanCloud 获取数据。

### 同步脚本
https://github.com/cwang22/blog-miniprogram-syncdata/

只是简单的调用了API,并且 hardcode 了我需要的分类，并没有通用性,仅供参考

### 工具/库
- FontAwesome: 图标
- LeanCloud: 内容储存
- wxParse: markdown解析

### 截图
![](https://github.com/cwang22/blog-miniprogram/raw/master/screenshot.png)


### 小程序码
<img src="https://raw.githubusercontent.com/cwang22/blog-miniprogram/master/qrcode.jpg" width="250" height="250">
