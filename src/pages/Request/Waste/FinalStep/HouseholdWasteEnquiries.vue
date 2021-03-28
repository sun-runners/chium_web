<template>
  <div class="">
    <head-section />
    <request-place
      :placeOfDischarge="placeOfDischarge"
      :type="type"
      :elevator="elevator"
      hiddenFloor
      hiddenAcreage
    />
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
    return {
      placeOfDischarge:
        "경기도 치움시 철거동 123-4 치움 번지 폐기 타운하우스 112호",
      type: "상업공간",
      elevator: "있음",
    };
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
        prevPathRoute: "/request/waste/five/household",
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
