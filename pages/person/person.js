//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
    data: {
        user: false,
        show: false,
        showSex: false,
        userInfo: {},
        sex: "男",
        school: "西安邮电大学",
        phone: "13289237030",
        email: "1739416503@qq.com",
        address: "安悦公寓1号楼410宿舍45547567"
    },
    onLoad: function (options) {
        if(app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo
            })
        } else {
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        userInfo: res.userInfo
                    })
                }
            })
        }
        // this.getUserAllInfo();
    },
    // 获取用户信息
    getUserAllInfo() {
        wx.request({
            url: '',
            data: {

            },
            success(res) {

            },
            fail(error) {
               
            }
        })
    },
    onOpen() {
        this.setData({
            show: true
        });
    },
    onClose() {
        this.setData({
            show: false
        });
    },
    getSchool(e) {
        if(!e.detail.radio) {
            this.setData({
                show: false,
                school: e.detail.sch.name
            });
        } else {
            this.setData({
                show: false,
                sex: e.detail.radio
            });
        }
    },
    canSel(e) {
        this.setData({
            show: e.detail.show
        });
    },
    goPage(e) {
        if(e.target.id) {
            wx.navigateTo({
                url: '/pages/change/change?type=' + e.target.id
            })
        }
    }
})
