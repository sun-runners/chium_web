<template>
  <div>
    <q-btn
      flat
      class="change-btn notosanskr-medium"
      padding="0px"
      @click="dialog = true"
    >
      변경
    </q-btn>
    <q-dialog v-model="dialog" position="bottom">
      <q-card class="notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width bg-white"
        >
          <div class="toolbar-title q-pl-md notosanskr-medium">
            작업 예정일 변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <q-card-section class="q-pa-none">
          <div class="bg-white q-px-md">
            <div class="heading-title">
              작업 예정일
              <span class="heading-subtitle">을 알려주세요.</span>
            </div>
            <q-separator />
            <div class="selected-date q-py-md">
              <p class="q-ma-none">선택한 날짜</p>
              <div class="date-value notosanskr-medium">07월 24일 (목)</div>
            </div>
          </div>
          <div class="calendar-container q-px-md bg-white">
            <custom-calendar
              ref="calendar"
              :date="new Date()"
              @dateSelected="setDateSelected"
            ></custom-calendar>
          </div>

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
                v-if="selectedDate == 'undecided'"
              />
              <img src="~assets/circle_check_grey.svg" v-else />
            </q-icon>
          </q-btn>
        </q-card-section>

        <!-- Footer section | 바닥 글 버튼 섹션  -->
        <q-card-section class="q-pa-xs q-px-md absolute-bottom">
          <q-btn
            style="height: 60px;"
            :color="selectedDate != null ? 'secondary' : 'grey'"
            :disable="selectedDate == null"
            class="change-btn full-width notosanskr-medium "
            unelevated
            text-color="white"
            label="변경하기"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
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
      dialog: false,
      changeEnable: true,
      selectedDate: null,
    };
  },
  methods: {
    setDateSelected(v) {
      this.selectedDate = `${v.getFullYear()}/${v.getMonth() +
        1}/${v.getDate()}`;
    },
    setUndecided() {
      this.selectedDate != "undecided"
        ? (this.selectedDate = "undecided")
        : (this.selectedDate = null);
      this.$refs.calendar.clearSelectedDate();
    },
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 100%;
  max-width: 1000px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100vh;

  background: #f3f3f3;
}
.toolbar-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.spacer-separator {
  height: 12px;
}
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 24px;
}
.heading-subtitle {
  color: #959595;
}
.selected-date {
  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #959595;
  }
  .date-value {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #195de4;
  }
}
.calendar-container {
  margin-top: 12px;
  padding-bottom: 50px;
}

.schedule-undecided {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
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
</style>
