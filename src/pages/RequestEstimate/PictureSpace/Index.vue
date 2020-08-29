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
          <q-card-section class="row items-center no-wrap">dsd</q-card-section>
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
}
</style>