import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './views/AppHome.vue';
import AppPokèdex from './views/AppPokèdex.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: AppPokèdex
    },
  ]
})

export default router
