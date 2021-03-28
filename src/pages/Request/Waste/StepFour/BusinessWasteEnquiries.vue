<template>
  <div>
    <work-due-date @next="setDate" />
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
        totalSteps: 6,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/five/business",
        prevPathRoute: "/request/waste/three/business",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {
    setDate(val) {
      if (val === "undecided") {
        console.log("undecided");
        this.$emit("setEnquiryData", { work_date: null });
        this.$emit("next", val);
      } else if (val) {
        this.$emit("setEnquiryData", { work_date: val });
        this.$emit("next", val);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
