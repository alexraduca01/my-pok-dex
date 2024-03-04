import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import AppKanto from './components/AppKanto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/kanto',
      name: 'kanto',
      component: AppKanto
    },
  ]
})

export default router
