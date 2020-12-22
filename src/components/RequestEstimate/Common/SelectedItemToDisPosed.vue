<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      상업공간 타입
      <span class="heading-subtitle">을 골라주세요.</span>
    </p>
    <div class="row q-col-gutter-md q-pa-md">
      <div v-for="(list, key) in options" :key="key" class="col-6">
        <q-btn class="full-width selected-btn items-center justify-center" flat>
          {{ list }}
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      myItem: '',
      label: '',
      discardedItems: [],
      options: [
        '카페/식당',
        '상가/매장',
        '숙박/병원',
        '학원/교육',
        '사무실'
      ]
    }
  },

  methods: {
    addToDiscarded () {
      if (this.myItem && !this.discardedItems.includes(this.myItem)) {
        this.discardedItems.push(this.myItem);
      }
      this.myItem = "";
      this.$refs.myItemField.blur();
    },
    removeFromDiscarded (item) {
      if (this.discardedItems.includes(item)) {
        this.discardedItems = this.discardedItems.filter((i) => i != item);
      }
    },
  },
  watch: {
    discardedItems (newVal) {
      this.$emit("next", true);
      if (!newVal.length) {
        this.$emit("next", false);
      }
    },
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
.selected-btn {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 1000px;
  height: 48px;
  font-size: 15px;
  line-height: 48px;
}
</style>
