import { createApp } from 'vue'
import App from './App.vue'
import geolocation from 'vue3-geolocation'

let app=createApp(App)
app.use(geolocation)
app.mount('#app')
