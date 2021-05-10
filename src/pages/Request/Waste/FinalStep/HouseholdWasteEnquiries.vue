<template>
  <div class="">
    <head-section :schedule="schedule" />
    <!-- 의뢰 장소 -->
    <request-place
      :placeOfDischarge="placeOfDischarge"
      :type="type"
      :elevator="elevator"
      hiddenFloor
      hiddenAcreage
    />
    <!-- 의뢰자 -->
    <requester :contact="contact" />
    <!-- 의뢰 내용 -->
    <request-details
      :work="work"
      :discardedGoods="discardedGoods"
      :scheduleDate="scheduleDate"
      :scheduleTime="scheduleTime"
      :company="company"
    />
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
    return {
      // head
      schedule: `${this.$store.state.category.enquiry.work_date} ${this.$store.state.category.enquiry.work_time} 작업 예정`,
      // request place
      placeOfDischarge:
          this.$store.state.category.enquiry.address + (this.$store.state.category.enquiry.description ? ` ${this.$store.state.category.enquiry.description}` : ''),
      elevator: this.$store.state.category.enquiry.is_elevator,
      // requester
      contact: {
        text: this.$store.state.user.data.name,
        phone: this.$store.state.user.data.phone
      },
      // Request Details
      work: '가정집 폐기물',
      discardedGoods: this.$store.state.category.enquiry.items.split(','),
      scheduleDate: this.$store.state.category.enquiry.work_date,
      scheduleTime: this.$store.state.category.enquiry.work_time,
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
        prevPathRoute: '/request/waste/five/household'
      }
    }
  },
  mounted () {
    console.log(this.$store.state.category)
    this.$emit('setStateLayout', this.layoutState)
    setTimeout(() => {
      this.$emit('next', true)
    }, 1000)
  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
