// Import Section
import Vue from 'vue'

// Main Section
export const tokenStore = {
  state: {
    data: null
  },
  getters: {
    token: (state, getters) => {
      return state.data
    }
  },
  mutations: {
    setToken: function (state, payload) {
      state.data = payload
      Vue.prototype.$axios.defaults.headers.common.Authorization = `token ${payload}`
    },
    resetToken: function (state, payload) {
      state.data = null
    }
  }
}