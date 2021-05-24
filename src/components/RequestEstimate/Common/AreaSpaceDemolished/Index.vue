<template>
  <div class="bg-white full-height q-ma-none q-px-md notosanskr-regular">
    <section class="heading-title ">
      <div>공간 평수<span>와 </span> 층수<span>를 </span></div>
      <div><span>알려주세요.</span></div>
      <small>(평수 : 철거하실 공간면적)</small>
    </section>

    <section>
      <area-selection v-model="fieldArea" class="q-mb-md" />
      <floor-selection v-model="numberOfFloors" />
    </section>
  </div>
</template>

<script>
import AreaSelection from './AreaSelection'
import FloorSelection from './FloorSelection.vue'
export default {
  components: {
    AreaSelection,
    FloorSelection
  },
  data () {
    return {
      fieldArea: '10평 미만',
      numberOfFloors: '1층'
    }
  },
  watch: {
    fieldArea (newValue) {
      this.$emit('setAreaSpace', {
        fieldArea: newValue,
        numberOfFloors: this.numberOfFloors
      })
    },
    numberOfFloors (newValue) {
      this.$emit('setAreaSpace', {
        fieldArea: this.fieldArea,
        numberOfFloors: newValue
      })
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
  small {
    color: #959595;
  }
}
</style>
