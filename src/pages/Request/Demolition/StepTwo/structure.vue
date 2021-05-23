<template>
  <h3>Step 2</h3>
</template>

<script>
export default {
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/three/structure',
        prevPathRoute: '/request/demolition'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  }
}
</script>

<style lang="scss" scoped></style>
