import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',//el元素会被<App/>替换
  /*components:{
    App
  },
  template:'<App/>'*/

  render: h => h(App),

  /*render:function (createElement) {
    return creat eElement(App) //返回<App/>
  }*/

  router,
})

