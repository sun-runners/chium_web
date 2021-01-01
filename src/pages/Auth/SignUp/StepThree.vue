<template lang="pug">
  div(class="row flex justify-center" style="margin-top: 30px;")
    div(class="col-11")
        p(class="title") 생년월일

    div(class="col-11")
        q-input(
          outlined
          placeholder="1991.01.01"
          mask="####.##.##"
          v-model="bdate"
        )
          template(v-slot:append)
            q-icon(name="keyboard_arrow_down")
</template>

<script>
export default {
  data () {
    return {
      bdate: null,
      stepData: {
        routeNext: 'stepFour',
        routePreview: 'stepTwo',
        currentStep: 3
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