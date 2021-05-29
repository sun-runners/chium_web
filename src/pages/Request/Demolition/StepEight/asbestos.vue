<template>
  <div>
    <!-- {{ visit }} -->
    <visit-site-advance v-model="visit" />
  </div>
</template>

<script>
import { VisitSiteAdvance } from 'components/RequestEstimate/Common'
export default {
  components: {
    'visit-site-advance': VisitSiteAdvance
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 9,
        activeStep: 8,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/final/asbestos',
        prevPathRoute: '/request/demolition/seven/asbestos'
      }
    }
  },
  data () {
    return {
      // "no" or { date: "", time: ""}
      visit: null
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  watch: {
    visit () {
      this.$emit('next', false)

      if (this.visit === 'no') {
        // if User decided not to visit
        this.$emit('next', true)
        console.log(this.visit) // no
      }
      if (typeof this.visit === 'object') {
        if (this.visit.date && this.visit.time) {
          // if User decided to visit & value is set
          this.$emit('next', true)
          console.log(this.visit.date, this.visit.time) // 2021/03/24 06:25
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
