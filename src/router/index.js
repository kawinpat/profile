import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
