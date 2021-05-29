<template>
  <div>
    <change-schedule-work-time
      @next="setTime"
      @close="navigateBack"
      ready-on-init
    />
  </div>
</template>

<script>
import ChangeScheduleWorkTime from 'components/RequestEstimate/FinalStep/BottomDialogs/ChangeScheduleWorkTime'
export default {
  components: {
    'change-schedule-work-time': ChangeScheduleWorkTime
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 9,
        activeStep: 7,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/final/interior',
        prevPathRoute: '/request/demolition/six/interior'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setTime (val) {
      this.$emit('nextForced')
    },
    navigateBack () {
      this.$emit('prevForced')
    }
  }
}
</script>

<style lang="scss" scoped></style>
