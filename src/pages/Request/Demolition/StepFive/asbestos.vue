<template>
  <h3>Step 5</h3>
</template>

<script>
export default {
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 5,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/demolition/six/asbestos",
        prevPathRoute: "/request/demolition/four/asbestos",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
