<template>
  <div class="full-width notosanskr-medium">
    <!-- Request Quote Button -->
    <q-btn
      flat
      class="btn-request-quote row full-width"
      padding="0px"
      @click="showPopup()"
    >
      <div class="row items-center full-width">
        <q-icon name="favorite_border" style="width: 75px"></q-icon>
        <q-separator vertical inset></q-separator>
        <div class="col">견적신청</div>
      </div>
    </q-btn>

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
        <div
          class="popup-content q-px-md notosanskr-regular"
          style="height: 312px;"
        >
          <div class="text-heading notosanskr-medium">철거하기!</div>
          <p class="text-sub-heading q-mt-sm">
            예상 견적을 받으실 작업내용을 알려주세요.
          </p>
          <div class="row justify-center">
            <div
              class="col-6 row justify-center q-pa-xs"
              style="height: 124px;  max-width: 300px"
            >
              <q-btn
                class="bg-secondary full-width"
                flat
                :to="{ path: '/request/waste' }"
              >
                <q-icon>
                  <img src="~assets/outline-waste.svg" />
                </q-icon>
              </q-btn>
            </div>
            <div
              class="col-6 row justify-center q-pa-xs"
              style="height: 124px; max-width: 300px"
            >
              <q-btn class="full-width" outline color="grey-13">
                <q-icon>
                  <img src="~assets/outline-demolition.svg" />
                </q-icon>
              </q-btn>
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupBottom: false,
    };
  },
  methods: {
    showPopup() {
      this.popupBottom = !this.popupBottom;
    },
    closePopup() {
      this.popupBottom = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-request-quote {
  height: 60px;
  background: #2cb3ff;

  font-weight: 500;
  font-size: 16px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.8px;
  color: #ffffff;
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
}
</style>
