<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-picture q-pa-none">
        <span>공간사진</span>
        을 보여주세요.
      </div>
      <div style="color:#767676; font-szie:14px letter-spacing: -0.7px;" class="q-mt-xs">(선택 사항)</div>
      <div class="select-photo row q-col-gutter-md q-ma-none"></div>
    </div>
  </div>
</template>
<script>
export default {};
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
</style>