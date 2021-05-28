<template>
  <div class="bg-white">
    <type-of-structure @setStructureType="selectedStructureType($event)" />
  </div>
</template>

<script>
import { TypeOfStructure } from 'components/RequestEstimate/Common'
export default {
  components: {
    TypeOfStructure
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
        nextPathRoute: '/request/demolition/three/structure',
        prevPathRoute: '/request/demolition'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    selectedStructureType (e) {
      console.log(e)
      this.$emit('next', true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
