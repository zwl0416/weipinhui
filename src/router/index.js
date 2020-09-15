import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home from '../views/home/Home.vue'
import Detail from '../views/detail/Detail.vue'
import DownLoad from '../views/download/DownLoad.vue'
import List from '../views/list/List.vue'
import City from '../views/city/City.vue'
import ListContent from '../views/list/listContent/ListContent.vue'
import Cart from '../views/cart/Cart.vue'

// 最后疯抢
import LastCrazy from '@/LastCrazy.vue'
import contentTop from '../views/lastCrazy/contentTop.vue'
import varietyList from '../views/varietyList/varietyList.vue'
import shoppingCart from '../views/shoppingCart/shoppingCart.vue'

import Sale from "@/views/sale/sale.vue"
import Q from "@/views/sale/q.vue"
import Lister from "@/views/sale/lister.vue"


import Center from '../views/quick/center/Center.vue'
import Details from '../views/quick/detail/Detail.vue'
import Cities from '../views/quick/city/City.vue'


import Homes from '../views/Aoyi/Home'
import Aolai from '../views/Aoyi/aolai/Aolai'
import Product from '../views/Aoyi/product/Product'
import Choose from '../views/Aoyi/product/Choose'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/detail',
      component: Detail
    },
    {
      path:'/downLoad',
      component: DownLoad
    },
    {
      path:'/list',
      component : List,
      redirect:'/list/listContent',
      children : [
        {
          path:'/list/listContent',
          component:ListContent
        },
      ]
    },
    {
      path : '/city',
      component : City
    },
    {
      path : '/cart',
      component : Cart
    },

    // 最后疯抢
    {
      path:"/lastCrazy",
      component:LastCrazy,
      children:[
        {
          path:"/lastCrazy/contentTop",
          component:contentTop
        }
      ]
    },
    {
      path:"/varietyList",
      component:varietyList,
    },
    {
      path:"/shoppingCart",
      component:shoppingCart,
    },

    {
      path:"/sale",
      component:Sale,
      children:[
        {
          path:"/sale/q",
          component:Q
        },
        {
          path:"/sale/lister",
          component: Lister
        }
      ]
    },


    {
      path:'/quick/:id',
      component:Center
    },
    {
      path:'/details',
      component:Details
    },
    {
      path:'/cities',
      component:Cities
    },


    {
      path:'/homes',
      component:Homes
    },
    {
      path:'/aolai',
      component:Aolai
    },
    {
      path:'/product',
      component:Product
    },
    {
      path:'/choose',
      component:Choose
    }

  ]

const router = new VueRouter({
  routes
})

export default router
