import VueRouter from 'vue-router'
import Home from '../spa/Home.vue'

const routes = [
    { path: '/', component: Home},
]

const router = new VueRouter({
    mode: 'history',
    routes 
})

export default router