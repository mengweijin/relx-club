import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout/Layout'
import LayoutGoods from '@/components/layout/LayoutGoods'
import LayoutGoodsType from '@/components/layout/LayoutGoodsType'
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
                    Header: () => Header,
                    default: LayoutGoods
                }
            },
            {
                path: '/goods/:goodsTypeId',
                components: {
                    Header: () => Header,
                    default: LayoutGoods
                }
            },
            {
                path: '/goodsType',
                components: {
                    Header: () => Header,
                    default: LayoutGoodsType
                }
            }
        ]
    }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router