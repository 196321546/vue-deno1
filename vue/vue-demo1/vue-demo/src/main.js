import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router/index.js'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
