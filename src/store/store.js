import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkLogin: false
  },
  getters: {
    getCheckLogin: state => {
      return state.checkLogin;
    }
  },
  mutations: {
    setCheckLogin (state, value) {
      state.checkLogin = value
    }
  },
  action: {}
})
