import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue')
  },
  {
    path: '/table-booking',
    name: 'TableBooking',
    component: () => import(/* webpackChunkName: "tableBooking" */ '../views/TableBooking.vue')
  },
  {
    path: '/menu-order-online',
    name: 'MenuOrderOnline',
    component: () => import(/* webpackChunkName: "menuOrderOnline" */ '../views/MenuOrderOnline.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
