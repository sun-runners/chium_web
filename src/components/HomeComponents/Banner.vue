<template>
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
              @click="alertNotReady"
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
</template>

<script>
export default {
  methods: {
    alertNotReady () {
      this.$emit('alertNotReady')
    }
  }
}
</script>

<style scoped>
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
  z-index: 99;
}
</style>
