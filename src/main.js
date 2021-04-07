import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import req from './utils/request'

Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$req = req

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
