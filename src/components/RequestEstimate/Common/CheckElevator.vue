<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      엘레베이터 유무
      <span class="heading-subtitle">에 대해서 알려주세요.</span>
    </p>
    <q-card flat>
      <q-card-section class="q-py-none">
        <div v-for="(option, i) in elevator" :key="i">
          <q-btn
            flat
            class="options-text full-width"
            style="height: 64px;"
            @click="selected = option"
          >
            <div class="full-width  notosanskr-regular text-left">
              <q-icon style="margin-right: 20px" v-if="selected == option">
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
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevator: ["있음", "없음"],
      selected: "있음",
    };
  },
  mounted() {
    this.$emit("elevatorAnswer", this.selected);
  },
  watch: {
    selected(val) {
      this.$emit("elevatorAnswer", val);
    },
  },
};
</script>

<style scoped>
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
.options-text {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
}
</style>
