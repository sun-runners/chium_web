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
        totalSteps: 8,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/five/construction",
        prevPathRoute: "/request/waste/three/construction",
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
      console.log(answer);
      this.$emit("next", true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
