import Vue from 'vue'
import App from './App.vue'
import '../icons.js'
import router from './router'
import './assets/styles.css'
import Hero from './components/layout/Hero.vue'

Vue.component('hero', Hero);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
