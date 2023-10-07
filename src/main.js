import { createApp } from 'vue'
import './style.css'
import router from "./router/router"
import "./assets/master/style.css"
import "./assets/master/app.js"
import App from './App.vue'

createApp(App).use(router).mount('#app')
