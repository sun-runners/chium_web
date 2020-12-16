<template>
  <div>
    <work-due-date @next="(val) => $emit('next', val)" />
  </div>
</template>

<script>
import { WorkDueDate } from "src/components/RequestEstimate/Utility";
export default {
  components: {
    WorkDueDate,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 5,
        activeStep: 3,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/four/household",
        prevPathRoute: "/request/waste/two/household",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 36px;
}
.heading-subtitle {
  color: #959595;
}
.schedule-undecided {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
}
</style>
