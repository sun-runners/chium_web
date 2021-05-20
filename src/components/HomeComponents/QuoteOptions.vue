<template>
  <div>
    <div class="row q-gutter-md q-pa-sm q-pt-md q-px-md">
      <div class="col bg-white flex content-center justify-center">
        <!--@click="showPopup()"-->
        <q-btn
          class="full-width full-height home-btn bg-white"
          align="center"
          type="a"
          @click="goWaste">
          <q-icon
            size="110px"
            :name="`img:${require('src/assets/icon_truck.svg')}`"
          ></q-icon>
          <p class="notosanskr-medium q-pt-sm full-width">폐기물 버리기</p>
        </q-btn>
      </div>
      <div class="col bg-white flex content-center justify-center">
        <!--@click="showPopup('demolition')"-->
        <q-btn
          class="full-width full-height home-btn bg-white"
          type="a"
          align="center"
          @click="goDemolition">
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
import store from 'src/store'

export default {
  data () {
    return {
      slide: 1,
      popupBottom: false,
      contentWaste: true
    }
  },
  methods: {
    showPopup (content = 'waste') {
      this.popupBottom = !this.popupBottom
      this.contentWaste = content === 'waste'
    },
    closePopup () {
      this.popupBottom = false
    },
    async goWaste () {
      await this.$router.push({ name: 'waste' })
    },
    async goDemolition () {
      await this.$router.push({ name: 'demolition' })
    },
    alertNotReady () {
      this.$emit('alertNotReady')
    }
  }
}
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
