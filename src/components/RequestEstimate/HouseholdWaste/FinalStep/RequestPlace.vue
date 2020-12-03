<template>
  <q-card flat class="bg-transparent">
    <q-card-section class="bg-white q-pa-none">
      <div class="section-title notosanskr-medium">의뢰 장소</div>
    </q-card-section>
    <q-card-section
      class="q-pa-none notosanskr-regular"
      style="margin: 12px 16px"
    >
      <!-- place-discharge 배출장소 -->
      <div class="bg-white q-pa-md border-top-rad" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">
          배출장소
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            경기도 치움시 철거동 123-4 치움 번지 폐기 타운하우스 112호
          </div>
          <div class="notosanskr-medium" style="padding-left: 40px">
            <q-btn flat class="change-btn" padding="0px">변경</q-btn>
          </div>
        </div>
      </div>

      <!-- type 유형 -->
      <div class="bg-white q-pa-md" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">
          유형
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            상업공간
          </div>
          <div class="notosanskr-medium" style="padding-left: 40px">
            <q-btn flat class="change-btn" padding="0px">변경</q-btn>
          </div>
        </div>
      </div>

      <!-- elevator 엘레베이터 -->
      <div class="bg-white q-pa-md" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">
          엘레베이터
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            있음
          </div>
          <div class="notosanskr-medium" style="padding-left: 40px">
            <q-btn flat class="change-btn" padding="0px">변경</q-btn>
          </div>
        </div>
      </div>

      <!-- caution -->
      <div
        class="bg-white q-pa-md caution notosanskr-medium border-bottom-rad "
      >
        <span>[주의] </span>업체 방문시 알려주신 정보와 실제 정보가 차이가
        발생할 경우 예상 견적비용과 실제 작업비용이 차이가 날 수 있습니다.
      </div>
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
.section-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
  padding: 12px 16px;
  border-bottom: 1px solid #000;
}
.heading-text {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.65px;
  color: #767676;
}
.text {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.change-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  margin: 0px;
  letter-spacing: -0.8px;
  padding: 0 16px;
  color: #195de4;
}
.caution {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.6px;
  color: #767676;
  span {
    color: #2cb3ff;
  }
}
.border-top-rad {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.border-bottom-rad {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
