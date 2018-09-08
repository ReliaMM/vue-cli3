import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Axios from './config/axios.config'
import store from './store/index'
import './plugins/element.js'

Vue.use(Axios)
Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
