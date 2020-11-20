<template>
  <div class="q-mt-lg row">
    <div class="col-12">
      <component :is="component" @next="$emit('next', true)"></component>
    </div>
  </div>
</template>

<script>
import StepOne from "src/pages/Request/Steps/StepOne";
import HouseholdWasteStepTwo from "src/pages/Request/Steps/HouseholdWaste/StepTwo";
export default {
  components: {
    StepOne,
    HouseholdWasteStepTwo,
  },
  data() {
    return {
      component: "StepOne",
    };
  },
  mounted() {
    this.$emit("onHandleStep", this.$route.params.step);
  },
  methods: {},
  watch: {
    "$route.params.step": {
      deep: true,
      handler(newStep) {
        switch (parseInt(newStep)) {
          case 2:
            this.component = "HouseholdWasteStepTwo";
            break;

          default:
            this.component = "StepOne";
            break;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
