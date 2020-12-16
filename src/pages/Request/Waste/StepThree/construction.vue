<template>
  <div>
    step three
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 5,
        activeStep: 3,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/four/construction",
        prevPathRoute: "/request/waste/two/construction",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped>
</style>
