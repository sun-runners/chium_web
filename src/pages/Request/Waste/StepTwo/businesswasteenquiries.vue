<template>
  <div class="">
    <items-to-dispose @next="setItems" />
  </div>
</template>

<script>
import { ItemsToDispose } from 'src/components/RequestEstimate/Common'
export default {
  components: {
    'items-to-dispose': ItemsToDispose
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 5,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/three/business',
        prevPathRoute: '/request/waste'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
    // this.$store.commit('patchEnquiry', )
  },
  methods:{
    setItems (val){
      if(val!==true) {
        console.log(val)
        this.$emit('setEnquiryData', {items: val})
        this.$emit('next', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
