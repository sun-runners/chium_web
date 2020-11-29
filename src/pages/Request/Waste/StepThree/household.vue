<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      현장 사전방문
      <span class="heading-subtitle">을 원하시나요?</span>
    </p>
    <!-- visit options answers -->
    <visit-options @visit="(v) => (visit = v)"></visit-options>
    <!-- visit time & dates -->
    <visit-date-time v-show="visit"></visit-date-time>
  </div>
</template>

<script>
import VisitOptions from "components/RequestEstimate/HouseholdWaste/StepThree/VisitOptions";
import VisitDateTime from "components/RequestEstimate/HouseholdWaste/StepThree/VisitDateTime";
export default {
  components: {
    "visit-options": VisitOptions,
    "visit-date-time": VisitDateTime,
  },
  data() {
    return {
      visit: false,
      dateTime: {
        date: "",
        time: "",
      },
    };
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 4,
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
    this.$emit("next", true);
  },
  methods: {},
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
  padding-bottom: 24px;
}
.heading-subtitle {
  color: #959595;
}
</style>
