<template lang="pug">
  div
    div(class="row flex justify-center" style="margin-top: 30px;")
      div(class="col-11 no-margin")
        p(class="title") 핸드폰인증
        p(class="sub-title") 치움에서 방금 보내드린 인증번호 숫자4자리를 입력하세요.

      div(v-if="isActivate" class="col-11 no-padding")
        div(class="row q-gutter-md" style="max-width: 300px")
          div(class="col" v-for="list, key in code" :key)
            q-input(
              outlined 
              placeholder="0" 
              v-model="code[key]" 
              maxlength="1" 
              :rules="[ val => val.length <= 1 ]"
              class="field-qt"
              mask="#"
            )
        q-btn( flat class="resend-auth-btn q-mt-sm")
          span(class="no-padding") 인증번호 재전송

      div(class="col-11 row flex justify-center" style="margin-top: 30px;" v-else)
        div(class="col-12")
          p(class="title") 핸드폰인증

        div(class="col-12")
          q-select(
            class="field-qt"
            v-model="model.country_code"
            :options="contactOptions" 
            value="+82" 
            emit-value 
            map-options 
            outlined
            color="secondary"
          )
          q-input(
            class="field-qt q-mt-sm"
            v-model="model.phone_number"
            placeholder="010-0000-0000"
            outlined
            mask="###-####-####"
            :error="!isValidNumber && model.phone_number"
          )
            template(v-slot:append)
              q-btn(
                class="btn-verify-code"
                flat
                label="인증번호 받기"
                @click="sendCode()"
              )
</template>

<script>
import { set, each, every, filter, cloneDeep, isEmpty } from 'lodash'
import { mapGetters } from 'vuex'
import { AsYouType, parsePhoneNumber, ParseError } from 'libphonenumber-js'

const CONTACT_SCHEMA = {
  country_code: null,
  phone_number: null
}

const CODE_SCHEMA = {
  c1: null,
  c2: null,
  c3: null,
  c4: null
}

export default {
  data () {
    return {
      model: cloneDeep(CONTACT_SCHEMA),
      code: cloneDeep(CODE_SCHEMA),
      stepData: {
        routeNext: 'stepThree',
        routePreview: 'stepOne',
        currentStep: 2
      }
    }
  },
  created () {
    this.$emit('whenReady', false)
    this.$emit('setStepData', this.stepData)
  },
  methods: {
    getCheckboxStatus (state) {
      return state
        ? 'check.svg'
        : 'default.svg'
    },
    sendCode () {
      if (this.isValidNumber) {
        this.$router.push({ path: '/auth/sign_up/stepTwo?activate=true' })
      }
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
  computed: {
    ...mapGetters('contact', ['contactOptions']),
    isValidNumber () {
      try {
        const phoneNumber = parsePhoneNumber(this.model.phone_number, 'KR')
        return phoneNumber.isValid()
      } catch (error) {
        if (error instanceof ParseError) {
          return false
        }
        return true
      }
    },
    isActivate () {
      const { activate } = this.$route.query
      return activate || false
    }
  },
  watch: {
    code: {
      deep: true,
      handler (newVal) {
        console.log('newVal', newVal)
        if (every(newVal, null)) {
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