import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../component/login/Login.vue'
import Admin from '../component/admin/Admin.vue'
import goodsList from '../component/admin/goods/list/List.vue'
import goodsComment from '../component/admin/goods/comment/Comment.vue'
import goodsDetail from '../component/admin/goods/detail/Detail.vue'
import ShopCart from '../component/admin/shopcart/shopcart.vue'

const shopcart = [{
        name: 'shopcart',
        path: 'shopcart',
        component: ShopCart
    },
    {
        name: 'goodList',
        path: 'goods/list',
        component: goodsList
    },
    {
        name: 'goodsComment',
        path: 'goods/comment',
        component: goodsComment
    },
    {
        name: 'goodDetail',
        path: 'goods/detail/:id',
        component: goodsDetail
    },

]




Vue.use(VueRouter)

export default new VueRouter({
    routes: [

        {
            path: "/",
            component: Admin
        }, {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'admin',
            path: '/admin',
            component: Admin,
            children: [...shopcart]
        }
    ]
})