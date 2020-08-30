<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-picture q-pa-none">
        <span>공간사진</span>
        을 보여주세요.
      </div>
      <div style="color:#767676; font-szie:14px letter-spacing: -0.7px;" class="q-mt-xs">(선택 사항)</div>
      <div class="select-photo">
        <q-btn @click="open('bottom')" flat class="upload-button full-width" label="공간 사진 업로드" />
      </div>
      <q-dialog v-model="dialog" :position="position">
        <q-card style="height: 541px;" :style="widthMax" class="popup-content">
          <q-layout view="Lhh lpR fff" container class="bg-white">
            <q-header class="bg-white">
              <q-toolbar>
                <q-toolbar-title class="popup-header text-dark notosanskr-regular">사진선택</q-toolbar-title>
              </q-toolbar>
            </q-header>
            <q-page-container style="height: 511px;">
              <q-page padding class="q-pt-none">
                <div class="row">
                  <div class="col-4 bg-grey-14" v-for="(item, index) in 10" :key="index">
                    <div class="img-space">
                      <q-img
                        src="https://placeimg.com/500/300/nature"
                        spinner-color="white"
                        style="height: 100%; max-width: 100%"
                        :ratio="1"
                      />
                    </div>
                  </div>
                </div>
              </q-page>
            </q-page-container>
          </q-layout>
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
  },
};
</script>

<style lang="scss" scoped>
.ask-picture {
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

.select-photo {
  margin-top: 35px;
  .upload-button {
    height: 50px;
    color: #151515;
    background: #e8eaeb;
    border: 1px solid #dedede;
  }
}

.popup-content {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  .popup-header {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    /* identical to box height, or 173% */

    letter-spacing: -0.85px;
  }
  .img-space {
    width: 100%;
    // padding-top: 75%; /* 4:3 Aspect Ratio */
    border: #fff solid 0.5px;
  }
}
</style>