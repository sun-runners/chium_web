<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-space q-pa-none">
        <span>공간 평수</span>를 알려주세요.
      </div>
      <div style="color:#767676; font-szie:14px letter-spacing: -0.7px;" class="q-mt-xs">(철거 할 공간면적)</div>
      <div class="select-acreage">
        <div class="acreage-input row items-center" @click="open('bottom')">
          <q-icon class="text-dark" size="24px">
            <img src="~assets/union-icon.svg" />
          </q-icon>
          <div class="acreage-text text-secondary">평수입력</div>
        </div>
      </div>

      <q-dialog v-model="dialog" :position="position">
        <q-card style="height: 541px; border-radius: 20px;" :style="widthMax">
          <q-card-section class="row items-center no-wrap">
            <div class="text-weight-bold">철거할 공간평수</div>
          </q-card-section>

          <q-card-section class="row items-center no-wrap">
            <q-footer class="row justify-center bg-grey-11">
              <q-toolbar class="bg-white text-white q-py-sm" :style="widthMax">
                <q-toolbar-title>
                  <q-btn
                    class="full-width notosanskr-regular btn-complete"
                    label="선택완료"
                    style="font-size:17px;"
                    @click="complete"
                  />
                </q-toolbar-title>
              </q-toolbar>
            </q-footer>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      position: "top",
    };
  },
  computed: {
    widthMax() {
      return { width: window.innerWidth + "px", "max-width": "1000px" };
    },
  },
  methods: {
    open(position) {
      this.position = position;
      this.dialog = true;
    },
    complete() {
      this.$emit("next", true);
      this.dialog = false;
    },
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

.select-acreage {
  margin-top: 35px;
  .acreage-input {
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 17px 16px;
    cursor: pointer;
    .acreage-text {
      margin-left: 10px;
      font-size: 17px;
    }
  }
}

.btn-complete {
  color: #ffffff;
  background: #46b3fc;
  border-radius: 8px;
  height: 60px;
}
</style>