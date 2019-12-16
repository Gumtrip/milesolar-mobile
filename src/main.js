import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import axios from 'axios'
import VueAxios from 'vue-axios'
import api from './http/index'
Vue.use(VueAxios, axios)
Vue.use(api)
Vue.prototype.$axios = axios

Vue.config.productionTip = false
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
