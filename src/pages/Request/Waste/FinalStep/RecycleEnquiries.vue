<template>
  <div class="">
    <head-section :schedule="schedule" />
    <request-place
      :placeOfDischarge="placeOfDischarge"
      :type="type"
      hiddenFloor
      hiddenAcreage
    />
    <!-- 의뢰자 -->
    <requester :contact="contact" />
    <previsit-on-site :preVisitOnSite="previsit" />
  </div>
</template>

<script>
import {
  HeadSection,
  RequestPlace,
  Requester,
  PrevisitOnSite
} from 'components/RequestEstimate/FinalStep'
export default {
  components: {
    'head-section': HeadSection,
    'request-place': RequestPlace,
    requester: Requester,
    'previsit-on-site': PrevisitOnSite
  },
  data () {
    console.log(this.setPrevisit)
    return {
      // head
      schedule: '매월 ' + this.$store.state.category.enquiry.regular_date,
      // request place
      placeOfDischarge:
        this.$store.state.category.enquiry.address + (this.$store.state.category.enquiry.description ? ` ${this.$store.state.category.enquiry.description}` : ''),
      // requester
      contact: {
        text: this.$store.state.user.data.name,
        phone: this.$store.state.user.data.phone
      }
    }
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 6,
        activeStep: 6,
        btnLabel: '견적신청완료',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/home',
        prevPathRoute: '/request/waste/five/recycle'
      }
    },
    previsit () {
      if (this.$store.state && this.$store.state.category && this.$store.state.category.enquiry && this.$store.state.category.enquiry.previsit_at && this.$store.state.category.enquiry.previsit_time) {
        return '현장 사전방문 날짜 : ' + this.$store.state.category.enquiry.previsit_at + ' ' + this.$store.state.category.enquiry.previsit_time
      } else {
        return '사전방문 안함'
      }
    }
  },
  mounted () {
    console.log(this.$store)
    this.$emit('setStateLayout', this.layoutState)
    setTimeout(() => {
      this.$emit('next', true)
    }, 1000)
  },
  watch: {}
}
</script>

<style lang="scss" scoped></style>
