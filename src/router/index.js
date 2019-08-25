import Vue from 'vue'
import Router from 'vue-router'

const home=()=> import('../views/home/home')
const cart=()=> import('../views/cart/cart')
const category=()=> import('../views/category/category')
const profile=()=> import('../views/profile/profile')
const detail=()=> import('../views/detail/detail')

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/cart',
        component:cart
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/profile',
        component:profile
    },
    {
        path:'/detail/:id',
        component:detail
    }
]
})
