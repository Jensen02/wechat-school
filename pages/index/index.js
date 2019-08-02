//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '一站到邸',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556710224351&di=8abcfbd5cd0b340c5ce3635b17e7d878&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f4875b42d5c5a80121b994b0e9e4.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556710287197&di=b64458ebb71743f0bce4efcd56d68bbf&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0113fb5b42d5c4a80120b959964624.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556710360317&di=538e823231283af4f20f8c3dcdb81b52&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014c6e5b42d5c3a80121b994aa4eb6.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557305104&di=f3ab8ada319d5ef0ac6afad0f3f74b6f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aa495b42d5c4a80120b9593276ba.jpg%401280w_1l_2o_100sh.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556710423298&di=c00182e6a20ac4e5ceb1fe6a1491207f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b5e25b42d5afa80121b994d066a1.jpg%402o.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557305158&di=773dd558242852bd2390514e70a9574c&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018e925c8f552aa8012141684df014.jpg%401280w_1l_2o_100sh.jpg"
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
        url: '../logs/logs?id=1&other="abc"'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showMessage() {
        wx.showToast({
            title: '该功能即将上线',
            icon: 'success',
            duration: 2000
        });
  }
})
