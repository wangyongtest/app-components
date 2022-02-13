import { createApp } from 'vue'
import App from './App.vue'
import Example from '../app-components/Example'

createApp(App)
.use(Example)
.mount('#app')
