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
      state.enquiry = payload
    },
    setCategory: async function (state, payload) {
      state.category = payload.category

      // Variable Section
      const api = getApiUrl(state)
      // Main Section
      const { data: enquiry } = await Vue.prototype.$axios.post(`/${api}/`,{
        user: payload.userId
      }) // 견적서 생성
      this.commit('setEnquiry', enquiry)
    },
    patchEnquiry: async function (state, payload) {
      // Variable Section
      const api = getApiUrl(state)
      // Main Section
      // const { data: enquiry } = await Vue.prototype.$axios.patch(
      //   `/${api}/${this.getters.enquiry.id}/`, // 견적서 id를 patch 함
      //   Vue.prototype.$qs.stringify(payload)
      // )
      // eslint-disable-next-line no-unused-vars
      const key = Object.keys(payload)
      console.log(payload)
      const { data: enquiry } = await Vue.prototype.$axios.patch(`/${api}/5/`,payload)
      this.commit('setEnquiry', enquiry)
    }
  }
}

