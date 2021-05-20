<template>
  <div class="column bg-white">
    <list-radio
      :list-waste-type="spaceTypeOption"
      @change="(e) => (selectedSpace = e)"
      :value="selectedSpace"
    />
    <q-separator class="q-mt-xl" color="black" />
    <q-card class="my-card" flat>
      <q-card-section>
        <p class="space-title">
          {{ selectedSpace == "residential" ? "주거" : "상업" }}공간 타입
          <span>
            을 골라주세요.
          </span>
        </p>
        <div class="row">
          <div
            class="col-6 q-pa-sm"
            v-for="(item, i) of spaceTypeSubItems"
            :key="i"
          >
            <q-btn
              unelevated
              color="white"
              class="sub-items full-width notosanskr-regular"
              text-color="black"
              :label="item"
              @click="selectedSpaceType(item)"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import ListRadioBtn from "src/components/Utility/ListRadioBtn";

export default {
  components: {
    "list-radio": ListRadioBtn,
  },
  data() {
    return {
      selectedSpace: "residential",
      items: [],
    };
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 8,
        activeStep: 2,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/demolition/three/interior",
        prevPathRoute: "/request/demolition",
      };
    },
    spaceTypeOption() {
      return [
        {
          icon1: "demolition_icon/selected_item/Home.svg",
          label: "내부 철거",
          val: "residential",
        },
        {
          icon1: "demolition_icon/selected_item/Store.svg",
          label: "사업장 폐기물",
          val: "commercials",
        },
      ];
    },
    spaceTypeSubItems() {
      return this.selectedSpace === "residential"
        ? this.residentialSpaceOption
        : this.commercialSpaceOption;
    },
    commercialSpaceOption() {
      return ["카페/식당", "상가/매장", "숙박/병원", "학원/교육", "사무실"];
    },
    residentialSpaceOption() {
      return ["아파트", "오피스텔", "단독주택", "빌라", "기타"];
    },
  },
  methods: {
    selectedSpaceType(item) {
      this.$emit("setSpaceType", [this.selectedSpace, item]);
      // [ "residential", "빌라" ]
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style lang="scss" scoped>
.space-title {
  font-family: "notosanskr-regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #15161a;

  span {
    color: #959595;
  }
}
.sub-items {
  border: #15161a solid 1px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 1000px;

  font-size: 15px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.75px;
}
</style>
