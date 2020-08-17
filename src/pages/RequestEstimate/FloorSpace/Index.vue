<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-space q-pa-none">
        <span>공간 평수</span>를 알려주세요.
      </div>
      <div style="color:#767676; font-szie:14px letter-spacing: -0.7px;" class="q-mt-xs">(철거 할 공간면적)</div>
      <div class="select-acreage">
        <div class="acreage-input row items-center">
          <q-icon class="text-dark" size="24px">
            <img src="~assets/union-icon.svg" />
          </q-icon>
          <div class="acreage-text text-secondary">평수입력</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

    .acreage-text {
      margin-left: 10px;
      font-size: 17px;
    }
  }
}
</style>