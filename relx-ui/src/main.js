import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import Dayjs from 'dayjs'
import VueRouter from './router/router.js'
import Http from './utils/http.js'

const app = createApp(App)
installElementPlus(app)
app.use(VueRouter)
app.config.globalProperties.$dayjs = Dayjs
app.config.globalProperties.$http = Http
app.mount('#app')