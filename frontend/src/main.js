import './assets/main.css'
import 'devicon/devicon.min.css'
import i18n from './i18n'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

AOS.init({
  duration: 800,
  once: true,
});
