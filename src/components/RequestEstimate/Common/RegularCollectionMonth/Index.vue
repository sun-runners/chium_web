<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      매월 정기 수거할 날
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="row full-height q-px-md">
      <!-- What week of month |  매월 몇번째 주  -->
      <section class="col-6 q-pr-lg">
        <div class="item-header notosanskr-regular">
          매월 몇번째 주
        </div>
        <week-selection @selectedValue="(e) => (collection.week = e)" />
        <q-separator class="q-mt-sm" style="background: #5A5A5A;" size="2px" />
      </section>

      <!-- Collection Day | 수거요일 -->
      <section class="col-6">
        <div class="item-header notosanskr-regular">
          수거요일
        </div>

        <collection-day-selection
          @selectedValue="(e) => (collection.day = e)"
        />
        <q-separator class="q-mt-sm" style="background: #5A5A5A;" size="2px" />
      </section>
    </div>
  </div>
</template>

<script>
import CollectionDaySelection from "./CollectionDaySelection.vue";
import WeekSelection from "./WeekSelection.vue";
export default {
  components: {
    WeekSelection,
    CollectionDaySelection,
  },
  data() {
    return {
      collection: {
        week: "",
        day: "",
      },
    };
  },
  watch: {
    collection: {
      deep: true,
      handler(val) {
        if (val.week && val.day) {
          this.$emit("collection", val);
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 36px;
}
.heading-subtitle {
  color: #959595;
}
.item-header {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.7px;
  color: #5a5a5a;
  padding-bottom: 4px;
  border-bottom: 2px solid #f0f0f0;
}
.item-value {
  font-weight: 500;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: -1.1px;
  color: #15161a;
}
</style>
