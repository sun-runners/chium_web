<template>
  <div class="bg-white full-height q-ma-none q-px-md notosanskr-regular">
    <section class="heading-title ">
      <div>공간 평수<span>와 </span> 층수<span>를 </span></div>
      <div><span>알려주세요.</span></div>
      <small>(평수 : 철거하실 공간면적)</small>
    </section>

    <section>
      <area-selection v-model="fiedArea" />
    </section>
  </div>
</template>

<script>
import AreaSelection from './AreaSelection'
export default {
  components: {
    AreaSelection
  },
  data () {
    return {
      fiedArea: '10평 미만',
      numberOfFloors: null
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
