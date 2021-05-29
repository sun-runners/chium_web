<template>
  <div class="bg-white">
    <type-of-building @setBuildingType="selectedBuildingType($event)" />
  </div>
</template>

<script>
import { TypeOfBuilding } from 'components/RequestEstimate/Common'
export default {
  components: {
    TypeOfBuilding
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 9,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/three/building',
        prevPathRoute: '/request/demolition'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    selectedBuildingType (e) {
      console.log(e)
      this.$emit('next', true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
