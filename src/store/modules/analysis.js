export default {
  namespaced: true,
  state: {
    // 左侧导航头部信息
    navLeft: {
      active: 0,
      type: ''
    }
  },
  mutations: {
    saveNavLeft(state, data) {
      state.navLeft = {
        active: data.active,
        type: data.type
      }
    }
  },
  getters: {
    getNavLeft: state => state.navLeft
  },
  actions: {
    setNavLeft({
      // state,
      commit
      // rootState
    }, data) {
      commit('saveNavLeft', data)
    }
  }
}
