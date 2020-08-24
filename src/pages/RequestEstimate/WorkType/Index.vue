<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-work q-pa-none">
        <span>작업 유형</span>을 선택해주세요.
      </div>
      <div class="select-work-type">
        <!-- -------------Home Space -->
        <div class="work-type row items-center justify-between" style="margin-bottom: 25px;">
          <div class="row">
            <q-icon class="text-dark" size="30px">
              <img src="~assets/square_home.svg" />
            </q-icon>
            <div class="row items-center q-ml-md">철거</div>
          </div>

          <radio-check-icon
            :currentValue="workType"
            value="demolition"
            name="workType"
            @change="(value)=> workType = value"
          ></radio-check-icon>
        </div>
        <!-- ------------Commercial Space -->
        <div class="work-type row items-center justify-between">
          <div class="row">
            <q-icon class="text-dark" size="30px">
              <img src="~assets/trash.svg" />
            </q-icon>
            <div class="row items-center q-ml-md">폐기물 처리</div>
          </div>

          <radio-check-icon
            :currentValue="workType"
            value="waste_disposal"
            name="workType"
            @change="(value)=> workType = value"
          ></radio-check-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioCheckIcon from "components/Utility/RadioCheckIcon";
export default {
  components: {
    "radio-check-icon": RadioCheckIcon,
  },
  data() {
    return {
      workType: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.ask-work {
  width: 149px;
  font-size: 27px;
  line-height: 40px;
  /* or 148% */

  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 40px;
  /* or 148% */
  margin-top: 30px;
  letter-spacing: -1.35px;
  span {
    color: #46b3fc;
  }
}
.select-work-type {
  padding: 35px 0px;
  .work-type {
    height: 44px;
  }
}
</style>