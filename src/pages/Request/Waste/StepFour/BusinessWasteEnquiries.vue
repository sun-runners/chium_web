<template>
  <div>
    <change-schedule-work-time @next="setTime"/>
  </div>
</template>

<script>
import { VisitSiteAdvance } from "src/components/RequestEstimate/Common";
import ChangeScheduleWorkTime from "components/RequestEstimate/FinalStep/BottomDialogs/ChangeScheduleWorkTime";
export default {
  components: {
    "visit-site-advance": VisitSiteAdvance,
    "change-schedule-work-time": ChangeScheduleWorkTime
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
  methods:{
    setTime(val){
      this.$emit("setEnquiryData", {work_time :val})
    }
  }
};
</script>

<style lang="scss" scoped></style>
