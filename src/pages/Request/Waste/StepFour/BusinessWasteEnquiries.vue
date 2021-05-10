<template>
  <div class="bg-white">
    <check-elevator @elevatorAnswer="hasElevator" />
  </div>
</template>

<script>
import { CheckElevator } from 'components/RequestEstimate/Common'
export default {
  components: {
    'check-elevator': CheckElevator
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 7,
        activeStep: 4,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/five/business',
        prevPathRoute: '/request/waste/three/business'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
    setTimeout(() => {
      this.$emit('next', true)
    }, 1000)
  },
  methods: {
    hasElevator (answer) {
      this.$emit('setEnquiryData', { is_elevator: answer })
      this.$emit('next', true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
