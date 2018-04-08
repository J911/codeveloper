import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './config/router'

import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
