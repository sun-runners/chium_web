<template>
  <div class="bg-white">
    <check-elevator @elevatorAnswer="hasElevator" />
  </div>
</template>

<script>
import { CheckElevator } from "src/components/RequestEstimate/Common";
export default {
  components: {
    "check-elevator": CheckElevator,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
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
    setTimeout(() => {
      this.$emit("next", true);
    }, 1000);
  },
  methods: {
    hasElevator(answer) {
      console.log(answer); // 있음 || 없음
      this.$emit("next", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
