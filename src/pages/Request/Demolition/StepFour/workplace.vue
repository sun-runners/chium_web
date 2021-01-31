<template>
  <div>
    <visit-site-advance @next="(val) => $emit('next', val)" />
  </div>
</template>

<script>
import { VisitSiteAdvance } from "src/components/RequestEstimate/Common";
export default {
  components: {
    "visit-site-advance": VisitSiteAdvance,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 5,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/final/business",
        prevPathRoute: "/request/waste/three/business",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
    setTimeout(() => {
      this.$emit("next", true);
    }, 1000);
  },
};
</script>

<style lang="scss" scoped></style>
