import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import GetStarted from '../views/GetStarted.vue'
import Shop from '../views/Shop.vue'
import FAQ from '../views/FAQ.vue'
import ContactUs from '../views/ContactUs.vue'
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
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/about-us',
    name: 'About Us',
    component: AboutUs,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs,
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
