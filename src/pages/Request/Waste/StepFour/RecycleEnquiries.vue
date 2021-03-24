<template>
  <div class="bg-white">
    <regular-collection-month />
  </div>
</template>

<script>
import { RegularCollectionMonth } from "src/components/RequestEstimate/Common";
export default {
  components: {
    RegularCollectionMonth,
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
        nextPathRoute: "/request/waste/five/recycle",
        prevPathRoute: "/request/waste/three/recycle",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {
    setDate(val) {
      this.$emit("setEnquiryData", { regular_date: val });
      this.$emit("next", true);
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
