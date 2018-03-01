import Vue from 'vue'
import App from './component/App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index.js'
import 'normalize.css'
import axios from 'axios'
import api, { domain} from './js/api.js'
import './less/index.less'
Vue.use(ElementUI)
axios.defaults.baseURL = domain;
axios.defaults.withCredentials = true;
  Vue.prototype.$axios =axios;
  Vue.prototype.$api =api;
 new Vue({
     el:"#app",
     render:h=>h(App),
     router
 })