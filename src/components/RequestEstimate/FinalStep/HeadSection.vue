<template>
  <q-card flat class="bg-transparent notosanskr-regular">
    <q-card-section class="q-pa-none bg-white">
      <p class="heading-title q-ma-none q-px-md">
        견적신청서
        <span class="heading-subtitle">를 검토해보세요.</span>
      </p>
      <p class="schedule q-ma-none q-px-md">
        07월 24일(금) 오후 02:00시 예정
      </p>
    </q-card-section>
    <q-card-section class="notice">
      ※예상 견적서를 받은 후 작업 진행을 수락해야지만 업체와 작업이 진행됩니다.
    </q-card-section>
    <q-card-section
      class="bg-white q-pa-none"
      style="height: 20px;"
    ></q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 12px;
}
.heading-subtitle {
  color: #959595;
}
.schedule {
  font-size: 18px;
  line-height: 26px;
  color: #15161a;
  padding-bottom: 24px;
}
.notice {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.65px;
  color: #767676;
}
</style>
