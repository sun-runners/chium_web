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
    reset: function (state, payload) {
      state.data = {}
    }
  }
}
