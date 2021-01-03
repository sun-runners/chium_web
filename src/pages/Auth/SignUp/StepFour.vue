<template lang="pug">
  div(class="row flex justify-center q-col-gutter-lg" style="margin-top: 30px;")
    div(class="col-11")
      p(class="title") 정보입력

    div(class="col-11")
      p(class="p-label") 이름
      q-input(
        outlined
        placeholder="한글2글자이상"
        type="text"
        v-model="fieldData.user_name.value"
      )
        template(v-slot:append)
          q-icon(v-if="!$options.filters.isUserNameValid(fieldData.user_name.value)")
            img(:src="require(`assets/sign_up_icon/disable.svg`)")

      div(v-if="!$options.filters.isUserNameValid(fieldData.user_name.value)")
        p(class="error-label q-mt-xs") 이름은 최소2자이상 한글/영문만 가능합니다.

    div(class="col-11")
      p(class="p-label") 이메일
      q-input(
        outlined
        placeholder="chium@naver.com"
        type="text"
        v-model="fieldData.email.value"
      )
        template(v-slot:append)
          q-icon(v-if="!$options.filters.isEmailValid(fieldData.email.value)")
            img(:src="require(`assets/sign_up_icon/disable.svg`)")

      div(v-if="!$options.filters.isEmailValid(fieldData.email.value)")
        p(class="error-label q-mt-xs") 이메일 주소를 다시 확인해주세요.

    div(class="col-11")
      p(class="p-label") 비밀번호
      q-input(
        outlined
        placeholder="영문, 숫자, 특수문자 포함 15자이하"
        v-model="fieldData.password.value"
        error-message="영문,숫자,특수문자 포함 6자이상 18자이하"
        :type="isShowPassword ? 'text' : 'password'"
      )
        template(v-slot:append)
          q-icon(
            :name="isShowPassword ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isShowPassword = !isShowPassword"
          )

          q-icon(v-if="!$options.filters.isPasswordValid(fieldData.password.value)")
            img(:src="require(`assets/sign_up_icon/disable.svg`)")

      div(v-if="!$options.filters.isPasswordValid(fieldData.password.value)")
        p(class="error-label q-mt-xs") 영문,숫자,특수문자 포함 6자이상 18자이하
</template>

<script>
import { cloneDeep, each, set, every } from 'lodash'

const SIGNUP_SCHEMA = {
  email: {
    value: null,
    filter: 'isEmailValid'
  },
  user_name: {
    value: null,
    filter: 'isUserNameValid'
  },
  password: {
    value: null,
    filter: 'isPasswordValid'
  }
}

export default {
  data () {
    return {
      fieldData: cloneDeep(SIGNUP_SCHEMA),
      isShowPassword: false,
      stepData: {
        routeNext: '',
        routePreview: 'stepThree',
        currentStep: 4
      }
    }
  },
  filters: {
    isUserNameValid: (val) => {
      if (!val) return true
      return (val.length > 2)
    },
    isEmailValid: (val) => {
      if (!val) return true
      const validEmail = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return validEmail.test(val)
    },
    isPasswordValid: (val) => {
      if (!val) return true
      const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,18}$/
      return validPass.test(val)
    }
  },
  created () {
    this.$emit('whenReady', false)
    this.$emit('setStepData', this.stepData)
  },
  methods: {
    validityCheck (fields = []) {
      each(fields, (key, item) => {
        console.log(key, item)
      })
    }
  },
  watch: {
    fieldData: {
      deep: true,
      handler (newVal) {
        const validField = cloneDeep(newVal)
        each(validField, (item) => {
          const _ = this.$options.filters[item.filter]
          if (typeof _ === 'function') {
            set(item, 'isValid', item.value ? _(item.value) : false)
          }
        })

        if (every(validField, { isValid: true })) {
          this.$emit('whenReady', true)
        } else {
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

.error-label {
  font-family: 'notosanskr-regular'
  color: #FF5F57
  font-style: normal
  font-weight: normal
  font-size: 12px
  line-height: 18px
  letter-spacing: -0.75px
}

.sub-title
    font-size: 14px
    font-family: 'notosanskr-regular'
    color: #959595

.field-qt
  max-height: 60px

.p-label
  font-family: 'notosanskr-regular'
  font-style: normal
  font-weight: normal
  font-size: 14px
  line-height: 21px
  letter-spacing: -0.8px
  color: #767676
</style>
