import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import ShopCart from '../component/admin/shopcart/shopcart.vue'

  const shopcart = [
      { name: 'shopcart', path:'shopcart',component:ShopCart}
  ]
       
  


Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'admin',
            path: '/admin',
            component: Admin,
            children:[...shopcart]
        }
    ]
})