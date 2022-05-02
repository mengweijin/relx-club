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

// 路由根路径：'/relx/'; 为什么设置路由根路径？避免路由路径和后台接口路径一样，当刷新页面时变成调用后台接口而返回 JSON 的问题。
// 部署到 nginx 服务器下，我们一般 router 的 hitory 使用 createWebHistory 来去掉 url 中的 #
// 但如果要打包并部署到 springboot 下的 static 目录，默认只能用 createWebHashHistory 才不会有问题。
// 但我们又想使用 createWebHistory 模式，还不想刷新时出现页面 404 的问题，此时需要在后端处理了。
// 参考 java 类：NotFoundErrorPageRegistrar.java
const router = createRouter({
    history: createWebHistory('/relx/'),
    routes, 
})

export default router