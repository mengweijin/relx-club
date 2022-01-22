import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/layout/Layout.vue'
import Header from '../components/Header.vue'

const routes = [

    { 
        path: '/', 
        component: Layout,
        redirect: '/goods',
        children: [
            {
                path: '/goods',
                components: {
                    Header: Header,
                    default: () => import ('../components/layout/LayoutGoods.vue')
                }
            },
            {
                path: '/goods/:goodsTypeId',
                components: {
                    Header: Header,
                    default: () => import ('../components/layout/LayoutGoods.vue')
                }
            },
            {
                path: '/goodsType',
                components: {
                    Header: Header,
                    default: () => import ('../components/layout/LayoutGoodsType.vue')
                }
            },
            {
                path: '/stock-in',
                components: {
                 Header: Header,
                 default: () => import ('../components/StockIn.vue')
                }
            },
            {
                path: '/stock-out',
                components: {
                 Header: Header,
                 default: () => import ('../components/StockOut.vue')
                }
            }
        ]
    }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router