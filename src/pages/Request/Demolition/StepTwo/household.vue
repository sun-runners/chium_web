<template>
  <div class="">
    <list-radio-button />
    <items-to-dispose @next="(val) => $emit('next', val)" />
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
  computed: {
    layoutState () {
      return {
        totalSteps: 4,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/three/household',
        prevPathRoute: '/request/demolition'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
};
</script>

<style lang="scss" scoped></style>
