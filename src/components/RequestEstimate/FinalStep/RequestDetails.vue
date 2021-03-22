<template>
  <q-card flat class="bg-transparent">
    <q-card-section class="bg-white q-pa-none">
      <div class="section-title notosanskr-medium">의뢰 내용</div>
    </q-card-section>
    <q-card-section
      class="q-pa-none notosanskr-regular"
      style="margin: 12px 16px"
    >
      <!-- work 작업 -->
      <div class="q-pa-md bg-white  border-top-rad" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">배출장소</div>
        <div class="q-pt-sm">
          <div class="text">가정집 폐기물</div>
        </div>
      </div>
      <!-- discarded goods 폐기 물품 -->
      <div class="bg-white q-pa-md" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">
          배출장소
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            핸드블랜더1, 전자렌지2, 건조기1, 세탁기1
          </div>
          <div class="notosanskr-medium" style="padding-left: 40px">
            <change-discarded-goods></change-discarded-goods>
          </div>
        </div>
      </div>
      <!-- schedule date 예정 날짜 -->
      <div class="bg-white q-pa-md" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">
          예정 날짜
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            07월 24일 (목)
          </div>
          <div style="padding-left: 40px">
            <change-schedule-work></change-schedule-work>
          </div>
        </div>
      </div>

      <!-- schedule Time 예정 시간 -->
      <div class="bg-white q-pa-md" style="margin-bottom: 2px">
        <div class="heading-text notosanskr-medium">
          예정 시간
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            오전 08:00시
          </div>
          <div style="padding-left: 40px">
            <change-schedule-work-time></change-schedule-work-time>
          </div>
        </div>
      </div>
      <!-- company 업체 -->
      <div
        class="q-pa-md bg-white  border-bottom-rad"
        style="margin-bottom: 2px"
      >
        <div class="heading-text notosanskr-medium">업체</div>
        <div class="q-pt-sm">
          <div class="text">전국 불도저</div>
        </div>
      </div>
    </q-card-section>
    <q-card-section
      class="bg-white q-pa-none"
      style="height: 20px;"
    ></q-card-section>
  </q-card>
</template>

<script>
import ChangeScheduleWork from "./BottomDialogs/ChangeScheduleWork";
import ChangeDiscardedGoods from "./BottomDialogs/ChangeDiscardedGoods";
import ChangeScheduleWorkTime from "./BottomDialogs/ChangeScheduleWorkTime";
export default {
  components: {
    "change-discarded-goods": ChangeDiscardedGoods,
    "change-schedule-work": ChangeScheduleWork,
    "change-schedule-work-time": ChangeScheduleWorkTime,
  },
};
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
