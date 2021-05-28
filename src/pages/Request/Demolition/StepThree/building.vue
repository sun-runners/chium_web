<template>
  <div>
    <area-space-demolished @setAreaSpace="setAreaSpace($event)" />
  </div>
</template>

<script>
import { AreaSpaceDemolished } from 'components/RequestEstimate/Common'
export default {
  components: {
    AreaSpaceDemolished
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 3,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/four/building',
        prevPathRoute: '/request/demolition/two/building'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    /**
     * @param {Object} e - accepts { fieldArea, numberOfFloors }
     */
    setAreaSpace (e) {
      console.log(e) // { fieldArea: "10평 미만", numberOfFloors: "02" }
    }
  }
}
</script>

<style lang="scss" scoped></style>
