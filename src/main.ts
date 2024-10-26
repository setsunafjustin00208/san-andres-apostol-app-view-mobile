import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router
import './dist/styles/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
  .use(router) // Use the router
  .mount('#app')