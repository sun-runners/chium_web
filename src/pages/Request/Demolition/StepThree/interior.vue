<template>
  <div>
    <area-space-demolished />
  </div>
</template>

<script>
import { AreaSpaceDemolished } from 'components/RequestEstimate/Common'
export default {
  components: {
    AreaSpaceDemolished
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
