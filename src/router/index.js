import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
