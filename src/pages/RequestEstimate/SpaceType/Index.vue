<template>
  <div class="q-px-md">
    <div class="ask-space notosanskr-regular q-pa-none">
      <span>공간 유형</span>을
      알려주세요.
    </div>
    <div class="select-space-type notosanskr-regular">
      <!-- -------------Home Space -->
      <div class="space-type row items-center justify-between" style="margin-bottom: 25px;">
        <div class="row">
          <q-icon class="text-dark" size="30px">
            <img src="~assets/home.svg" />
          </q-icon>
          <div class="row items-center q-ml-md">주거공간</div>
        </div>

        <radio-check-icon
          :currentValue="spaceType"
          value="home"
          name="spaceType"
          @change="(value)=> spaceType = value"
        ></radio-check-icon>
      </div>
      <!-- ------------Commercial Space -->
      <div class="space-type row items-center justify-between">
        <div class="row">
          <q-icon class="text-dark" size="30px">
            <img src="~assets/commercial_space.svg" />
          </q-icon>
          <div class="row items-center q-ml-md">상업공간</div>
        </div>

        <radio-check-icon
          :currentValue="spaceType"
          value="commercial"
          name="spaceType"
          @change="(value)=> spaceType = value"
        ></radio-check-icon>
      </div>
    </div>
  </div>
</template>

<script>
import RadioCheckIcon from "components/Utility/RadioCheckIcon";
export default {
  name: "RequestSpaceType",
  components: {
    "radio-check-icon": RadioCheckIcon,
  },
  data() {
    return {
      spaceType: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.ask-space {
  width: 129px;
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
.select-space-type {
  padding: 35px 0px;
  .space-type {
    height: 44px;
  }
}
</style>