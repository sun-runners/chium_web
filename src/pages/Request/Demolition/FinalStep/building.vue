<template>
  <h3>Step 8</h3>
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
        nextPathRoute: "/request/demolition/six/building",
        prevPathRoute: "/request/demolition/seven/building",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
