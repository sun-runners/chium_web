<template>
  <h3>Step 7</h3>
</template>

<script>
export default {
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 7,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/final/structure',
        prevPathRoute: '/request/demolition/six/structure'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  }
}
</script>

<style lang="scss" scoped></style>
