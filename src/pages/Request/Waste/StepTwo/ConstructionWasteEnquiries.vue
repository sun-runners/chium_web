<template>
  <div class="q-pl-md">
    <p class="heading-title">
      건설 폐기 품목<span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="row">
      <!-- check sections starts here -->
      <q-btn
        flat
        v-for="(item, i) in scrapItems"
        :key="i"
        @click="checkItem(item)"
        class="full-width"
      >
        <div class="search-item notosanskr-medium row items-center full-width">
          <q-icon class="text-dark q-mr-md" size="24px">
            <img
              src="~assets/circle_check_blue.svg"
              v-if="selectedItem.includes(item)"
            />
            <img src="~assets/circle_check_grey.svg" v-else />
          </q-icon>
          <div class="item-text">
            {{ item }}
          </div>
        </div>
        <q-separator />
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      scrapItems: [
        "콘크리트",
        "아스팔트 콘크리트",
        "벽돌",
        "기와",
        "목재",
        "합성수지",
        "섬유",
        "벽지",
        "건설오니",
        "금속류",
        "유리",
        "타일 및 도자기",
        "보드류",
        "판넬",
        "건설토석",
        "혼합 건설 폐기물",
        "기타 폐기물",
      ],
      selectedItem: [],
    };
  },
  props: {
    dialog: Boolean,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 2,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/three/construction",
        prevPathRoute: "/request/waste",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
  methods: {
    checkItem(item) {
      if (!this.selectedItem.includes(item)) {
        this.selectedItem.push(item);
      } else {
        this.selectedItem = this.selectedItem.filter((i) => i != item);
      }
      if (this.selectedItem.length) {
        this.$emit("setEnquiryData", {items:this.selectedItem.join()});
        this.$emit("next", true);
      }
    }
    //
    // patchData: function (){
    //   const { data } = this.$axios.patch('buildingenquiries/');
    //   console.log(1234)
    // }
  },
  watch: {
    selectedItem(newVal) {
      newVal.length > 0 ? this.$emit("next", true) : this.$emit("next", false);
    },
  }
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  font-family: "notosanskr-regular";
}
.heading-subtitle {
  color: #959595;
}
.search-item {
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 147% */
  display: flex;
  align-items: center;
  letter-spacing: -0.75px;
  color: #151515;
  padding: 10px 0px;
}
</style>
