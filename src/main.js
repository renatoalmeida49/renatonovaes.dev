import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'boxicons'
import VueTypedJs from 'vue-typed-js'
 
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
