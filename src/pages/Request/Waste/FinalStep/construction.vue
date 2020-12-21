<template>
  <div class="">
    <head-section />
    <request-place />
    <requester />
    <request-details />
  </div>
</template>

<script>
import {
  HeadSection,
  RequestPlace,
  Requester,
  RequestDetails,
} from "components/RequestEstimate/FinalStep";
export default {
  components: {
    "head-section": HeadSection,
    "request-place": RequestPlace,
    requester: Requester,
    "request-details": RequestDetails,
  },
  data() {
    return {};
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 6,
        btnLabel: "견적신청완료",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/home",
        prevPathRoute: "/request/waste/five/construction",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
    setTimeout(() => {
      this.$emit("next", true);
    }, 1000);
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
