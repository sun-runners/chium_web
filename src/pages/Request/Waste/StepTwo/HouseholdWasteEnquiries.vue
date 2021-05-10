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
        totalSteps: 7,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/three/household',
        prevPathRoute: '/request/waste'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
    this.$store.state.category.category = 'household'
    console.log(this.$store.state.category)
  },
  methods: {
    setItems (val) {
      console.log(val.length)
      if (val) {
        console.log({ items: val.join() })
        console.log(this.$store.state)
        this.$emit('setEnquiryData', { items: val.join() })
        this.$emit('next', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
