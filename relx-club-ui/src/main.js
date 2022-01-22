import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as icons from '@element-plus/icons-vue'
import 'font-awesome/css/font-awesome.css'
import './assets/iconfont/iconfont.js'
import './assets/iconfont/icon.css'
import VueRouter from './router/router.js'
import Http from './utils/http.js'
import Dayjs from 'dayjs'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn})
// 全局注册所有 element-plus/icons
Object.keys(icons).forEach(key => { app.component(key, icons[key]) })
app.use(VueRouter)
app.mount('#app')
app.config.globalProperties.$dayjs = Dayjs
app.config.globalProperties.$http = Http