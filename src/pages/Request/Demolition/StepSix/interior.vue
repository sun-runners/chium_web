<template>
  <h3>Step 6</h3>
</template>

<script>
export default {
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 6,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/seven/interior',
        prevPathRoute: '/request/demolition/five/interior'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  }
}
</script>

<style lang="scss" scoped></style>
