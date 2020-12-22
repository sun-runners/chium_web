<template>
  <div class="">
    <items-to-dispose @next="(val) => $emit('next', val)" />
  </div>
</template>

<script>
import { ItemsToDispose } from "src/components/RequestEstimate/Common";
export default {
  components: {
    "items-to-dispose": ItemsToDispose,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 4,
        activeStep: 2,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/three/workplace",
        prevPathRoute: "/request/waste",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
