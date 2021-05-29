<template>
  <div class="">
    <head-section />
    <request-place />
    <requester />
    <request-details />
  </div>
</template>

<script>
import {
  HeadSection,
  RequestPlace,
  Requester,
  RequestDetails
} from 'components/RequestEstimate/FinalStep'
export default {
  components: {
    'head-section': HeadSection,
    'request-place': RequestPlace,
    requester: Requester,
    'request-details': RequestDetails
  },
  data () {
    return {}
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 9,
        activeStep: 9,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/home',
        prevPathRoute: '/request/demolition/eight/asbestos'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
    setTimeout(() => {
      this.$emit('next', true)
    }, 1000)
  }
}
</script>

<style lang="scss" scoped></style>
