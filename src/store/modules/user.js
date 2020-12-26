import store from "src/store";

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
  },
  actions: {
    async login (nextState) {
      // Function Section
      const login = async (dataUser) => {
        const { data } = await this.$axios.post('/users/kakaologin/', this.$qs.stringify(dataUser))
        this.$store.commit('setUser', data)
        if (store.getters.user && store.getters.user.id) {
          await this.$router.push({ name: nextState })
        }
      }

      const meSuccess = async (response) => {
        const dataUser = {}

        // Set user date
        if (response) {
          dataUser.id = response.id
          if (response.kakao_account) {
            const res = response.kakao_account
            dataUser.email = res.email // sunus7@kakao.com
            dataUser.birthday = res.birthday // 0426
            dataUser.gender = res.gender // male
          }
          if (response.properties) {
            const res = response.properties
            dataUser.nickname = res.nickname
            dataUser.profile_image = res.profile_image
          }
          await login(dataUser)
        }
      }

      const loginSuccess = async (authObj) => {
        console.log('authObj', authObj)
        await Kakao.API.request({ url: '/v2/user/me', success: meSuccess })
      }

      const loginFail = (err) => {
        console.error(err)
        alert('카카오 로그인 실패하였습니다. 카카오톡을 최신 버전으로 업데이트해주세요.')
      }

      // Main Section
      await Kakao.Auth.login({ success: loginSuccess, fail: loginFail }) // Login Kakao
    }
  }
}
