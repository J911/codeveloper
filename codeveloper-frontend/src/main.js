import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './config/router'
import axios from 'axios'

import App from './App.vue'

Vue.prototype.$http = axios
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
