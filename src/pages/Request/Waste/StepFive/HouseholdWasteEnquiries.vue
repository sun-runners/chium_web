<template>
  <div>
    <change-schedule-work-time
      @next="setTime"
      @close="navigateBack"
      ready-on-init
      v-show="false"
    />
  </div>
</template>

<script>
import { VisitSiteAdvance } from "src/components/RequestEstimate/Common";
import ChangeScheduleWorkTime from "components/RequestEstimate/FinalStep/BottomDialogs/ChangeScheduleWorkTime";
export default {
  components: {
    "visit-site-advance": VisitSiteAdvance,
    "change-schedule-work-time": ChangeScheduleWorkTime,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 5,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/final/household",
        prevPathRoute: "/request/waste/four/household",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
    setTimeout(() => {
      this.$emit("next", true);
    }, 1000);
  },
  methods: {
    setTime(val) {
      console.log(val); // 10:00 etc ....
      this.$emit("setEnquiryData", { work_time: val });
      // we force to navigate to next route
      this.$emit("nextForced");
    },
    navigateBack() {
      // we force to return to previous route
      this.$emit("prevForced");
    },
  },
};
</script>

<style lang="scss" scoped></style>
