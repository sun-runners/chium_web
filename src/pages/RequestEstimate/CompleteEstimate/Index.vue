<template>
  <div class="notosanskr-regular q-pa-none q-ma-none" style="background: #F2F2F5;">
    <div class="q-pa-none bg-white q-ma-none">
      <div class="evaluate-complete q-pa-none">
        <span>견적신청</span>
        을 완료하세요.
      </div>

      <div class="request-info">
        <div class="item-info row justify-between items-center">
          <div style="width: 232px;" class>경기도 치움시 철거동 123-4 치움 현장 1203호</div>
          <q-btn
            flat
            style="color: #151515;border: solid 1px #DEDEDE"
            @click="removeSelectedImage(pic)"
            label="변경"
          />
        </div>
        <div class="item-info row justify-between items-center">
          <div style="width: 232px;" class>주거공간/오피스텔</div>
          <q-btn
            flat
            style="color: #151515;border: solid 1px #DEDEDE"
            @click="removeSelectedImage(pic)"
            label="변경"
          />
        </div>
        <div class="item-info row justify-between items-center">
          <div style="width: 232px;" class>20~30평</div>
          <q-btn
            flat
            style="color: #151515;border: solid 1px #DEDEDE"
            @click="removeSelectedImage(pic)"
            label="변경"
          />
        </div>
        <div class="item-info row justify-between items-center text-secondary">
          <div style="width: 232px;" class>철거/전체철거</div>
          <q-btn
            flat
            style="color: #151515;border: solid 1px #DEDEDE"
            @click="removeSelectedImage(pic)"
            label="변경"
          />
        </div>
        <div class="item-info row justify-between items-center">
          <div style="width: 232px;" class>7월16일</div>
          <q-btn
            flat
            style="color: #151515;border: solid 1px #DEDEDE"
            @click="removeSelectedImage(pic)"
            label="변경"
          />
        </div>
      </div>
    </div>

    <div class="client-info bg-white">
      <div class="section-text">
        <span>의뢰자 정보</span>
      </div>
      <div class="client-name">홍길동</div>
    </div>
    <div class="client-number bg-white row justify-between items-center">
      <div style="width: 232px;" class>010-2345-6789</div>
      <q-btn
        flat
        style="color: #151515;border: solid 1px #DEDEDE"
        @click="removeSelectedImage(pic)"
        label="변경"
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.evaluate-complete {
  width: 129px;
  font-size: 27px;
  line-height: 40px;
  /* or 148% */

  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 40px;
  /* or 148% */
  padding: 30px 16px 0;
  letter-spacing: -1.35px;
  span {
    color: #46b3fc;
  }
}
.request-info {
  margin-top: 35px;
  // padding-bottom: 10px;
  padding: 0 16px 10px;
  .item-info {
    padding: 27px 0;
    border-bottom: 1px solid #0000001a;
    font-size: 17px;
    line-height: 26px;
    /* or 153% */

    letter-spacing: -0.85px;
  }
}

.client-info {
  margin-top: 10px;
  padding: 15px 16px 0;
  .section-text {
    padding: 15px 0;
  }
  .client-name {
    padding: 22px 0;
  }
}
.client-number {
  padding: 27px 16px;
  border-top: 1px solid #0000001a;
  font-size: 17px;
  line-height: 26px;
  /* or 153% */

  letter-spacing: -0.85px;
}
</style>