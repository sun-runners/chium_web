<template lang="pug">
  div(class="row flex justify-center q-col-gutter-lg" style="margin-top: 30px;")
    div(class="col-11")
      p(class="title") 정보입력

    div(class="col-11")
      p 이름
      q-input(
        outlined
        placeholder="한글2글자이상"
        type="text"
      )

    div(class="col-11")
      p 이메일
      q-input(
        outlined
        placeholder="chium@naver.com"
        type="text"
      )

    div(class="col-11")
      p 비밀번호
      q-input(
        outlined
        placeholder="영문, 숫자, 특수문자 포함 15자이하"
        type="text"
      )
</template>

<script>
export default {
  data () {
    return {
      bdate: null,
      stepData: {
        routeNext: '',
        routePreview: 'stepThree',
        currentStep: 4
      }
    }
  },
  created () {
    this.$emit('whenReady', false)
    this.$emit('setStepData', this.stepData)
  },
  methods: {
  },
  watch: {
    bdate: {
      deep: true,
      handler (newVal) {
        console.log('newVal', newVal)
        if (newVal) {
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

.sub-title
    font-size: 14px
    font-family: 'notosanskr-regular'
    color: #959595

.field-qt
  max-height: 60px
</style>