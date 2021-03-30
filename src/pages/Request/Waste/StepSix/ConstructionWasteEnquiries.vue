<template>
  <div>
    <change-schedule-work-time
      @next="setTime"
      @close="navigateBack"
      ready-on-init
    />
  </div>
</template>

<script>
import ChangeScheduleWorkTime from "components/RequestEstimate/FinalStep/BottomDialogs/ChangeScheduleWorkTime";
export default {
  components: {
    "change-schedule-work-time": ChangeScheduleWorkTime,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 6,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/seven/construction",
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
  methods: {
    setTime(val) {
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
