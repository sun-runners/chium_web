<template>
  <div class="bg-white">
    <check-elevator @elevatorAnswer="hasElevator($event)" />
  </div>
</template>

<script>
import CheckElevator from "src/components/RequestEstimate/Common/CheckElevator.vue";
export default {
  components: {
    CheckElevator,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/demolition/five/interior",
        prevPathRoute: "/request/demolition/three/interior",
      };
    },
  },
  methods: {
    hasElevator(answer) {
      console.log(answer);
      this.$emit("next", true);
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped></style>
