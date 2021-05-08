<template>
  <div>
    <!-- {{ visit }} -->
    <visit-site-advance @input="setPrevisitdate" />
  </div>
</template>

<script>
import { VisitSiteAdvance } from 'src/components/RequestEstimate/Common'
export default {
  components: {
    'visit-site-advance': VisitSiteAdvance
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 6,
        activeStep: 5,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/final/recycle',
        prevPathRoute: '/request/waste/four/recycle'
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
  },
  methods:{
    setPrevisitdate (val) {
      this.$emit('setEnquiryData', { previsit_at: val.date, previsit_time: val.time })
      console.log(val) //  val = { day, week}
      this.setReady(val)
      this.$emit('next', true)
    },
    setReady (val){
      if (val.date && val.time){
        this.isBtnReady = true
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
