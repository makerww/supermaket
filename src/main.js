import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import Fastclick from"fastclick";


Vue.config.productionTip = false


// 解决移动端 300ms延迟
Fastclick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
