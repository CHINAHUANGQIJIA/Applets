// pages/mus/mus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this 
    wx.request({  
    url: 'https://music.163.com/api/playlist/detail?id=2250011882',
    //这里填写你的接口路径  
    method: 'GET',   
        header: {     
          'content-type': 'application/json'
 //默认值//这里写你接口返回的数据是什么类型，这里就体现了微信小程序的强大，直接给你解析数据，再也不用去寻找各种方法去解析json，xml等数据了
        },  //这里写你要请求的参数   
      data: {     x: '' ,     y: ''  }, 
      success: function (res) {
      //这里就是请求成功后，进行一些函数操作
      console.log(res.data);  
        that.setData({    
            items:res.data,   
          })
         },
         fail: function (res) { 
           console.log("......fail......"); 
          }  
        })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})