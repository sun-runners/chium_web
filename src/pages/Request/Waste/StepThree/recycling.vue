<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md q-pt-sm">
      <p class="heading-title">
        재활용 배출 장소<span class="heading-subtitle">를 알려주세요.</span>
      </p>
      <!-- address section -->
      <div class="address-section notosanskr-regular">
        <div class="address-text q-pb-sm">주소</div>
        <div class="row q-col-gutter-sm">
          <div class="col-8">
            <input type="text" class="address-field full-width q-pa-sm" />
          </div>
          <div class="col-4">
            <q-btn flat class="find-postal-btn full-width">
              우편번호 찾기
            </q-btn>
          </div>
          <div class="col-12">
            <input type="text" class="address-field full-width q-pa-sm" />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="address-field full-width q-pa-sm bg-white"
              placeholder="나머지 상세주소를 입력하세요."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 3,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/four/recycling",
        prevPathRoute: "/request/waste/",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  font-family: "notosanskr-regular";
}
.heading-subtitle {
  color: #959595;
}
.address-section {
  margin-top: 36px;
  .address-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
  .address-field {
    background: #f7f7f6;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;
  }
  .find-postal-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #195de4;
    height: 60px;
    border: 1px solid #195de4;
    box-sizing: border-box;
    border-radius: 8px;
    background: white;
  }
}
</style>
