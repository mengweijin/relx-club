import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout/Index'

const routes = [
    { 
        path: '/', 
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                components: {
                    Goods: () => import ('@/components/Goods'),
                    GoodsType: () => import ('@/components/GoodsType')
                }
            },
            {
                path: '/goods/:goodsTypeId',
                components: {
                    Goods: () => import ('@/components/Goods'),
                    GoodsType: () => import ('@/components/GoodsType')
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