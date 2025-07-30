import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Importações de CSS
import './assets/main.css'
import 'devicon/devicon.min.css'
import 'vue3-carousel/dist/carousel.css'
import 'aos/dist/aos.css';

// Importação do i18n e AOS
import i18n from './i18n'
import AOS from 'aos';

// Criação da aplicação
const app = createApp(App)
const pinia = createPinia()

// Uso dos plugins
app.use(pinia)
app.use(i18n)

// Montagem da aplicação
app.mount('#app')

// Inicialização do AOS
AOS.init({
  duration: 800,
  once: true,
});
