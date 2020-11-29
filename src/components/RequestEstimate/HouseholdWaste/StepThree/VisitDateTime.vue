<template>
  <q-card flat class="q-mt-md bg-white">
    <q-card-section class="q-pa-none  notosanskr-medium">
      <q-input
        filled
        v-model="schedule.date"
        bg-color="white"
        color="secondary"
        placeholder="방문 날짜"
        class="date-field"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon class="cursor-pointer">
            <div class="select">선택</div>
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="schedule.date" color="secondary">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-separator inset />
      <q-input
        filled
        bg-color="white"
        color="secondary"
        v-model="schedule.time"
        placeholder="시간"
        mask="time"
        :rules="['time']"
        class="time-field"
      >
        <template v-slot:append>
          <q-icon class="cursor-pointer">
            <div class="select">선택</div>
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-time
                v-model="schedule.time"
                color="secondary"
                text-color="black"
              >
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      schedule: {
        date: "",
        time: "",
      },
    };
  },
  watch: {
    schedule: {
      // eslint-disable-next-line object-shorthand
      handler: function(schedule) {
        this.$emit("schedule", schedule);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.date-field,
.time-field {
  padding-bottom: 0px;
}
.select {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  letter-spacing: -0.8px;
  color: #195de4;
}
</style>
