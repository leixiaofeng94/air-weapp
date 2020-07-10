"use strict";
var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        active: 1,
        diaryLists: [
            {
                title: '第1天',
                value: '2019.01.01',
                src: 'cloud://lxf-test-ae1u7.6c78-lxf-test-ae1u7-1302596755/assets/images/1.jpg',
                text: '我是第1天日记'
            },
            {
                title: '第2天',
                value: '2019.02.01',
                src: 'cloud://lxf-test-ae1u7.6c78-lxf-test-ae1u7-1302596755/assets/images/2.jpg',
                text: '我是第2天日记'
            },
            {
                title: '第3天',
                value: '2019.03.01',
                src: 'cloud://lxf-test-ae1u7.6c78-lxf-test-ae1u7-1302596755/assets/images/3.jpg',
                text: '我是第3天日记'
            },
            {
                title: '第4天',
                value: '2019.04.01',
                src: 'cloud://lxf-test-ae1u7.6c78-lxf-test-ae1u7-1302596755/assets/images/4.jpg',
                text: '我是第4天日记'
            },
            {
                title: '第5天',
                value: '2019.05.01',
                src: 'cloud://lxf-test-ae1u7.6c78-lxf-test-ae1u7-1302596755/assets/images/5.jpg',
                text: '我是第5天日记'
            },
            {
                title: '第6天',
                value: '2019.06.01',
                src: 'cloud://lxf-test-ae1u7.6c78-lxf-test-ae1u7-1302596755/assets/images/6.jpg',
                text: '我是第6天日记'
            }
        ]
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        var _this = this;
        // 当然 promise 方式也是支持的
        wx.cloud.callFunction({
        name: 'getBooksData',
        data: {
            "author": "lei"
        }
        }).then(res=>{
            console.log(res.result.data);
        }).catch(err=>{
            console.error(err);
        })
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlc0NvbnRlbnQiOlsiIl19