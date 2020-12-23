<template>
  <div>
    <q-btn
      flat
      class="edit-btn notosanskr-medium"
      padding="0px"
      @click="dialog = true"
    >
      변경
    </q-btn>
    <q-dialog v-model="dialog" position="bottom">
      <q-card class="row notosanskr-regular overflow-hidden">
        <!-- card header section | 카드 헤더 섹션 -->
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width"
        >
          <div class="heading-title q-pl-md notosanskr-medium">
            의뢰장소 변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <!-- wheel picker section | 휠 선택기 섹션-->
        <q-card-section
          class="flex-grow full-height full-width q-pa-none"
          style="padding-bottom: 170px;"
        >
          <h5>Hello</h5>
        </q-card-section>

        <!-- Footer section | 바닥 글 버튼 섹션  -->
        <q-card-section class="q-pa-xs q-px-md absolute-bottom">
          <q-btn
            style="height: 60px;"
            :color="changeEnable ? 'secondary' : 'grey'"
            class="change-btn full-width notosanskr-medium "
            unelevated
            text-color="white"
            label="변경하기"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialog: false,
      tab: "recent_place",
      changeEnable: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.edit-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  margin: 0px;
  letter-spacing: -0.8px;
  padding: 0 16px;
  color: #195de4;
}
.q-card {
  width: 100%;
  max-width: 1000px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100vh;
}
.heading-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.change-btn {
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.9px;
}
</style>
