// Import Section
import Vue from 'vue'

// Main Section

// Function Section
function getApiUrl (state) {
  const regex = /enquiries$/gi
  const api = state.category.replace(regex, '') // 마지막의 y를 ies 로 바꾼다
  return api
}

export const enquiryStore = {
  state: {
    category: null, // enquiries...
    enquiry: {}
  },
  getters: {
    enquiry: (state, getters) => {
      return state.enquiry
    }
  },
  mutations: {
    setEnquiry: function (state, payload) {
      console.log(payload)
      state.enquiry = {
        ...state.category,
        ...state.enquiry,
        ...payload
      }
    },
    postEnquiry: async function (state, payload) {
      // Variable Section
      const api = getApiUrl(state)
      // Main Section
      await Vue.prototype.$axios.post(`/${api}/`, { ...state.enquiry.enquiry, user: payload }) // 견적서 생성
    },
    patchEnquiry: async function (state, payload) {
      console.log(payload)
      this.commit('setEnquiry', payload.data)
      console.log(state.enquiry.address)
    }
  }
}