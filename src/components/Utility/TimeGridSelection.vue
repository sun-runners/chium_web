<template>
  <div class="q-pa-md notosanskr-medium" style="margin-top: 12px">
    <div class="q-pt-lg  q-pb-sm">시간 선택</div>
    <div class="time-selection  row">
      <div
        v-for="(schedule, i) of schedules"
        :key="i"
        class="time col-3 text-center"
        :class="{
          invalid: !schedule.available,
          selected: schedule.time == selected
        }"
        @click="setSelectedTime(schedule.time)"
        
      >
        {{ schedule.time }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '',
      schedules: [
        { available: true, time: '05:00' },
        { available: true, time: '06:00' },
        { available: true, time: '07:00' },
        { available: true, time: '08:00' },
        { available: true, time: '09:00' },
        { available: true, time: '10:00' },
        { available: true, time: '11:00' },
        { available: true, time: '12:00' },
        { available: true, time: '13:00' },
        { available: true, time: '14:00' },
        { available: true, time: '15:00' },
        { available: true, time: '16:00' },
        { available: true, time: '17:00' },
        { available: true, time: '18:00' },
        { available: true, time: '19:00' },
        { available: true, time: '20:00' },
        { available: true, time: '21:00' },
        { available: true, time: '22:00' },
        { available: true, time: '23:00' },
        { available: true, time: '24:00' }
      ]
    }
  },
  methods: {
    setSelectedTime (time) {
      const foundSchedule = this.schedules.find(item => item.time == time)
      if (foundSchedule.available) {
        this.selected = time
        this.$emit('setTime', this.selected)
      }
    },
    clearSelectedTime () {
      this.selected = null
      this.$emit('setTime', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.time-selection {
  border: 1px solid rgba(128, 128, 128, 0.212);
  border-radius: 16px;
  :nth-child(1) {
    border-top-left-radius: 16px;
  }
  :nth-child(4) {
    border-top-right-radius: 16px;
  }
  :nth-child(17) {
    border-bottom-left-radius: 16px;
  }
  :nth-child(20) {
    border-bottom-right-radius: 16px;
  }
}
.time {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  letter-spacing: -0.35px;
  color: #15161a;
  border: 1px solid rgba(128, 128, 128, 0.103);
  border-radius: 0px;
  padding: 13px 0;
  cursor: pointer;
  &.invalid {
    color: #a0a0a0;
    text-decoration: line-through;
  }
  &.selected {
    color: #195de4;
    border: 1px solid #195de4;
  }
}
</style>
