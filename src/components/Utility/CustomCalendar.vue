<template>
  <div class="calendar-container">
    <div class="calendar">
      {{ this.dates.year }} - {{this.dates.month+1}} - {{ this.dates.date}}
      <section class="calendar-head">
        <q-icon
          @click="decreaseMonth"
          name="keyboard_arrow_left"
          size="40px"
          style="color: #C0C0C0; cursor: pointer"
        />
        <div class="text">{{dates.year}}. {{ dates.month+1 }}</div>
        <q-icon
          @click="increaseMonth"
          name="keyboard_arrow_right"
          size="40px"
          style="color: #C0C0C0; cursor: pointer"
        />
      </section>
      <section class="calendar-body">
        <div class="weeks-days">
          <div v-for="(day, index) in days" :key="index">
            <span class="notosanskr-regular">{{day}}</span>
          </div>
        </div>
        <div class="dates">
          <div
            class="date-day"
            v-for="(date, index) in datesDays"
            :key="index"
            v-bind:class="{'date-today':isDayToday(date),'selected-day': isSelectedDay(date)}"
            @click="    selectDate(date)"
          >
            <span :class="{'past-day': isPastDay(date)}">
              {{date}}
              <div class="this-day-text">오늘</div>
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarUi",
  props: {
    date: Date,
  },
  data() {
    return {
      calendar_header: "2019, 08, 12",
      days: ["일", "월", "화", "수", "목", "금", "토"],
      datesDays: [],
      dates: {
        year: this.date.getFullYear(),
        month: this.date.getMonth(),
        date: this.date.getDate(),
      },
      selectedDate: null,
    };
  },
  methods: {
    isDayToday(day) {
      if (
        this.dates.month == this.date.getMonth() &&
        this.dates.year == this.date.getFullYear()
      ) {
        return this.dates.date == day;
      }
    },
    isPastDay(day) {
      if (this.dates.year <= this.date.getFullYear()) {
        if (this.dates.month == this.date.getMonth()) {
          return this.dates.date > day;
        }
        return this.dates.month < this.date.getMonth();
      }
    },
    isSelectedDay(day) {
      if (this.selectedDate && this.dates.month >= this.date.getMonth()) {
        return this.selectedDate.getDate() == day;
      }
    },
    getLastDate(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    getFirstDay(year, month) {
      return new Date(year, month, 1).getDay();
    },
    initCalendar() {
      const firstDay = this.getFirstDay(this.dates.year, this.dates.month);
      const dateEnd = this.getLastDate(this.dates.year, this.dates.month);
      let dateStart = 1;
      const limit = 43;
      for (let i = 1; i < limit; i++) {
        if (i <= firstDay) {
          this.datesDays.push(" ");
        } else if (dateEnd < dateStart) {
          this.datesDays.push(" ");
        } else {
          this.datesDays.push(`${dateStart}`);
          dateStart++;
        }
      }
    },
    increaseMonth() {
      this.dates.month += 1;
      if (this.dates.month > 11) {
        this.dates.year += 1;
        this.dates.month = 0;
      }
      this.selectedDate = null;
      this.datesDays = [];
      this.initCalendar();
    },
    decreaseMonth() {
      this.dates.month -= 1;
      if (this.dates.month < 0) {
        this.dates.year -= 1;
        this.dates.month = 11;
      }
      this.selectedDate = null;
      this.datesDays = [];
      this.initCalendar();
    },
    selectDate(day) {
      if (!this.isPastDay(day) && !this.isDayToday(day)) {
        this.selectedDate = new Date(
          `${this.dates.year}`,
          this.dates.month,
          day
        );
        console.log(this.selectedDate);
      }
    },
  },
  mounted() {
    this.initCalendar();
  },
};
</script>

<style lang="scss" scoped>
.calendar-container {
  width: 100%;
  height: 385px;
  display: flex;
}
.calendar {
  width: 100%;
}
.calendar-head {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  .text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 70px;
  }
}
.calendar-body {
  width: 100%;
}
.weeks-days {
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  border-left: white solid 1px;
  div {
    height: 100%;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #767676;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.dates {
  display: flex;
  flex-wrap: wrap;
}
.date-day {
  width: 14.285714285714286%;
  height: 44px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-family: Roboto;
  text-align: center;
  letter-spacing: -0.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #151515;
  .past-day {
    color: #c0c0c0;
  }
  span {
    .this-day-text {
      display: none;
    }
  }
}
.date-today {
  span {
    color: #c0c0c0;
    border-radius: 100%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .this-day-text {
      margin-top: 50px;
      display: block;
      position: absolute;
      color: #46b3fc;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 18px;
      letter-spacing: -0.6px;
    }
  }
}
.selected-day {
  span {
    background: #32dfd5;
    color: whitesmoke;
    border-radius: 100%;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.tips {
  margin-top: 10px;
}
.active {
  color: red;
}
</style>