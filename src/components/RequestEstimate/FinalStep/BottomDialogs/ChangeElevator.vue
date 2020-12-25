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
          <div class="toolbar-title q-pl-md notosanskr-medium">
            엘레베이터 변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <!-- content section | 콘텐츠 섹션 -->
        <q-card-section
          class="flex-grow full-height full-width q-pa-none q-pt-md"
          style="padding-bottom: 170px;"
        >
          <div style="width: 343px">
            <p class="heading-title bg-white q-ma-none q-px-md block">
              엘레베이터 유무
              <span class="heading-subtitle">에 대해서 알려주세요.</span>
            </p>
          </div>
          <div v-for="(option, i) in elevatorOptions" :key="i">
            <q-btn
              flat
              class="options-text full-width"
              style="height: 64px;"
              @click="selectedOption = option"
            >
              <div class="full-width text-left">
                <q-icon
                  style="margin-right: 20px"
                  v-if="selectedOption == option"
                >
                  <img
                    src="~assets/request_estimate-icon/radio-btn-selected.png"
                  />
                </q-icon>
                <q-icon style="margin-right: 20px" v-else>
                  <img
                    src="~assets/request_estimate-icon/radio-btn-unselected.png"
                  />
                </q-icon>
                {{ option }}
              </div>
            </q-btn>
            <q-separator inset="" v-if="i == 0"></q-separator>
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
export default {
  components: {},
  data() {
    return {
      dialog: false,
      changeEnable: true,

      elevatorOptions: ["있음", "없음"],
      selectedOption: "있음",
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
.toolbar-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 24px;
}
.heading-subtitle {
  color: #959595;
}
.change-btn {
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.9px;
}
</style>
