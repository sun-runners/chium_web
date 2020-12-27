<template>
  <div>
    <q-btn
      flat
      class="change-btn notosanskr-medium"
      padding="0px"
      @click="dialog = true"
    >
      변경
    </q-btn>
    <q-dialog v-model="dialog" position="bottom">
      <q-card class="notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width"
        >
          <div class="toolbar-title q-pl-md notosanskr-medium">
            폐기 된 상품 변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <q-card-section>
          <p
            class="heading-title bg-white q-ma-none q-px-md notosanskr-regular"
          >
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
            <div
              class="q-mt-sm"
              style="background: #F3F3F3; flex-grow:1;"
              v-else
            >
              <div
                class="discarded bg-white q-px-md q-py-lg notosanskr-regular"
              >
                <div class="heading-text notosanskr-medium">폐기품목</div>
                <div class="row">
                  <div
                    class="row item q-pl-sm q-ma-xs"
                    v-for="(item, i) in discardedItems"
                    :key="i"
                  >
                    {{ item }}
                    <q-separator
                      class="q-ml-xs"
                      vertical
                      inset=""
                    ></q-separator>
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
  data () {
    return {
      dialog: false,
      changeEnable: false,
      myItem: '',
      label: '옷장2개 (품목과 수량을 적어주세요.)',
      discardedItems: []
    }
  },
  methods: {
    addToDiscarded () {
      if (this.myItem && !this.discardedItems.includes(this.myItem)) {
        this.discardedItems.push(this.myItem)
      }
      this.myItem = ''
      this.$refs.myItemField.blur()
    },
    removeFromDiscarded (item) {
      if (this.discardedItems.includes(item)) {
        this.discardedItems = this.discardedItems.filter(i => i != item)
      }
    }
  },
  watch: {
    discardedItems (newVal) {
      this.changeEnable = !!newVal.length
    }
  }
}
</script>

<style lang="scss" scoped>
.q-card {
  width: 100%;
  max-width: 1000px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100vh;
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
.change-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  margin: 0px;
  letter-spacing: -0.8px;
  padding: 0 16px;
  color: #195de4;
}
</style>
