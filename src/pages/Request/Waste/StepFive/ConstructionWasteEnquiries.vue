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
        totalSteps: 9,
        activeStep: 5,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/six/construction',
        prevPathRoute: '/request/waste/four/construction'
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
