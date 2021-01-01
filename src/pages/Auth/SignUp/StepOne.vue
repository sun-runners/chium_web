<template lang="pug">
  div
    div(class="row flex justify-center" style="margin-top: 30px;")
      div(class="col-11 no-margin")
        p(class="title") 약관동의
        span(class="sub-title") 치움 서비스를 사용하기위해 약관에 동의해주세요.

    q-list(separator class="q-mt-lg")
      q-item(clickable class="item-lists q-ma-sm" @click="__onHandleAgreeAll")
        q-item-section(avatar)
          q-btn(flat class="list-checkbox row justify-center items-center content-center")
            img(:src="require(`assets/sign_up_icon/${getCheckboxStatus(agreeAll)}`)")
        q-item-section(class="list-title") 전체동의

      q-item(
        v-for="list, key in listAgreement"
        :key="key"
        clickable
        class="item-lists q-ma-sm"
      )
        q-item-section(avatar)
          q-btn(flat class="list-checkbox row justify-center items-center content-center")
            img(:src="require(`assets/sign_up_icon/${getCheckboxStatus(list.state)}`)")
        q-item-section(class="list-title" @click="__onHandleAgreement (list, 'state', list.state)")
          | {{ list.label }}
        q-item-section(side)
          q-btn(flat dense class="see-more-btn q-pl-sm" label="내용보기" icon-right="keyboard_arrow_right" @click="list.event")
            //- span(class="see-more-label") 내용보기
            //- q-icon(name="chevron_right" size="20px")
</template>

<script>
import { set, each, every, filter } from 'lodash'

export default {
  data () {
    return {
      agreeAll: false,
      listAgreement: [
        {
          label: '[필수] 만 14세 이상 이용자',
          state: false,
          required: true,
          event: () => {
          }
        },
        {
          label: '[필수] 서비스 이용약관',
          state: false,
          required: true,
          event: () => {
            this.goToTermsCondition('terms-of-service')
          }
        },
        {
          label: '[필수] 개인정보 처리방침',
          state: false,
          required: true,
          event: () => {
            this.goToTermsCondition('privacy-policy')
          }
        },
        {
          label: '[선택]마케팅 정보 수신',
          state: false,
          required: false,
          event: () => {
            this.goToTermsCondition('receiving-marketing-information')
          }
        }
      ],
      stepData: {
        routeNext: 'stepTwo',
        routePreview: '',
        currentStep: 1
      }
    }
  },
  created () {
    console.log('this.stepData', this.stepData)
    this.$emit('setStepData', this.stepData)
  },
  methods: {
    getCheckboxStatus (state) {
      return state
        ? 'check.svg'
        : 'default.svg'
    },
    __onHandleAgreeAll () {
      this.agreeAll = !this.agreeAll
      each(this.listAgreement, (item) => {
        set(item, 'state', this.agreeAll)
      })
    },
    __onHandleAgreement (item, name, val) {
      set(item, name, !val)
    },
    goToTermsCondition (name) {
      this.$router.push({ path: `/auth/sign_up/terms_condition/${name}` })
    }
  },
  watch: {
    listAgreement: {
      deep: true,
      handler (newVal) {
        if (every(filter(newVal, { required: true }), { state: true })) {
          console.log('true')
          this.$emit('whenReady', true)
        } else {
          console.log('otherwise')
          this.$emit('whenReady', false)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
    font-size: 27px
    font-family: 'notosanskr-regular'
.sub-title
    font-size: 14px
    font-family: 'notosanskr-regular'
    color: #959595

.list-checkbox
  width: 24px
  height: 24px

.see-more-btn
  border: 1px solid #CCCCCC
  height: 28px
  border-radius: 4px
  font-family: 'notosanskr-regular'
  font-style: normal
  font-weight: normal
  font-size: 13px

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
  height: 64px

.btn-verify-code
  font-family: Noto Sans CJK KR
  font-style: normal
  font-weight: 500
  font-size: 16px
  line-height: 24px
  text-align: center
  letter-spacing: -0.8px
  color: #195DE4;

.field-qt
  max-height: 60px

.resend-auth-btn
  border: 1px solid #CCCCCC
  border-radius: 4px
  font-family: 'notosanskr-medium'
  font-size: 13px
</style>