import { createRouter, createWebHistory } from 'vue-router'
import homePageFramework from '../components/HomePageFramework/homePageFramework.vue'
import homeView from '../views/Home/homeView.vue'
import Login from '@/views/LoginView/Login.vue'
import SignUp from '@/views/LoginView/SignUp.vue'
import Shop from '@/views/ShopView/Shop.vue'
import Cart from '@/views/ShopView/Cart.vue'
import Wishlist from '@/views/ShopView/Wishlist.vue'
import ProductDetail from '@/views/ShopView/ProductDetail/index.vue'

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
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/Wishlist',
      name: 'Wishlist',
      component: Wishlist,
    },

    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail,
    },


  ],
})

export default router
