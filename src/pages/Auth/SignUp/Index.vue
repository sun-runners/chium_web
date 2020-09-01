<template lang="pug">
  div
    div(class="row flex justify-center" style="margin-top: 40px;")
      div(class="col-11" style="max-width: 343px")
        p(class="title") 약관동의
        span(class="sub-title") 치움 서비스를 사용하기위해 약관에 동의해주세요.
    
    div(class="row flex justify-center" style="margin-top: 40px;")
      div(class="col" style="max-width: 343px")
        include blocks/list-agreement
        
</template>

<script>
export default {
  methods: {
    goToTermsCondition(name) {
      this.$router.push({ path: `/auth/sign_up/terms_condition/${name}` });
    }
  }
}
</script>

<style lang="stylus">
.title
    font-size: 27px
    font-family: 'notosanskr-regular'
.sub-title
    font-size: 14px
    font-family: 'notosanskr-regular'

.see-more-btn
  border: 1px solid #CCCCCC
  min-height: 24px
  border-radius: 4px

.see-more-label
  font-family: 'notosanskr-regular'
  font-size: 12px

.q-checkbox__bg
  border-radius: 50px
  min-width: 20px
  min-height: 20px

.list-title
  font-family: 'notosanskr-regular'
  font-size: 15px

.item-lists
  padding-right: 0px
  padding-left: 0px
  padding-top: 10px
  padding-bottom: 10px
</style>