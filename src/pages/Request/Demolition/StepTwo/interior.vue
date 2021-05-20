<template>
  <div class="column bg-white">
    <type-of-space @setSpaceType="selectedSpaceType($event)" />
  </div>
</template>

<script>
import { TypeOfSpace } from "src/components/RequestEstimate/Common";
export default {
  components: {
    TypeOfSpace,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 2,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/demolition/three/interior",
        prevPathRoute: "/request/demolition",
      };
    },
  },
  methods: {
    selectedSpaceType(e) {
      console.log(e);
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
