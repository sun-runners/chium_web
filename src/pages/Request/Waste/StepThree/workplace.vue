<template>
  <div>
    <work-due-date @next="(val) => $emit('next', val)" />
  </div>
</template>

<script>
import { WorkDueDate } from "src/components/RequestEstimate/Common";
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
        nextPathRoute: "/request/waste/four/workplace",
        prevPathRoute: "/request/waste/two/workplace",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
