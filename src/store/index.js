import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

let reportInfo = {
  type: 'sal',
  current: '0'
}

Vue.use(Vuex)

const state = {
  reportInfo
}
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  modules
})
