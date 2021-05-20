<template>
  <h3>Step 4</h3>
</template>

<script>
export default {
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/demolition/five/building",
        prevPathRoute: "/request/demolition/three/building",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
