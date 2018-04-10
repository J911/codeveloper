import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './config/router'
import axios from 'axios'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

import App from './App.vue'

Vue.prototype.$http = axios

Vue.use(VueRouter)
Vue.use(VueCodemirror,  { 
  options: { theme: 'base16-dark' },
  events: ['scroll']
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
