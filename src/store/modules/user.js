import Vue from 'vue'

export const userStore = {
  state: {
    data: {}
  },
  getters: {
    user: (state, getters) => {
      return state.data
    }
  },
  mutations: {
    setUser: function (state, payload) {
      state.data = payload
    },
    patchUser: async function (state, payload) {
      const { data: user } = await Vue.prototype.$axios.patch(
        `/users/${this.getters.user.id}/`,
        Vue.prototype.$qs.stringify(payload)
      )
      this.commit('setUser', user)
    },
    reset: function (state, payload) {
      state.data = {}
    }
  },
  actions: {}
}
