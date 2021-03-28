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
        <div class="heading-text notosanskr-medium">작업</div>
        <div class="q-pt-sm">
          <div class="text">{{ work }}</div>
        </div>
      </div>
      <!-- discarded goods 폐기 물품 -->
      <div
        class="bg-white q-pa-md"
        style="margin-bottom: 2px"
        v-if="discardedGoods.length"
      >
        <div class="heading-text notosanskr-medium">
          폐기 물품
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            <span v-for="(item, i) of discardedGoods" :key="i">
              {{ item }}
              <span class="q-mr-xs" v-if="i !== discardedGoods.length - 1"
                >,</span
              >
            </span>
          </div>
          <div class="notosanskr-medium" style="padding-left: 40px">
            <change-discarded-goods></change-discarded-goods>
          </div>
        </div>
      </div>
      <!-- schedule date 예정 날짜 -->
      <div
        class="bg-white q-pa-md"
        style="margin-bottom: 2px"
        v-if="scheduleDate"
      >
        <div class="heading-text notosanskr-medium">
          예정 날짜
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            {{ scheduleDate }}
          </div>
          <div style="padding-left: 40px">
            <change-schedule-work></change-schedule-work>
          </div>
        </div>
      </div>

      <!-- schedule Time 예정 시간 -->
      <div
        class="bg-white q-pa-md"
        style="margin-bottom: 2px"
        v-if="scheduleTime"
      >
        <div class="heading-text notosanskr-medium">
          예정 시간
        </div>
        <div class="row q-pt-sm">
          <div class="text col">
            {{ scheduleTime }}
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
        v-if="company"
      >
        <div class="heading-text notosanskr-medium">업체</div>
        <div class="q-pt-sm">
          <div class="text">{{ company }}</div>
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
  props: {
    work: {
      type: String,
      default: "",
    },
    discardedGoods: {
      type: Array,
      default: () => [],
    },
    scheduleDate: {
      type: String,
      default: "",
    },
    scheduleTime: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },
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
