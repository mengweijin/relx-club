import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout/Layout'
import Header from '@/components/Header'

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
                    default: () => import ('@/components/layout/LayoutGoods')
                }
            },
            {
                path: '/goods/:goodsTypeId',
                components: {
                    Header: Header,
                    default: () => import ('@/components/layout/LayoutGoods')
                }
            },
            {
                path: '/goodsType',
                components: {
                    Header: Header,
                    default: () => import ('@/components/layout/LayoutGoodsType')
                }
            },
            {
                path: '/stock',
                components: {
                 Header: Header,
                 default: () => import ('@/components/Stock')
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