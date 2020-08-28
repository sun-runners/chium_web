<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-due-date q-pa-none">
        <span>작업 예정일</span>
        을 선택해주세요.
      </div>
      <q-card class="my-card" :bordered="false">
        <q-card-section style="margin-top: 50px; height: 430px;" class="q-pa-none">
          <custom-calendar ref="calendar" :date="new Date()" @dateSelected="setDateSelected"></custom-calendar>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-mt-sm q-pa-none" :bordered="false">
        <div class="undecided row items-center justify-between">
          <div class="row">
            <div class="row items-center q-ml-md">폐기물 처리</div>
          </div>

          <radio-check-icon
            :currentValue="dateSelected"
            value="undecided"
            name="dateSelected"
            @change="clearDateSelected"
          ></radio-check-icon>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import CustomCalendar from "src/components/Utility/CustomCalendar";
import RadioCheckIcon from "src/components/Utility/RadioCheckIcon";
export default {
  components: {
    "custom-calendar": CustomCalendar,
    "radio-check-icon": RadioCheckIcon,
  },
  data() {
    return {
      dateSelected: null,
    };
  },
  methods: {
    setDateSelected(v) {
      this.dateSelected = `${v.getFullYear()}/${
        v.getMonth() + 1
      }/${v.getDate()}`;
    },
    clearDateSelected(v) {
      this.dateSelected = v;
      this.$refs.calendar.clearSelectedDate();
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.ask-due-date {
  width: 152px;
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
.undecided {
  height: 70px;
  padding: 16px 16px 16px 5px;
}
</style>