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
        totalSteps: 7,
        activeStep: 6,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/final/structure',
        prevPathRoute: '/request/demolition/five/structure'
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
