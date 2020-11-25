<template>
  <div class="q-pl-md">
    <p class="heading-title">
      폐기물 유형<span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="row">
      <div class="col">
        <q-list separator="separator">
          <q-item
            class="q-pt-lg q-pb-lg q-pl-none"
            clickable="clickable"
            v-for="(list, key) in list_waste_type"
            :key="key"
            @click="setSelectedWaste(list.val); $emit('next', true);"
          >
            <q-item-section avatar="avatar">
              <q-icon>
                <img
                  :src="require(`assets/request_estimate-icon/${list.icon1}`)"
                />
              </q-icon>
            </q-item-section>
            <q-item-section
              style="font-size: 16px; font-family: notosanskr-regular"
              >{{ list.label }}</q-item-section
            >
            <q-item-section avatar="avatar">
              <q-icon>
                <img
                  :src="
                    require(`assets/request_estimate-icon/${
                      selectedWaste === list.val
                        ? 'radio-btn-selected.png'
                        : 'radio-btn-unselected.png'
                    }`)"
                />
              </q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedWaste: "",
      list_waste_type: [
        {
          icon1: "domestic-waste.svg",
          label: "가정집 폐기물",
          val: "household",
        },
        {
          icon1: "industrial-waste.svg",
          label: "사업장 폐기물",
          val: "workplace",
        },
        {
          icon1: "construction-waste.svg",
          label: "건설 폐기물",
          val: "construction",
        },
        {
          icon1: "box.svg",
          label: "재활용 정기수거",
          val: "recycling",
        },
      ],
    };
  },
  computed: {
    layoutState(){
      return {
        totalSteps: 6,
        activeStep: 1,
        btnLabel: "다음",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/two/household',
        prevPathRoute: '/home'
      }
    }
  },
  mounted(){
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setSelectedWaste(val) {
      this.selectedWaste = val;
      const layoutState = this.layoutState;
      layoutState.nextPathRoute = `/request/waste/two/${val}`;
      this.$emit('setStateLayout', layoutState);
    }
  },
};
</script>

<style scoped>
.heading-title {
  font-size: 27px;
  font-family: "notosanskr-regular";
}
.heading-subtitle {
  color: #959595;
}
</style>
