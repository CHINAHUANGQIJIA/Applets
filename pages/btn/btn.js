// pages/btn/btn.js
Page({

   //事件处理函数
   bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

    changeName(event) {
      console.log(event.detail)
      // { name: '李四' }
    }, 
     onReady: function () {
      //  页面初次渲染完成后，使用选择器选择组件实例节点，返回匹配到组件实例对象  
      this.myComponent = this.selectComponent('#myComponent')
    },
     showComponent: function () {
        let myComponent = this.myComponent
        myComponent.customMethod()  // 调用自定义组件中的方法
     },
  data: {
    name: '父组件传到子组件的name:Peggy',
    age: '父组件传到子组件的age:18'
  },



})