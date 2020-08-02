import { createApp } from 'vue' // 为了创建vue实列的重要函数
import App from './App.vue'
import './index.css'
import Frank from './components/frank.vue'
import Frank2 from './components/frank2.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({ 
    history, routes: [{ path: '/', component: Frank },{path: '/frank2', component: Frank2}] })

const app = createApp( App )
app.use(router)
app.mount('#app')
