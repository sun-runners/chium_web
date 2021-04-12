<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      현장 사전방문
      <span class="heading-subtitle">을 원하시나요?</span>
    </p>
    <!-- visit options answers -->
    <visit-options @visit="(v) => (visit = v)"></visit-options>
    <!-- visit time & dates -->
    <visit-date-time @schedule="setSchedule" v-show="visit"></visit-date-time>
  </div>
</template>

<script>
import VisitOptions from './VisitOptions'
import VisitDateTime from './VisitDateTime'
export default {
  components: {
    'visit-options': VisitOptions,
    'visit-date-time': VisitDateTime
  },
  data () {
    return {
      visit: false,
      schedule: {
        date: '',
        time: ''
      }
    }
  },
  prop: ['value'],
  mounted () {
    this.$emit('input', this.schedule)
  },
  methods: {
    setSchedule (v) {
      this.schedule = { ...v }
    }
  },
  watch: {
    visit: function (v) {
      this.$emit('input', 'no')
      if (v) {
        this.$emit('input', this.schedule)
      }
    },
    schedule: {
      handler (v) {
        if (this.visit) {
          this.$emit('input', this.schedule)
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 24px;
}
.heading-subtitle {
  color: #959595;
}
</style>
