import Vue from 'vue'
import VueRouter from 'vue-router'
import moveRoute from './move'
import mineRoute from './mine'
import cinemaRoute from './cinema'
import adminRoute from './admin'
Vue.use(VueRouter)

const routes = [
  moveRoute,
  mineRoute,
  cinemaRoute,
  adminRoute,
    // 路由重定向，当路由匹配不到组件时，自动加载move
  {
    path:"/*",
    redirect:"/move"
  }
]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  base: 'miaoMovie',
  routes
})

export default router
