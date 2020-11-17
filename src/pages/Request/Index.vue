<template>
  <div class="q-mt-lg row">
    <div class="col-12">
      <q-tab-panels v-model="$route.params.step">
        <q-tab-panel name="1">
          <component :is="currentStep"> </component>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import StepOne from "src/components/RequestEstimate/StepOne";
export default {
  components: {
    StepOne,
  },
  data() {
    return {
      currentStep: "StepOne",
      steps: "1",
      list_household_waste_type: [
        {
          icon1: "bed.svg",
          label: "가구",
          val: "domestic",
        },
        {
          icon1: "radio.svg",
          label: "가전",
          val: "industrial",
        },
        {
          icon1: "clothes.svg",
          label: "생활용품",
          val: "construction",
        },
        {
          icon1: "document.svg",
          label: "기타",
          val: "box",
        },
      ],
    };
  },
  mounted() {
    this.$emit("onHandleStep", this.$route.params.step);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
