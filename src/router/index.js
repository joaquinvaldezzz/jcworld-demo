import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import GetStarted from '../views/GetStarted.vue'
import FAQ from '../views/FAQ.vue'
import Blog from '../views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/get-started',
    name: 'Get Started',
    component: GetStarted,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
