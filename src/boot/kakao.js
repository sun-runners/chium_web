// Imports Section
import Vue from 'vue'

// Main Section

// Init Kakao
Kakao.init('889fb05af1265fead2ae422f9f6865bf')

// Function Section
const fail = (err) => {
  console.error(err)
  alert('카카오 로그인 실패하였습니다. 카카오톡을 최신 버전으로 업데이트해주세요.')
}

const meSuccess = (response) => {
  let kakaoUser = null

  // Set user date
  if (response) {
    kakaoUser = {}
    kakaoUser.id = response.id
    if (response.kakao_account) {
      const res = response.kakao_account
      kakaoUser.email = res.email // sunus7@kakao.com
      kakaoUser.birthday = res.birthday // 0426
      kakaoUser.gender = res.gender // male
    }
    if (response.properties) {
      const res = response.properties
      kakaoUser.nickname = res.nickname
      kakaoUser.profile_image = res.profile_image
    }
  }
  return kakaoUser
}

const loginSuccess = async (authObj) => {
  return new Promise((resolve, reject) => {
    Kakao.API.request({ url: '/v2/user/me' }).then(async (response) => {
      const kakaoUser = meSuccess(response)
      resolve(kakaoUser)
    }, (err) => {
      fail(err)
      reject(err)
    })
  })
}

const kakaologin = async (nextState) => {
  return new Promise((resolve, reject) => {
    Kakao.Auth.login({
      success: async (authObj) => {
        const loginSuccessPromise = loginSuccess(authObj)
        loginSuccessPromise.then(resolve, reject)
      },
      fail: (err) => {
        fail(err)
        reject()
      }
    })
  })
}

// Main Section
Vue.prototype.$kakao = Kakao
Vue.prototype.$kakaologin = kakaologin
