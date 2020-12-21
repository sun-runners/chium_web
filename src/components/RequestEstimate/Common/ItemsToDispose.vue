<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      폐기할 물품
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="column full-height ">
      <div class="notosanskr-regular bg-white q-px-md">
        <div class="col-12 q-pa-none" style="padding-bottom: 24px">
          <q-input
            outlined
            class="field"
            ref="myItemField"
            :label="label"
            label-color="grey-13"
            v-model="myItem"
          >
            <template v-slot:append>
              <q-btn
                flat
                class="attachment notosanskr-medium"
                @click="addToDiscarded"
              >
                등록
              </q-btn>
            </template>
          </q-input>
        </div>
      </div>

      <div
        style="flex-grow:1;"
        class="bg-white"
        v-if="!discardedItems.length"
      ></div>
      <div class="q-mt-sm" style="background: #F3F3F3; flex-grow:1;" v-else>
        <div class="discarded bg-white q-px-md q-py-lg notosanskr-regular">
          <div class="heading-text notosanskr-medium">폐기품목</div>
          <div class="row">
            <div
              class="row item q-pl-sm q-ma-xs"
              v-for="(item, i) in discardedItems"
              :key="i"
            >
              {{ item }}
              <q-separator class="q-ml-xs" vertical inset=""></q-separator>
              <q-btn
                flat
                color="grey-14"
                padding="0 6px 0px 4px"
                @click="removeFromDiscarded(item)"
              >
                <q-icon name="clear" size="16px"></q-icon>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myItem: "",
      label: "옷장2개 (품목과 수량을 적어주세요.)",
      discardedItems: [],
    };
  },

  methods: {
    addToDiscarded() {
      if (this.myItem && !this.discardedItems.includes(this.myItem)) {
        this.discardedItems.push(this.myItem);
      }
      this.myItem = "";
      this.$refs.myItemField.blur();
    },
    removeFromDiscarded(item) {
      if (this.discardedItems.includes(item)) {
        this.discardedItems = this.discardedItems.filter((i) => i != item);
      }
    },
  },
  watch: {
    discardedItems(newVal) {
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
.discarded {
  .heading-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: #15161a;
    padding-bottom: 20px;
  }
  .item {
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #15161a;

    background: #f6f6f6;
    border-radius: 8px;
  }
}
</style>
