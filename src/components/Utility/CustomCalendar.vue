<template>
  <div class="calendar-container">
    <div class="calendar">
      <section class="calendar-head">
        <q-icon
          @click="decreaseMonth"
          name="keyboard_arrow_left"
          size="40px"
          style="color: #C0C0C0; cursor: pointer"
        />
        <div class="text">
          {{ calendarDates.year }}. {{ calendarDates.month + 1 }}
        </div>
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
            <span class="notosanskr-regular">{{ day }}</span>
          </div>
        </div>
        <div class="dates">
          <div
            class="date-day"
            v-for="(date, index) in datesDays"
            :key="index"
            @click="setSelectDate(date)"
          >
            <div
              class="inner-date-day notosanskr-medium"
              :class="{
                'day-of-month': date.currentMonth,
                available: isDateAvailable(date),
                selected: isSelectedDay(date),
              }"
            >
              {{ isDayToday(date.day) ? "오늘" : date.day }}
            </div>
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
      calendarDates: {
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
        this.calendarDates.month == this.date.getMonth() &&
        this.calendarDates.year == this.date.getFullYear()
      ) {
        return this.calendarDates.date == day;
      }
    },
    isPastDay(day) {
      if (this.calendarDates.year <= this.date.getFullYear()) {
        if (this.calendarDates.month == this.date.getMonth()) {
          return this.calendarDates.date > day;
        }
        return this.calendarDates.month < this.date.getMonth();
      }
    },
    isDateAvailable(date) {
      if (this.calendarDates.year < this.date.getFullYear()) {
        return;
      }
      return (
        !this.isDayToday(date.day) &&
        !this.isPastDay(date.day) &&
        date.currentMonth
      );
    },
    isSelectedDay(date) {
      if (this.selectedDate && date.currentMonth) {
        return this.selectedDate.getDate() == date.day;
      }
    },
    getLastDate(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    getFirstDay(year, month) {
      return new Date(year, month, 1).getDay();
    },
    getPrevMonthDay(dayLast, firstDay) {
      const curMonth = this.calendarDates.month;
      // we get the previous month
      const prevMonth = curMonth > 0 ? curMonth : 12;
      const year =
        curMonth > 0 ? this.calendarDates.year : this.calendarDates.year - 1;
      const lastMonthDay = this.getLastDate(year, prevMonth - 1);
      return `${lastMonthDay - (firstDay - dayLast)}`;
    },
    getNextMonthDay(dayLast, firstDay) {
      const curMonth = this.calendarDates.month;
      // we get the next month
      const nextMonth = curMonth < 11 ? curMonth + 1 : 0;
      const year =
        curMonth > 0 ? this.calendarDates.year : this.calendarDates.year - 1;
      const nextMonthDay = 1;
      return `${nextMonthDay}`;
      // return `${nextMonthDay - (firstDay - dayLast)}`;
    },
    initCalendar() {
      const firstDay = this.getFirstDay(
        this.calendarDates.year,
        this.calendarDates.month
      );
      const dateEnd = this.getLastDate(
        this.calendarDates.year,
        this.calendarDates.month
      );
      let dateValue = 1;
      let nextMonthDate = 1;
      const limit = firstDay >= 5 ? 43 : 36;
      for (let i = 1; i < limit; i++) {
        if (i <= firstDay) {
          this.datesDays.push({
            prevMonth: true,
            day: `${this.getPrevMonthDay(i, firstDay)}`,
          });
        } else if (dateEnd < dateValue) {
          this.datesDays.push({
            nextMonth: true,
            day: nextMonthDate,
          });
          nextMonthDate++;
        } else {
          this.datesDays.push({
            currentMonth: true,
            day: dateValue,
          });
          dateValue++;
        }
      }
    },
    increaseMonth() {
      this.calendarDates.month += 1;
      if (this.calendarDates.month > 11) {
        this.calendarDates.year += 1;
        this.calendarDates.month = 0;
      }
      this.selectedDate = null;
      this.datesDays = [];
      this.initCalendar();
    },
    decreaseMonth() {
      this.calendarDates.month -= 1;
      if (this.calendarDates.month < 0) {
        this.calendarDates.year -= 1;
        this.calendarDates.month = 11;
      }
      this.selectedDate = null;
      this.datesDays = [];
      this.initCalendar();
    },
    setSelectDate(date) {
      if (this.validateSelectDate(date)) {
        this.selectedDate = new Date(
          this.calendarDates.year,
          this.calendarDates.month,
          date.day
        );
        this.$emit("dateSelected", this.selectedDate);
      }
    },
    validateSelectDate(date) {
      if (!date.currentMonth) return;
      if (this.calendarDates.year < this.date.getFullYear()) return;
      if (this.calendarDates.year > this.date.getFullYear()) return true;
      if (this.calendarDates.month > this.date.getMonth()) return true;
      if (date.day > this.date.getDate()) return true;
      return;
    },
    clearSelectedDate() {
      this.selectedDate = null;
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
  height: 70px;
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
  height: 50px;
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
  padding: 3px;
  .inner-date-day {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    color: #b6b3b3;
    &.day-of-month {
      color: #a0a0a0;
      background: #f4f6ff;
    }
    &.available {
      background: #e5e8ff;
      color: #151515;
    }
    &.selected {
      background-color: #195de4;
      color: white;
    }
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
    width: 48px;
    height: 48px;
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
.tips {
  margin-top: 10px;
}
.active {
  color: red;
}
</style>
