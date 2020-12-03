<template>
  <div class="">
    <head-section />
    <request-place />
  </div>
</template>

<script>
import {
  HeadSection,
  RequestPlace,
} from "components/RequestEstimate/HouseholdWaste/FinalStep";
export default {
  components: {
    "head-section": HeadSection,
    "request-place": RequestPlace,
  },
  data() {
    return {};
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 4,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/",
        prevPathRoute: "/request/waste/three/household",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
