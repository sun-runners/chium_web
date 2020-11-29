<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      폐기할 물품
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="column full-height ">
      <h4>Step Four</h4>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 4,
        activeStep: 4,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/",
        prevPathRoute: "/request/waste/three/household",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {},
  watch: {},
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
// input
.field {
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  .attachment {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.8px;
    color: #195de4;
  }
}
.discarded {
  .heading-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: #15161a;
    padding-bottom: 20px;
  }
  .item {
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #15161a;

    background: #f6f6f6;
    border-radius: 8px;
  }
}
</style>
