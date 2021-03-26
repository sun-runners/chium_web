<template>
  <div>
    <!-- {{ visit }} -->
    <visit-site-advance v-model="visit" @next="setPrevisit" />
  </div>
</template>

<script>
import { VisitSiteAdvance } from "src/components/RequestEstimate/Common";
export default {
  components: {
    "visit-site-advance": VisitSiteAdvance,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 5,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/final/recycle",
        prevPathRoute: "/request/waste/four/recycle",
      };
    },
  },
  data() {
    return {
      // "no" or { date: "", time: ""}
      visit: null,
    };
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {
    setPrevisit(val) {},
  },
  watch: {
    visit() {
      this.$emit("next", false);

      if (this.visit === "no") {
        // if User decided not to visit
        this.$emit("next", true);
        console.log("No visit");
      }
      if (typeof this.visit === "object") {
        if (this.visit.date && this.visit.time) {
          // if User decided to visit & value is set
          this.$emit("next", true);
          console.log(
            `Visit is set: Date: ${this.visit.date} - Time ${this.visit.time}`
          );
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
