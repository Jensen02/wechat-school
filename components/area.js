// components/area.js
Component({
    properties: {
        sex: Boolean
    },
    /**
     * 组件的初始数据
     */
    data: {
        radio: "男",
        province: [],
        city: [],
        school: [],
        value: [0, 0, 0],
        schoolInfo: {}
    },

    /**
     * 组件的生命周期函数
     */
    lifetimes: {
        attached() {
            // 获取省列表
            wx.request({
                url: 'http://119.29.166.254:9090/api/provinces ',
                success: res => {
                    this.setData({
                        province: res.data
                    });
                    this.getSchoolList();
                }
            });
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getSchoolList(priIndex = 0,cityIndex = 0) {
            // 根据省id获取市
            wx.request({
                url: 'http://119.29.166.254:9090/api/province/getCitiesByProvinceId?id=' + this.data.province[priIndex].id,
                success: res => {
                    this.setData({
                        city: res.data
                    });
                    // 根据城市名称获取大学
                    wx.request({
                        url: 'http://119.29.166.254:9090/api/university/getUniversityByCityName?name=' + this.data.city[cityIndex],
                        success: res => {
                            this.setData({
                                school: res.data
                            });
                        }
                    })
                }
            })
        },
        bindChange(e) {
            const val = e.detail.value
            this.setData({
                value: val
            });
            this.getSchoolList(val[0],val[1]);
        },
        // 点击确认按钮选择学校
        confirm() {
            if(!this.data.sex) {
                let info = {
                    pro: this.data.province[this.data.value[0]],
                    cit: this.data.city[this.data.value[1]],
                    sch: this.data.school[this.data.value[2]]
                };
                this.triggerEvent('getschool', info);
            } else {
                this.triggerEvent('getschool',{ sex: this.data.radio });
            }
        },

        cancel() {
            this.triggerEvent('cancel',{show: false});
        },

        onChange(e) {
            this.setData({ radio: e.detail });
        }
    }
})
