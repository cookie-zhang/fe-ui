import { createApp } from 'vue' // 为了创建vue实列的重要函数
import App from './App.vue'
import './index.css'
import Home from './views/home.vue'
import Doc from './views/doc.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/frank2',
            component: Doc
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
