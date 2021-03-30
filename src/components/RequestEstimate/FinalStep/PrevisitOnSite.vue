<template>
  <q-card flat class="bg-transparent">
    <q-card-section class="bg-white q-pa-none">
      <div class="section-title notosanskr-medium">의뢰 내용</div>
    </q-card-section>
    <q-card-section
      class="q-pa-none notosanskr-regular"
      style="margin: 12px 16px"
    >
      <!-- work 작업 -->
      <div
        class="row justify-between q-pa-md bg-white border-top-rad"
        style="margin-bottom: 2px"
      >
        <div class="text">{{ preVisitOnSite }}</div>

        <q-btn
          flat
          class="change-btn notosanskr-medium"
          :to="{ path: '/request/waste/five/recycle' }"
          padding="0px"
        >
          변경
        </q-btn>
      </div>
    </q-card-section>
    <q-card-section
      class="bg-white q-pa-none"
      style="height: 20px;"
    ></q-card-section>
  </q-card>
</template>

<script>
export default {
  components: {},
  props: {
    preVisitOnSite: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
  padding: 12px 16px;
  border-bottom: 1px solid #000;
}
.heading-text {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.65px;
  color: #767676;
}
.text {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.75px;
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
.border-top-rad {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.border-bottom-rad {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
