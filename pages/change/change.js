// pages/change/change.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "",
        sms: "",
        pageType: "",
        title: "",
        errMsg: "",
        label: "",
        houseNumber: "1410宿舍",
        address: "西安邮电大学",
        placeholder: "",
        isDisabled: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        switch(options.type) {
            case "sex": this.setData({ title: "性别修改",pageType: "sex" }); break;
            case "phone": this.setData({
                    title: "手机号码修改",
                    pageType: "phone",
                    label: "手机号",
                    placeholder: "请输入手机号码"
                }); break;
            case "email": this.setData({
                    title: "邮箱修改",
                    pageType: "email",
                    label: "邮箱",
                    placeholder: "请输入绑定邮箱"
                }); break;
            case "address": this.setData({ title: "地址修改", pageType: "address" }); break;
        }
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    // 点击返回上一页面
    onClickLeft() {
        wx.navigateBack({
            delta: 1
        })
    },

    // 校验手机号码格式是否正确
    checkPhone(e) {
        // console.log(e.detail);
        let errroMessage = this.data.pageType === 'phone' ? "手机号格式错误" : "邮箱格式错误";
        let reg = this.data.pageType === 'phone' ? new RegExp("^([1][3|4|5|8|7|9])\\d{9}$")
            : new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
        
        if (!reg.test(e.detail)) {
            this.setData({ errMsg: errroMessage, isDisabled: true });
        } else {
            this.setData({ errMsg: "",isDisabled: false });
        }
    },

    // 获取用户输入的手机号码或邮箱账号
    getValue(e) {
        this.setData({ value: e.detail.value });
    },
    // 获取验证码
    getSms(e) {
        this.setData({ sms: e.detail.value });
    },

    // 点击提交按钮，修改信息
    confirmBtn() {
        wx.request({
            url: '',
            data: {
                value: this.data.value,
                sms: this.data.sms
            },
            method: 'POST',
            success(res) {

            }
        });
    },

    // 通过定位获取用户地址
    getAddress() {
        let self = this;
        wx.chooseLocation({
            success: function (res) {
                self.setData({
                    address: res.name
                });
            },
            fail: function (error) {
                console.log(error);
            }
        });
    }
})