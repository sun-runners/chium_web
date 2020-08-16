<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-space q-pa-none">
        <span>공간 유형</span>을
        알려주세요.
      </div>
      <div class="select-space-type">
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

    <q-tab-panels v-model="spaceType" animated transition-next="slide-left" flat class>
      <q-tab-panel name="home" class="q-pa-none">
        <div style="background: #F2F2F2; height: 10px"></div>
        <div class="q-pa-md">
          <div class="specific-type">공간 타입을 선택해주세요.</div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="commercial" class="q-pa-none">
        <div style="background: #F2F2F2; height: 10px"></div>
        <div class="q-pa-md">
          <div class="specific-type">공간 타입을 선택해주세요.</div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
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

.specific-type {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
}
</style>