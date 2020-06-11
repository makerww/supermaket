import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import( '@/views/category/Category.vue')
  },
  {
    path: '/live',
    name: 'Live',
    component: () => import( '@/views/live/Live.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( '@/views/profile/Profile.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
