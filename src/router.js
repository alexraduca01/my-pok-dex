import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './views/AppHome.vue'
import AppKanto from './views/AppKanto.vue'
import AppJohto from './views/AppJohto.vue'
import AppHoenn from './views/AppHoenn.vue'
import AppSinnoh from './views/AppSinnoh.vue'
import AppUnova from './views/AppUnova.vue'
import AppKalos from './views/AppKalos.vue'
import AppAlola from './views/AppAlola.vue'
import AppGalar from './views/AppGalar.vue'
import AppPaldea from './views/AppPaldea.vue'
import AppHisui from './views/AppHisui.vue'
import AppNational from './views/AppNational.vue';

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
    {
      path: '/johto',
      name: 'johto',
      component: AppJohto
    },
    {
      path: '/hoenn',
      name: 'hoenn',
      component: AppHoenn
    },
    {
      path: '/sinnoh',
      name: 'sinnoh',
      component: AppSinnoh
    },
    {
      path: '/unova',
      name: 'unova',
      component: AppUnova
    },
    {
      path: '/kalos',
      name: 'kalos',
      component: AppKalos
    },
    {
      path: '/alola',
      name: 'alola',
      component: AppAlola
    },
    {
      path: '/galar',
      name: 'galar',
      component: AppGalar
    },
    {
      path: '/paldea',
      name: 'paldea',
      component: AppPaldea
    },
    {
      path: '/national',
      name: 'national',
      component: AppNational
    },
  ]
})

export default router
