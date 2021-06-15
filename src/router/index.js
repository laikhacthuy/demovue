import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import("@/components/homepage"),
      meta: { title: 'Home' }
    },
    {
      path: '/introl',
      name: 'introl',
      component: () => import("@/components/introl"),
      meta: { title: 'Introl' }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import("@/components/cart"),
      meta: { title: 'Cart' }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import("@/components/product"),
      meta: { title: 'Product' }
    },
    {
      path: '/about-us',
      name: 'aboutus',
      component: () => import("@/components/aboutus"),
      meta: { title: 'About us' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/components/login"),
      meta: { title: 'Login' }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/components/register"),
      meta: { title: 'Register' }
    }
  ]
})
