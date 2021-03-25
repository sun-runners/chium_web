<template>
  <div>
    <q-btn
      class="item-value full-width notosanskr-regular"
      align="between"
      flat
      padding="2px"
      @click="dayDialog = !dayDialog"
    >
      {{ day }}
      <q-icon name="keyboard_arrow_down" size="24px" />
    </q-btn>
    <q-dialog v-model="dayDialog" position="bottom">
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
            @click="dayDialog = false"
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
                v-model="wheelSelected"
                :options="wheelSelection"
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
            :color="wheelSelected != null ? 'secondary' : 'grey'"
            :disable="wheelSelected == null"
            class="change-btn full-width notosanskr-medium"
            unelevated
            text-color="white"
            label="완료"
            @click="complete"
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
      wheelSelection: ["수요일", "화요일", "월요일"],
      wheelSelected: "",
      dayDialog: false,
      day: "화요일",
    };
  },
  mounted() {
    this.$emit("selectedValue", this.day);
    this.wheelSelected = this.day;
  },
  methods: {
    complete() {
      this.day = this.wheelSelected;
      this.$emit("selectedValue", this.day);
      this.dayDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
