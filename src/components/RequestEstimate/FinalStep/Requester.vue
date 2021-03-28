<template>
  <q-card flat class="bg-transparent">
    <q-card-section class="bg-white q-pa-none">
      <div class="section-title notosanskr-medium">의뢰자</div>
    </q-card-section>
    <q-card-section
      class="q-pa-none notosanskr-regular"
      style="margin: 12px 16px"
    >
      <div class="q-pa-md bg-white border-rad">
        <div class="heading-text notosanskr-medium">연락처</div>
        <div class="q-pt-sm">
          <div class="text">{{ contact.text }}</div>
          <div class="phone">{{ contact.phone }}</div>
        </div>
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
  props: {
    contact: {
      type: Object,
      default: () => ({
        text: "",
        phone: "",
      }),
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
.phone {
  font-size: 15px;
  line-height: 22px;
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
.border-rad {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>
