<template>
  <div>
    <work-due-date @next="setDate" />
  </div>
</template>

<script>
import { WorkDueDate } from 'components/RequestEstimate/Common'
export default {
  components: { WorkDueDate },
  computed: {
    layoutState () {
      return {
        totalSteps: 8,
        activeStep: 6,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/seven/building',
        prevPathRoute: '/request/demolition/five/building'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setDate (val) {
      if (val === 'undecided') {
        console.log('undecided')
        this.$emit('next', val)
      } else if (val) {
        console.log(val)
        this.$emit('next', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
