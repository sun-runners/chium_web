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
      <q-card class="row overflow-hidden notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width bg-white"
        >
          <div class="toolbar-title q-pl-md notosanskr-medium">
            사전 방문시간 변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>
        <q-separator color="grey-12" />
        <q-card-section class="flex-grow full-height full-width q-pa-none">
          <div class="bg-white q-px-md">
            <div class="selected-time q-py-md">
              <p class="q-ma-none">선택한 시간</p>
              <div class="time-value notosanskr-medium">오전 08:00시</div>
            </div>
          </div>
          <!-- time selection section | 시간 선택 섹션 -->
          <time-grid-selection
            class="bg-white full-height "
          ></time-grid-selection>
        </q-card-section>

        <!-- Footer section | 바닥 글 버튼 섹션  -->
        <q-card-section class="q-pa-xs q-px-md absolute-bottom">
          <q-btn
            style="height: 60px;"
            :color="selectedDate != null ? 'secondary' : 'grey'"
            :disable="selectedDate == null"
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
import TimeGridSelection from 'src/components/Utility/TimeGridSelection'

export default {
  components: {
    'time-grid-selection': TimeGridSelection
  },
  data () {
    return {
      dialog: true,
      changeEnable: true,
      selectedDate: null
    }
  },
  methods: {
    setDateSelected (v) {
      this.selectedDate = `${v.getFullYear()}/${v.getMonth() +
        1}/${v.getDate()}`
    },
    setUndecided () {
      this.selectedDate != 'undecided'
        ? (this.selectedDate = 'undecided')
        : (this.selectedDate = null)
      this.$refs.calendar.clearSelectedDate()
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

  background: #f3f3f3;
}
.toolbar-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.spacer-separator {
  height: 12px;
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
.selected-time {
  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #959595;
  }
  .time-value {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #195de4;
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
