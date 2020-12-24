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
            평수변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <!-- wheel picker section | 휠 선택기 섹션-->
        <q-card-section
          class="flex-grow full-height full-width q-pa-none row justify-center items-center"
          style="padding-bottom: 170px;"
        >
          <div class="row justify-center items-center">
            <div class="" style=" width: 80px">
              <custom-wheel-picker
                v-model="selectedFirstDigit"
                :options="numbers"
              ></custom-wheel-picker>
            </div>
            <div class="" style=" width: 80px">
              <custom-wheel-picker
                v-model="selectedSecondDigit"
                :options="numbers"
              ></custom-wheel-picker>
            </div>
            <div class="" style=" width: 80px">
              <custom-wheel-picker
                v-model="selectedThirdDigit"
                :options="numbers"
              ></custom-wheel-picker>
            </div>
            <div class="layer">
              층
            </div>
          </div>
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
import CustomWheelPicker from "components/Utility/CustomWheelPicker/Index";
export default {
  components: {
    "custom-wheel-picker": CustomWheelPicker,
  },
  data() {
    return {
      dialog: false,
      tab: "recent_place",
      changeEnable: true,
      selectedFirstDigit: "1",
      selectedSecondDigit: "2",
      selectedThirdDigit: "5",
      numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    };
  },
  methods: {},
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
  height: 558px;
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
.layer {
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.9px;
  color: #15161a;
}
</style>
