import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(Vuex)
app.use(store)
app.config.productionTip = false

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + process.env.VUE_APP_TOKEN
    config.headers.Accept = 'application/json'
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
app.mount('#app')
