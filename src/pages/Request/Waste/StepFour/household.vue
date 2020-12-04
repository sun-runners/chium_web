<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      현장 사전방문
      <span class="heading-subtitle">을 원하시나요?</span>
    </p>
    <!-- visit options answers -->
    <visit-options @visit="(v) => (visit = v)"></visit-options>
    <!-- visit time & dates -->
    <visit-date-time @schedule="setSchedule" v-show="visit"></visit-date-time>
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
      schedule: {
        date: "",
        time: "",
      },
    };
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 5,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/final/household",
        prevPathRoute: "/request/waste/three/household",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {
    setSchedule(v) {
      this.schedule = { ...v };
    },
    validation() {
      if (this.schedule.date && this.schedule.time) {
        this.$emit("next", true);
      } else {
        this.$emit("next", false);
      }
    },
  },
  watch: {
    visit: function(v) {
      !v ? this.$emit("next", true) : this.$emit("next", false);
    },
    schedule: {
      handler(v) {
        if (this.visit) {
          this.validation();
        }
      },
      deep: true,
    },
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
  padding-bottom: 24px;
}
.heading-subtitle {
  color: #959595;
}
</style>
