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
        nextPathRoute: "/request/waste/five/household",
        prevPathRoute: "/request/waste/three/household",
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

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 36px;
}
.heading-subtitle {
  color: #959595;
}
.schedule-undecided {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
}
</style>
