import { createApp } from 'vue'
import router from './router'
import './styles/index.css'
import App from './App.vue'

createApp(App).use(router).mount(document.getElementById('app'))
