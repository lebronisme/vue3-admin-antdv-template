import './assets/main.css'

import { createApp } from 'vue'
import { createPinia as createPinna } from 'pinia'
import Icons  from './components/icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinna())
app.use(router)
app.use(Icons)

app.mount('#app')
