<template>
  <div class="column bg-white">
    <list-radio-button
      :list-waste-type="wasteTypeOption"
      @change="_ => selectedWaste = _"
      :value="selectedWaste"
    />
    <q-separator class="q-mt-xl q-mb-xl" color="black" />
    <p class="space-title">
      {{ selectedWaste == 'residential' ? '주거' : '상업' }}공간 타입
      <span>
        을 골라주세요.
      </span>
    </p>
    <items-to-dispose
      @next="(val) => $emit('next', val)" 
      :options="getSpaceTypeOption"
    />
  </div>
</template>

<script>
import { SelectedItemToDisPosed } from 'src/components/RequestEstimate/Common'
import ListRadioBtn from 'src/components/Utility/ListRadioBtn'

export default {
  components: {
    'items-to-dispose': SelectedItemToDisPosed,
    'list-radio-button': ListRadioBtn
  },
  data () {
    return {
      selectedWaste: null
    }
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/three/interior',
        prevPathRoute: '/request/demolition/one'
      }
    },
    wasteTypeOption () {
      return [
        {
          icon1: 'demolition_icon/selected_item/Home.svg',
          label: '내부 철거',
          val: 'residential'
        },
        {
          icon1: 'demolition_icon/selected_item/Store.svg',
          label: '사업장 폐기물',
          val: 'commercials'
        }
      ]
    },
    getSpaceTypeOption () {
      return this.selectedWaste === 'residential'
        ? this.residentialSpaceOption
        : this.commercialSpaceOption
    },
    commercialSpaceOption () {
      return [
        '카페/식당',
        '상가/매장',
        '숙박/병원',
        '학원/교육',
        '사무실'
      ]
    },
    residentialSpaceOption () {
      return [
        '아파트',
        '오피스텔',
        '단독주택',
        '빌라',
        '기타'
      ]
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
};
</script>

<style lang="scss" scoped>
.space-title {
  font-family: 'notosanskr-regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #15161A;

  span {
    color: #959595;
  }
}
</style>
