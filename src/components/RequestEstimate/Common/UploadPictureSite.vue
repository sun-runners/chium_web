<template>
  <div class="notosanskr-regular bg-white q-px-md full-height">
    <div class="heading-title bg-white q-py-xs q-px-none notosanskr-regular">
      현장사진
      <span class="inner-heading">을 보여주세요.</span>
    </div>
    <div class="q-py-xs small-heading">최대 3장까지 첨부가능(선택사항)</div>

    <div class="col-12 q-pa-none" style="padding-bottom: 24px">
      <q-file
        outlined
        class="field"
        ref="myImageField"
        :label="'폐기물 및 현장 사진을 첨부해주세요.'"
        label-color="grey-13"
        accept=".jpg, .png, image/*"
        @rejected="onRejected"
        v-model="myImage"
        @input="attachImage"
      >
        <template v-slot:append>
          <q-btn flat class="attachment notosanskr-medium">
            <span v-if="!myImage">등록</span>
          </q-btn>
        </template>
      </q-file>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myImage: null
    }
  },
  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
    attachImage (e) {
      this.$emit('attachImage', this.myImage)
      this.$refs.myImageField.blur()
      this.$q.notify({
        type: 'possitive',
        message: 'Image Selected'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
}
.inner-heading,
.small-heading {
  color: #959595;
}
.small-heading {
  padding-bottom: 36px;
}
// input
.field {
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  .attachment {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.8px;
    color: #195de4;
  }
}
</style>
