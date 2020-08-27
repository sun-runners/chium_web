<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-due-date q-pa-none">
        <span>작업 예정일</span>
        을 선택해주세요.
      </div>
      <q-card class="my-card" :bordered="false">
        <q-card-section style="margin-top: 50px;" class="q-pa-none">
          <custom-calendar :date="new Date()" @dateSelected="(e)=> this.dateSelected = e"></custom-calendar>
        </q-card-section>
      </q-card>
    </div>
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
  methods: {},
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
</style>