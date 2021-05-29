<template>
  <div class="bg-white">
    <check-elevator @elevatorAnswer="hasElevator($event)" />
  </div>
</template>

<script>
import CheckElevator from 'src/components/RequestEstimate/Common/CheckElevator.vue'
export default {
  components: { CheckElevator },

  computed: {
    layoutState () {
      return {
        totalSteps: 9,
        activeStep: 4,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/five/asbestos',
        prevPathRoute: '/request/demolition/three/asbestos'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    hasElevator (answer) {
      console.log(answer) // 있음 or 없음
      this.$emit('next', true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
