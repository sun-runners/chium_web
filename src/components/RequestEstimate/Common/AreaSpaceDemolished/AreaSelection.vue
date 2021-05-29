<template>
  <div>
    <q-input
      outlined
      class="field"
      placeholder="Select Area"
      label-color="grey-13"
      v-model="selectedArea"
    >
      <template v-slot:append>
        <q-btn
          flat
          @click="dialog = !dialog"
          class="attachment notosanskr-medium"
        >
          <span>변경</span>
        </q-btn>
      </template>
    </q-input>

    <q-dialog v-model="dialog" position="bottom">
      <q-card class="row overflow-hidden notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width bg-white"
        >
          <div class="toolbar-title q-pl-md notosanskr-medium">
            평수
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>
        <q-separator color="grey-12" />

        <q-card-section
          class="flex-grow full-height bg-white full-width q-pa-none row justify-center items-center"
          style="padding-bottom: 170px;"
        >
          <div class="row justify-center items-center" style="width:205px;">
            <div class="col">
              <custom-wheel-picker
                v-model="firstNumber"
                :options="numberSelection"
              ></custom-wheel-picker>
            </div>
            <div class="col">
              <custom-wheel-picker
                v-model="secondNumber"
                :options="numberSelection"
              ></custom-wheel-picker>
            </div>

            <div class="col">
              <custom-wheel-picker
                v-model="thirdNumber"
                :options="numberSelection"
              ></custom-wheel-picker>
            </div>
            <div class="layer">평</div>
          </div>
        </q-card-section>
        <!-- Footer section | 바닥 글 버튼 섹션  -->
        <q-card-section class="absolute-bottom q-px-md">
          <q-btn
            style="height: 60px;"
            class="change-btn full-width bg-secondary notosanskr-medium"
            unelevated
            text-color="white"
            label="선택 완료"
            @click="complete"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import CustomWheelPicker from 'components/Utility/CustomWheelPicker/Index'

export default {
  components: {
    CustomWheelPicker
  },
  data () {
    return {
      numberSelection: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      firstNumber: '1',
      secondNumber: '4',
      thirdNumber: '5',
      dialog: false,
      selectedArea: ''
    }
  },
  props: {
    value: {
      type: String,
      default: '1-4-5'
    }
  },
  mounted () {
    if (!this.value) {
      return
    }
    this.selectedArea = this.value
  },
  methods: {
    formatSelectedArea () {
      this.selectedArea = `${this.firstNumber}${this.secondNumber}${this.thirdNumber} 평`
    },
    complete () {
      this.formatSelectedArea()
      this.$emit('input', this.selectedArea)
      this.dialog = false
    }
  }
}
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
