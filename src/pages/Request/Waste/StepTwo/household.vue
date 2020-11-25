<template>
  <div class="bg-white q-px-md">
    <p class="heading-title notosanskr-regular">
      폐기할 물품
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="row">
      <div class="col notosanskr-regular">
        <q-file
          outlined
          class="field"
          ref="filepicker"
          :label="label"
          v-model="myItem"
          v-show="!myItem"
        >
          <template v-slot:append>
            <div class="attachment notosanskr-medium">등록</div>
          </template>
        </q-file>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      myItem: "",
      label: "옷장2개 (품목과 수량을 적어주세요.)",
    };
  },
  computed: {},
  methods: {},
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
// input
.field {
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  .attachment {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.8px;
    color: #195de4;
  }
}
</style>
