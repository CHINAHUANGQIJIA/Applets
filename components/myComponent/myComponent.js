const app = getApp()
Component({
  properties: {
    name: {
      type: String,
      value: '小明'
    },
    age: String
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    customMethod(){
      console.log('我是自定义组件的一个方法你调用了我')
    },
    changeName() {
      this.triggerEvent('changeName', {
        name: '黄启佳'
      })
    }    

  }
})