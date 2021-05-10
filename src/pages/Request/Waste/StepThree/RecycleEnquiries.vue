<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md q-pt-sm">
      <p class="heading-title">
        재활용 배출 장소<span class="heading-subtitle">를 알려주세요.</span>
      </p>
      <!-- address section -->
      <div class="address-section notosanskr-regular">
        <div class="address-text q-pb-sm notosanskr-medium">주소</div>
        <div class="row q-col-gutter-sm">
          <div class="col-8">
            <input
              type="text"
              v-model="field1"
              class="address-field full-width q-pa-sm"
            />
          </div>
          <div class="col-4">
            <q-btn flat class="find-postal-btn full-width" @click="goAddress">
              우편번호 찾기
            </q-btn>
          </div>
          <div class="col-12">
            <input
              type="text"
              v-model="field2"
              class="address-field full-width q-pa-sm"
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              v-model="field3"
              class="address-field full-width q-pa-sm bg-white"
              placeholder="나머지 상세주소를 입력하세요."
            />
          </div>
        </div>
      </div>
      <!-- other description -->
      <div class="other-desc notosanskr-medium q-pb-sm">
        장소 기타설명 <span>(선택사항)</span>
      </div>
      <textarea
        name="description"
        v-model="description"
        class="other-desc-textarea q-pa-none q-ma-none"
        id=""
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      field1: null,
      field2: null,
      field3: null,
      description: null,
      layoutState:{
        totalSteps: 6,
        activeStep: 3,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/four/recycle',
        prevPathRoute: '/request/waste/two/recycle'
      }
    }
  },
  computed: {
    // layoutState () {
    //   return {
    //     totalSteps: 6,
    //     activeStep: 3,
    //     btnLabel: '다음',
    //     isBtnReady: false,
    //     isBtnHidden: false,
    //     requestComplete: false,
    //     nextPathRoute: '/request/waste/four/recycle',
    //     prevPathRoute: '/request/waste/two/recycle'
    //   }
    // }
  },
  mounted () {
    const data = this.$store.state.category.enquiry.address
    const addressArr = data.split(' ')
    if (addressArr.length < 2) {
      this.field1 = addressArr[0]
      this.field2 = addressArr[1]
    } else {
      this.field1 = addressArr.slice(0, 2).join(' ')
      this.field2 = addressArr.slice(2).join(' ')
    }
    if (this.field1 && this.field2) {
      this.layoutState.isBtnReady = true
    }
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    toggleBtn () {
      console.log(this.field1, this.field2, this.field3, this.description)
      this.$emit('setEnquiryData',
        { address: this.field2 + ' ' + this.field3, description: this.description })
      this.$emit('next', true)
    },
    goAddress () {
      this.$router.push({ name: 'request_address', query: { back: '/request/waste/three/recycle' } })
    }
  }
}
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  font-family: "notosanskr-regular";
}
.heading-subtitle {
  color: #959595;
}
.address-section {
  margin-top: 36px;
  .address-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
  .address-field {
    background: #f7f7f6;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;
  }
  .find-postal-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #195de4;
    height: 60px;
    border: 1px solid #195de4;
    box-sizing: border-box;
    border-radius: 8px;
    background: white;
  }
}
.other-desc {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.7px;
  padding-top: 36px;
  span {
    color: #959595;
  }
}
.other-desc-textarea {
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 108px;
  resize: none;
}
</style>
