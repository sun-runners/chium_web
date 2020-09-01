<template>
  <div style="background: #F2F2F2; min-height: 100vh;">
    <div class="top-tab-container row">
      <q-card class="my-card q-pa-sm full-width" flat>
        <q-separator inset />
        <div class="row justify-around">
          <q-card-section>
            <div class="full-width text-center text-secondary" style="font-size:12px">전체</div>
            <div class="full-width text-center text-secondary" style="font-size: 24px">7</div>
          </q-card-section>
          <q-separator vertical inset />
          <q-card-section>
            <div class="full-width text-center" style="font-size:12px">견적신청</div>
            <div class="full-width text-center" style="font-size: 24px">2</div>
          </q-card-section>
          <q-separator vertical inset />
          <q-card-section>
            <div class="full-width text-center" style="font-size:12px">철거예정</div>
            <div class="full-width text-center" style="font-size: 24px">1</div>
          </q-card-section>
          <q-separator vertical inset />
          <q-card-section>
            <div class="full-width text-center" style="font-size:12px">철거완료</div>
            <div class="full-width text-center" style="font-size: 24px">4</div>
          </q-card-section>
        </div>
      </q-card>
    </div>
    <div class="reservations-container">
      <div class="q-my-sm" flat v-for="(item, index) in items" :key="index">
        <reservation-item :item="item"></reservation-item>
      </div>
    </div>
  </div>
</template>

<script>
import ReservationItem from "src/components/Reservation/ReservationItem";
export default {
  name: "Reservation",
  components: {
    "reservation-item": ReservationItem,
  },
  created () {
    this.$emit('changeHeadingName', '어게인업');
  },
  data() {
    return {
      search: "",
      items: [
        {
          status: "견적신청",
          date: "2020.07.01",
          name: "전국불도저",
          address: "경기도 화성시 괘랑4길 16-38번지 솔가타...",
          options: ["주거공간", "30평", "전체철거"],
          costs: "",
        },
        {
          status: "견적상담",
          date: "2020.06.29",
          name: "원철거",
          address: "경기도 군포시 금정동 903-6 선일빌라 101호",
          options: ["주거공간", "40평", "부분철거"],
          costs: "1,008,000",
        },
        {
          status: "철거완료",
          date: "2020.06.29",
          name: "원철거",
          address: "경기도 화성시 괘랑4길 16-38번지 솔가...",
          options: ["주거공간", "30평", "전체철거"],
          costs: "3,324,000",
        },
        {
          status: "철거완료",
          date: "2020.06.29",
          name: "원철거",
          address: "경기도 군포시 금정동 903-6 선일빌라 101호",
          options: ["주거공간", "40평", "부분철거"],
          costs: "1,008,000",
        },
      ],
    };
  },
};
</script>

<style scoped>
div {
  color: #151515;
}
</style>