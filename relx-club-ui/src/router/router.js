import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
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

// 路由根路径：'/relx/';
// 部署到 nginx 服务器下，我们可以使用 createWebHistory 来去掉 url 中的 #
// 但如果要打包并部署到 springboot 下的 static 目录，只能用 createWebHashHistory 才不会有问题。
const router = createRouter({
    history: createWebHashHistory('/relx/'),
    routes, 
})

export default router