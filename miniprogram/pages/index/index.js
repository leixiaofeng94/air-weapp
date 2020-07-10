"use strict";
import * as echarts from '../../components/@ec-canvas/echarts';
var city = require('../utils/city.js');
var app = getApp();
let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);
  let option = {
    color: ['#43ce17', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: 30,
      right: 10,
      bottom: 30,
      top: 10,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth : 20,//柱图宽度
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({
    data: {
        currentCity: "西安",
        hotcityList: [{ cityCode: 110000, city: '北京市' }, { cityCode: 310000, city: '上海市' }, { cityCode: 440100, city: '广州市' }, { cityCode: 440300, city: '深圳市' }, { cityCode: 330100, city: '杭州市' }, { cityCode: 320100, city: '南京市' }, { cityCode: 420100, city: '武汉市' }, { cityCode: 410100, city: '郑州市' }, { cityCode: 120000, city: '天津市' }, { cityCode: 610100, city: '西安市' }, { cityCode: 510100, city: '成都市' }, { cityCode: 500000, city: '重庆市' }],
        selectShow: false,
        ec: {
          onInit: initChart
        }
    },
    bindPickerChange: function(e) {
        this.setData({
            selectShow: true
        })
    },
    onLoad: function () {
        var _this = this;
        // 当然 promise 方式也是支持的
        // wx.cloud.callFunction({
        // name: 'getBooksData',
        // data: {
        //     "author": "lei"
        // }
        // }).then(res=>{
        //     console.log(res.result.data);
        // }).catch(err=>{
        //     console.error(err);
        // })
        // 生命周期函数--监听页面加载
        var searchLetter = city.searchLetter;
        var cityList = city.cityList();
        var sysInfo = wx.getSystemInfoSync();
        var winHeight = sysInfo.windowHeight;
        var itemH = winHeight / searchLetter.length;
        var tempObj = [];
        for (var i = 0; i < searchLetter.length; i++) {
        var temp = {};
        temp.name = searchLetter[i];
        temp.tHeight = i * itemH;
        temp.bHeight = (i + 1) * itemH;
        tempObj.push(temp)
        }
        this.setData({
        winHeight: winHeight,
        itemH: itemH,
        searchLetter: tempObj,
        cityList: cityList
        })
    },
      //选择城市
      bindCity: function (e) {
        this.setData({ 
          currentCity: e.currentTarget.dataset.city,
          selectShow: false
        })
      },
      //选择热门城市
      bindHotCity: function (e) {
        this.setData({
          currentCity: e.currentTarget.dataset.city,
          selectShow: false
        })
      },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxNQUFNLEVBQUUsQ0FBQztRQUNULFVBQVUsRUFBRTtZQUNWO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxZQUFZO2dCQUNuQixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxZQUFZO2dCQUNuQixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxZQUFZO2dCQUNuQixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxZQUFZO2dCQUNuQixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxZQUFZO2dCQUNuQixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsU0FBUzthQUNoQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxZQUFZO2dCQUNuQixHQUFHLEVBQUUsc0JBQXNCO2dCQUMzQixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGO0tBQ0Y7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBMkJDO1FBMUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUEsR0FBRztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7U0FDRjthQUFNO1lBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgYWN0aXZlOiAxLFxuICAgIGRpYXJ5TGlzdHM6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfnrKwx5aSpJyxcbiAgICAgICAgdmFsdWU6ICcyMDE5LjAxLjAxJyxcbiAgICAgICAgc3JjOiAnL2Fzc2V0cy9pbWFnZXMvMS5qcGcnLFxuICAgICAgICB0ZXh0OiAn5oiR5piv56ysMeWkqeaXpeiusCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn56ysMuWkqScsXG4gICAgICAgIHZhbHVlOiAnMjAxOS4wMi4wMScsXG4gICAgICAgIHNyYzogJy9hc3NldHMvaW1hZ2VzLzIuanBnJyxcbiAgICAgICAgdGV4dDogJ+aIkeaYr+esrDLlpKnml6XorrAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+esrDPlpKknLFxuICAgICAgICB2YWx1ZTogJzIwMTkuMDMuMDEnLFxuICAgICAgICBzcmM6ICcvYXNzZXRzL2ltYWdlcy8zLmpwZycsXG4gICAgICAgIHRleHQ6ICfmiJHmmK/nrKwz5aSp5pel6K6wJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfnrKw05aSpJyxcbiAgICAgICAgdmFsdWU6ICcyMDE5LjA0LjAxJyxcbiAgICAgICAgc3JjOiAnL2Fzc2V0cy9pbWFnZXMvNC5qcGcnLFxuICAgICAgICB0ZXh0OiAn5oiR5piv56ysNOWkqeaXpeiusCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn56ysNeWkqScsXG4gICAgICAgIHZhbHVlOiAnMjAxOS4wNS4wMScsXG4gICAgICAgIHNyYzogJy9hc3NldHMvaW1hZ2VzLzUuanBnJyxcbiAgICAgICAgdGV4dDogJ+aIkeaYr+esrDXlpKnml6XorrAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+esrDblpKknLFxuICAgICAgICB2YWx1ZTogJzIwMTkuMDYuMDEnLFxuICAgICAgICBzcmM6ICcvYXNzZXRzL2ltYWdlcy82LmpwZycsXG4gICAgICAgIHRleHQ6ICfmiJHmmK/nrKw25aSp5pel6K6wJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=