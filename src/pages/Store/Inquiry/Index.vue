<template>
  <div style="background: #F2F2F2; height: 100vh;" class="q-pa-md notosanskr-regular">
    <q-btn
      outline
      class="inquire-btn bg-white full-width notosanskr-medium"
      style="color:black;"
    >업체 문의하기</q-btn>

    <q-card flat bordered class="q-mt-lg my-card">
      <q-card-section>
        <div>
          <span class="text-bold">{{ inquiries.length }}</span>건 문의
        </div>
      </q-card-section>

      <div v-for="(inquiry, index) in inquiries" :key="index">
        <q-separator inset />
        <q-card-section style="font-size: 13px;">
          <p>{{ inquiry.message }}</p>
          <div class="text-grey-14">{{ inquiry.name }}</div>
          <div class="row justify-between">
            <div class="text-grey-14">{{ inquiry.date }}</div>
            <div>
              <q-icon name="o_lock" size="16px" class="q-mr-sm" v-if="inquiry.lock" />
              <q-btn
                outline
                class="status-btn"
                padding="0"
                :class="{'complete': inquiry.status == '답변완료'}"
                :label="inquiry.status"
              />
            </div>
          </div>
        </q-card-section>
      </div>
      <!-- if there is no inquiries show this -->
      <q-card-section class="my-card q-mt-none q-pt-none" v-if="!inquiries.length">문의내역이 없습니다.</q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inquiries: [
        {
          message: "24평 네일숍 매장 철거 비용과 걸리는 시간 알 수 있을까요?",
          name: "김영희",
          date: "2020.05.20",
          status: "미답변",
          lock: true,
        },
        {
          message: "24평 네일숍 매장 철거 비용과 걸리는 시간 알 수 있을까요?",
          name: "이*용",
          date: "2020.05.20",
          status: "답변완료",
          lock: true,
        },
        {
          message: "야간작업도 가능한가요??",
          name: "이영돈",
          date: "2020.05.20",
          status: "답변완료",
          lock: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.inquire-btn {
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.7px;
  color: #15161a;
}
.status-btn {
  padding: 0px;
  margin: 0px;
  width: 60px;
  height: 24px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.9px;
  color: #ffffff;
  color: #195de4;
  &.complete {
    background: #195de4 !important;
    color: #ffffff;
    background: #195de4;
    border-radius: 4px;
  }
}
</style>
