de<template>
  <div class="bg-primary" style="min-height: inherit">
    <div
      class="text-white no-margin"
      style="height: 418px; background-color:#46B3FC;"
    >
      <div class="row">
        <div class="col" style="min-width: 228px;">
          <div class="column notosanskr-regular">
            <p class="col banner-text q-pt-xl q-pl-md">
              치움은<br />어떤일을 하나요?
            </p>
            <div class="col">
              <q-btn
                class="guide-btn q-ml-lg q-mt-md"
                label="치움 가이드 보러가기"
                flat="flat"
                size="sm"
                align="left"
                icon-right="arrow_forward_ios"
              ></q-btn>
            </div>
          </div>
        </div>
        <div
          class="col flex justify-end items-end content-end"
          style="min-height: 420px;"
        >
          <q-img
            class="q-mr-sm"
            :src="require('src/assets/boy.svg')"
            style="max-width: 250px; min-width: 250px; height: 100%; max-height: 268px"
          ></q-img>
        </div>
      </div>
    </div>
    <div class="row q-gutter-md q-pa-sm q-pt-md q-px-md">
      <div class="col bg-white flex content-center justify-center">
        <q-btn
          class="full-width full-height home-btn bg-white"
          @click="showPopup()"
          align="center"
          type="a"
        >
          <q-icon
            size="110px"
            :name="`img:${require('src/assets/icon_truck.svg')}`"
          ></q-icon>
          <p class="notosanskr-medium q-pt-sm full-width">폐기물 버리기</p>
        </q-btn>
      </div>
      <div class="col bg-white flex content-center justify-center">
        <q-btn
          class="full-width full-height home-btn bg-white"
          @click="showPopup('demolition')"
          type="a"
          align="center"
        >
          <q-icon
            size="110px"
            :name="`img:${require('src/assets/icon_swipe.svg')}`"
          ></q-icon>
          <p class="notosanskr-medium q-pt-sm full-width">철거하기</p>
        </q-btn>
      </div>
    </div>
    <q-dialog v-model="popupBottom" full-width="" position="bottom">
      <q-card style="height: 100%;border-radius: 8px;">
        <q-btn
          class="close notosanskr-medium float-right q-pa-sm"
          flat=""
          padding="0"
          @click="closePopup"
        >
          닫기
        </q-btn>
        <!-- waste-->
        <div
          class="popup-content q-px-md notosanskr-regular"
          style="height: 312px;"
          v-if="contentWaste"
        >
          <div class="text-heading notosanskr-medium">철거하기!</div>
          <p class="text-sub-heading q-mt-sm">
            철거를 진행하기전 업체에게서 견적 받는 방법을 선택해주세요.
          </p>
          <div class="row justify-center">
            <q-btn
              class="vendor-btn q-ma-xs"
              style="background: #2CB3FF; color: white"
            >
              업체 한 곳에서 견적받기
            </q-btn>
            <q-btn class="vendor-btn bg-white q-ma-xs" style="color: #15161A;">
              여러 업체에게 역 견적 받기
            </q-btn>
          </div>
        </div>
        <!-- demolition-->
        <div
          class="popup-content q-px-md notosanskr-regular"
          style="height: 252px;"
          v-else
        >
          <div class="text-heading notosanskr-medium">폐기물 버리기!</div>
          <p class="text-sub-heading q-mt-sm">
            폐기물 작업을 진행하기 전 업체에게 견적 받는 방법을 선택해주세요.
          </p>
          <q-btn class="vendor-btn" style="background: #2CB3FF; color: white">
            업체 한 곳 선정해서 견적받기
          </q-btn>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slide: 1,
      popupBottom: false,
      contentWaste: true,
    };
  },
  created() {
    this.$emit("changeHeadingName", "괘랑4길 16-38");
  },
  methods: {
    showPopup(content = "waste") {
      this.popupBottom = !this.popupBottom;
      this.contentWaste = content == "waste";
    },
    closePopup() {
      this.popupBottom = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-btn {
  min-height: 180px;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.85px;
  color: #15161a;
  padding: 17px;
}

.banner-text {
  font-size: 34px;
  text-align: left;
  min-width: 288px;
}

.guide-btn {
  font-weight: 500;
  font-size: 14px;
  height: 46px;
  border-radius: 1000px;
  border: 1px solid #fff;
}

.popup-content {
  color: #15161a;
  letter-spacing: -0.8px;
  text-align: center;
  padding-top: 50px;
  .close {
    font-weight: 500;
    font-size: 14px;
    line-height: 50px;
    text-align: right;
    letter-spacing: -0.7px;
    right: 0;
  }
  .text-heading {
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;

    letter-spacing: -1.1px;
  }
  .text-sub-heading {
    font-size: 16px;
    line-height: 24px;

    color: #5a5a5a;
  }
  .vendor-btn {
    font-size: 15px;
    line-height: 40px;
    color: #ffffff;
    height: 50px;
    background: red;
    width: 280px;
    padding: 0;
  }
}
</style>
