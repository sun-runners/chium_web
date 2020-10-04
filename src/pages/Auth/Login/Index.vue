<template lang="pug">
  div
    div(class="row flex justify-center" style="margin-top: 40px;")
      div(class="col-11" style="max-width: 343px")
        span 이메일
        q-input( 
          outlined 
          class="text-fields q-mt-sm" 
          placeholder="manager@chum.com"
          label-color="grey-1"
        )

    div(class="row flex justify-center" style="margin-top: 20px;")
      div(class="col-11" style="max-width: 343px")
        span 비밀번호
        q-input( 
          type="password"
          outlined 
          class="text-fields q-mt-sm" 
          placeholder="비밀번호는 6자이상 15자이하"
          label-color="grey-1"
        )

    div(class="row flex justify-center" style="margin-top: 30px;")
      div(class="col-11" style="max-width: 343px")
        q-btn(flat class="full-width login-submit" label="로그인")

    div(class="row flex justify-center" style="margin-top: 30px;")
      div(class="col-11" style="max-width: 343px")
        div(class="row q-gutter-xs flex justify-center")
          div(class="col-5" style="max-width: 127px")
            q-btn(flat class="full-width btn-group" type="button" @click="$router.push({ path: '/auth/sign_up/1' })")
              q-icon(
                :name="`img:${require('src/assets/sign_up.svg')}`"
                class="q-mr-sm" size="13px"
              )
              span(style="font-size:13px") 회원가입하기
          div(class="col-7")
            q-btn(flat class="full-width btn-group" type="button" style="")
              q-icon(
                :name="`img:${require('src/assets/lock.svg')}`"
                class="q-mr-sm" 
                size="13px"
              )
              span(style="font-size:13px") 비밀번호찾기/아이디 찾기
    
</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
.text-fields
  height: 60px

span
  font-size: 14px
  font-family: 'notosanskr-regular'

.login-submit
  background-color: #E8EAEB
  height: 50px
  color: #919698

.btn-group
  font-size: 13px
  font-family: 'notosanskr-regular'
  border: 1px solid #E8EAEB
  color #151515
</style>