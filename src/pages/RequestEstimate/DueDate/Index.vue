<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md q-pb-md">
      <div class="ask-due-date q-pa-none">
        <span>작업 예정일</span>
        을 선택해주세요.
      </div>
      <!-- Choosing/Selecting Due Date-->
      <div v-if="calendarVisible" style="margin-top: 50px;">
        <q-card class="my-card" :bordered="false">
          <q-card-section style="height: 430px;" class="q-pa-none">
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
      <div style="margin-top: 50px;" v-else>
        <div class="select-due-date row q-col-gutter-md q-ma-none">
          <div class="due-date-input col row items-center" @click="open('bottom')">
            <q-icon class="text-dark" size="24px">
              <img src="~assets/calendar_outline.svg" />
            </q-icon>
            <div
              class="due-date-text text-secondary"
            >{{ dateSelected != 'undecided' ? dateSelected : '작업 예정일 미정' }}</div>
          </div>
          <q-btn
            class="btn-change row q-pa-none q-ma-none justify-center items-center"
            flat
            @click="showCalendar()"
          >
            <div class="due-date-text text-secondary" style="font-size: 14px;">변경</div>
          </q-btn>
        </div>
      </div>
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
      calendarVisible: true,
    };
  },
  methods: {
    setDateSelected(v) {
      setTimeout(() => {
        this.dateSelected = `${v.getFullYear()}/${
          v.getMonth() + 1
        }/${v.getDate()}`;
        this.calendarVisible = false;
        this.$emit("next", true);
      }, 1100);
    },
    clearDateSelected(v) {
      this.dateSelected = v;
      setTimeout(() => {
        this.$refs.calendar.clearSelectedDate();
        this.calendarVisible = false;
        this.$emit("next", true);
      }, 1100);
    },
    showCalendar() {
      this.calendarVisible = true;
      this.dateSelected = null;
      this.$emit("next", false);
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

.select-due-date {
  margin-top: 35px;
  .due-date-input {
    border: 1px solid #dedede;
    border-radius: 5px;
    padding: 17px 16px;
    cursor: pointer;
    .due-date-text {
      margin-left: 10px;
      font-size: 17px;
    }
  }
  .btn-change {
    border: 1px solid #dedede;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-left: 10px;
  }
}

.undecided {
  height: 70px;
  padding: 16px 16px 16px 5px;
}
</style>