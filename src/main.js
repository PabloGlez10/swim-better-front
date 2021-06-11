import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SwimBAPI from './plugins/api/index'

Vue.use(SwimBAPI, {baseURL: ''})

Vue.config.productionTip = false

new Vue({
  reouter,
  store,
  render: h => h(App)
}).$mount('#app')