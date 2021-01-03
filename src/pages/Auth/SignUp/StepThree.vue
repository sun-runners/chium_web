<template lang="pug">
  div(class="row flex justify-center" style="margin-top: 30px;")
    div(class="col-11")
        p(class="title") 생년월일

    div(class="col-11")
      q-input(outlined v-model="bdate" mask="####.##.##" placeholder="1991.01.01")
          template(v-slot:append)
            q-icon(name="event" class="cursor-pointer")
              q-popup-proxy(ref="qDateProxy" transition-show="scale" transition-hide="scale")
                q-date(v-model="bdate" color="secondary" years-in-month-view)
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