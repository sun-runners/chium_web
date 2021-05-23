<template>
  <div class="bg-white q-ma-none q-px-md notosanskr-regular">
    <section class="heading-title ">
      <div>공간 평수<span>와 </span> 층수<span>를 </span></div>
      <div><span>알려주세요.</span></div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dateSelected: null
    }
  },

  methods: {
    setDateSelected (v) {
      this.dateSelected = `${v.getFullYear()}-${v.getMonth() +
        1}-${v.getDate()}`
    },
    setUndecided () {
      this.dateSelected !== 'undecided'
        ? (this.dateSelected = 'undecided')
        : (this.dateSelected = null)
      this.$refs.calendar.clearSelectedDate()
    }
  },
  watch: {
    dateSelected (newVal) {
      newVal != null
        ? this.$emit('next', this.dateSelected)
        : this.$emit('next', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 36px;
  div {
    padding: 0;
    margin: 0;
    span {
      color: #959595;
    }
  }
}
</style>
