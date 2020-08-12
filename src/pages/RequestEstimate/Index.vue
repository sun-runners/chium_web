<template>
  <div class>
    <div>Request Estimate</div>
    <process-indicator :totalSteps="totalSteps" :activeStep="activeStep" :activeColor="activeColor"></process-indicator>
  </div>
</template>

<script>
import ProcessIndicator from "components/Utility/ProcessIndicator";
export default {
  name: "RequestEstimate",
  components: {
    "process-indicator": ProcessIndicator,
  },
  data() {
    return {
      totalSteps: 6,
      activeStep: 1,
      activeColor: "#55E2EB",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>