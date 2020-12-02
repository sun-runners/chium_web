<template>
  <div class="">
    <head-section />
    <div class="column full-height ">
      <h4>Step Four</h4>
    </div>
  </div>
</template>

<script>
import HeadSection from "components/RequestEstimate/HouseholdWaste/FinalStep/HeadSection";
export default {
  components: {
    "head-section": HeadSection,
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
