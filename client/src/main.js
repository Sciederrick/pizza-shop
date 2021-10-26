import Vue from 'vue'
import App from './App.vue'
import '../icons.js'
import router from './router'
import './assets/styles.css'
import Hero from './components/layout/Hero.vue'
import Vuex from 'vuex'
import store from './store'

Vue.component('hero', Hero);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
