<template>
  <h3>Step final</h3>
</template>

<script>
export default {
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 8,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/home",
        prevPathRoute: "/request/demolition/seven/asbestos",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
