import { createRouter, createWebHistory } from 'vue-router'
import homePageFramework from '../components/HomePageFramework/homePageFramework.vue'
import homeView from '../views/Home/homeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homePageFramework',
      name: 'homePageFramework',
      component: homePageFramework,
    },
    {
      path: '/',
      name: 'homeView',
      component: homeView,
    },
  ],
})

export default router
