// Importaciones principales de Vue
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import App from './App.vue'

// Crear la aplicación Vue
const app = createApp(App)

// Registrar plugin de motion
app.use(MotionPlugin)

// Montar la aplicación en el DOM
app.mount('#app')
