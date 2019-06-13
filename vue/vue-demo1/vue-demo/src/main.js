import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router/index.js'
import axios from 'axios'
import qs from "qs";
    //细节处理一：可以给axios的ajax请求设置统一的主机和端口号
    axios.defaults.baseURL = "http://localhost:8080";
    //细节处理二: 可以将axios这个对象添加到Vue的原型对象中，将来在使用的时候就只需要使用this.对象名就可以了
    Vue.prototype.$http = axios;    
    Vue.prototype.qs = qs;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
