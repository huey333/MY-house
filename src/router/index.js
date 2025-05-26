import { createRouter, createWebHistory } from 'vue-router'
import homePageFramework from '../components/HomePageFramework/homePageFramework.vue'
import homeView from '../views/Home/homeView.vue'
import Login2 from '@/views/LoginView/Login2.vue'
import SignUp from '@/views/LoginView/SignUp.vue'
import Shop from '@/views/ShopView/Shop.vue'
import Cart from '@/views/ShopView/Cart.vue'
import WishList2 from '@/views/ShopView/WishList2.vue'
import ProductDetail from '@/views/ShopView/ProductDetail/index.vue'
import Foot from '@/views/ShopView/Foot.vue'
import Header from '@/views/ShopView/Header.vue'
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
      path: '/login2',
      name: 'login2',
      component: Login2,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/WishList2',
      name: 'WishList2',
      component: WishList2,
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header,
    },
    {
      path: '/Foot',
      name: 'Foot',
      component: Foot,
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
