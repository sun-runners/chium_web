<template>
  <div>
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      작업 예정일
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <q-card class="my-card q-ma-sm" flat :bordered="false">
      <q-card-section style="height: 430px;" class="q-pa-none">
        <custom-calendar
          ref="calendar"
          :date="new Date()"
          @dateSelected="setDateSelected"
        ></custom-calendar>
      </q-card-section>
    </q-card>
    <q-btn
      class="schedule-undecided full-width bg-white notosanskr-regular q-py-sm"
      align="between"
      flat
      @click="setUndecided()"
    >
      작업 예정일 미정
      <q-icon>
        <img
          src="~assets/circle_check_blue.svg"
          v-if="dateSelected === 'undecided'"
        />
        <img src="~assets/circle_check_grey.svg" v-else />
      </q-icon>
    </q-btn>
  </div>
</template>

<script>
import CustomCalendar from "src/components/Utility/CustomCalendar";
export default {
  components: {
    "custom-calendar": CustomCalendar,
  },
  data() {
    return {
      dateSelected: null,
    };
  },

  methods: {
    setDateSelected(v) {
      this.dateSelected = `${v.getFullYear()}-${v.getMonth() +
        1}-${v.getDate()}`;
    },
    setUndecided() {
      this.dateSelected !== "undecided"
        ? (this.dateSelected = "undecided")
        : (this.dateSelected = null);
      this.$refs.calendar.clearSelectedDate();
    },
  },
  watch: {
    dateSelected(newVal) {
      newVal != null ? this.$emit("next", this.dateSelected) : this.$emit("next", false);
    },
  },
};
</script>

<style scoped>
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
.schedule-undecided {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
}
</style>
