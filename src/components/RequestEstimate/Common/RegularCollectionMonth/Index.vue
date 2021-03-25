<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      매월 정기 수거할 날
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="row full-height q-px-md">
      <!-- What week of month |  매월 몇번째 주  -->
      <section class="col-6 q-pr-lg">
        <div class="item-header notosanskr-regular">
          매월 몇번째 주
        </div>

        <q-btn
          class="item-value full-width notosanskr-regular"
          align="between"
          flat
          padding="2px"
          @click="weekDialog = !weekDialog"
        >
          첫번째
          <q-icon name="keyboard_arrow_down" size="24px" />
        </q-btn>

        <q-separator class="q-mt-sm" style="background: #5A5A5A;" size="2px" />
      </section>

      <!-- Collection Day | 수거요일 -->
      <section class="col-6">
        <div class="item-header notosanskr-regular">
          수거요일
        </div>

        <q-btn
          class="item-value full-width notosanskr-regular"
          align="between"
          flat
          padding="2px"
        >
          월요일
          <q-icon name="keyboard_arrow_down" size="24px" />
        </q-btn>

        <q-separator class="q-mt-sm" style="background: #5A5A5A;" size="2px" />
      </section>
    </div>
    <!---------------------------------- BOTTOM DIALOGS ----------------------------->
    <q-dialog v-model="weekDialog" position="bottom">
      <q-card class="row overflow-hidden notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width bg-white"
        >
          <div class="toolbar-title q-pl-md notosanskr-medium">
            몇째 주
          </div>
          <q-btn
            color="white"
            flat
            text-color="black"
            @click="weekDialog = false"
          >
            <q-icon name="close" />
          </q-btn>
        </q-card-section>
        <q-separator color="grey-12" />

        <q-card-section
          class="flex-grow full-height bg-white full-width q-pa-none row justify-center items-center"
          style="padding-bottom: 170px;"
        >
          <div class="row justify-center items-center">
            <div class="" style=" width: 250px">
              <custom-wheel-picker
                v-model="selectedWeek"
                :options="week"
              ></custom-wheel-picker>
            </div>

            <div class="layer">
              주
            </div>
          </div>
        </q-card-section>

        <!-- Footer section | 바닥 글 버튼 섹션  -->
        <q-card-section class="absolute-bottom q-px-none">
          <q-btn
            style="height: 60px;"
            :color="selectedWeek != null ? 'secondary' : 'grey'"
            :disable="selectedWeek == null"
            class="change-btn full-width notosanskr-medium "
            unelevated
            text-color="white"
            label="완료"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import CustomWheelPicker from "components/Utility/CustomWheelPicker/Index";
export default {
  components: {
    CustomWheelPicker,
  },
  data() {
    return {
      week: ["네번째", "첫번째", "두번째"],
      selectedWeek: "첫번째",
      weekDialog: true,
    };
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
.item-header {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.7px;
  color: #5a5a5a;
  padding-bottom: 4px;
  border-bottom: 2px solid #f0f0f0;
}
.item-value {
  font-weight: 500;
  font-size: 22px;
  line-height: 40px;
  letter-spacing: -1.1px;
  color: #15161a;
}
/** ------------- DIALOG ---------------- */
.q-card {
  width: 100%;
  max-width: 1000px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 60vh;

  background: #f3f3f3;
}
.toolbar-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
</style>
