<template>
  <div>
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      현장 사전방문
      <span class="heading-subtitle">을 원하시나요?</span>
    </p>
    <q-card class="my-card q-ma-md" flat :bordered="false">
      <q-card-section style="height: 430px;" class="q-pa-none">
        <custom-calendar
          ref="calendar"
          :date="new Date()"
          @dateSelected="setDateSelected"
        ></custom-calendar>
      </q-card-section>
    </q-card>
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
      calendarVisible: true,
    };
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 5,
        activeStep: 3,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/four/household",
        prevPathRoute: "/request/waste/two/household",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {
    setDateSelected(v) {
      setTimeout(() => {
        this.dateSelected = `${v.getFullYear()}/${v.getMonth() +
          1}/${v.getDate()}`;
        this.calendarVisible = false;
        this.$emit("next", true);
      }, 1100);
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
</style>
