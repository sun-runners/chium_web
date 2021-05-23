<template>
  <div>
    <space-area-number-floors />
  </div>
</template>

<script>
import SpaceAreaNumberFloors from 'src/components/RequestEstimate/Common/SpaceAreaNumberFloors.vue'
export default {
  components: {
    SpaceAreaNumberFloors
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 3,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/four/interior',
        prevPathRoute: '/request/demolition/two/interior'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  }
}
</script>

<style lang="scss" scoped></style>
