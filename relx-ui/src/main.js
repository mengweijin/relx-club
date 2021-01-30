import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import Dayjs from 'dayjs'
import VueRouter from './router/router.js'
import Http from './utils/http.js'

const app = createApp(App)
app.use(ElementPlus, { locale }).use(VueRouter).mount('#app')
app.config.globalProperties.$dayjs = Dayjs
app.config.globalProperties.$http = Http
