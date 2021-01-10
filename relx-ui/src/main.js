import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import Http from './utils/http.js'

const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$http = Http
app.mount('#app')