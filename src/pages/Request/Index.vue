<template lang="pug">
  div(class="q-mt-lg row")
    div(class="col-12")
      q-tab-panels(
        v-model="$route.params.step"
      )
        q-tab-panel(name="1")
          include blocks/step1
        q-tab-panel(name="2")
          include blocks/step2
</template>

<script>
export default {
  data() {
    return {
      steps: '1',
      selectedWaste: '',
      list_waste_type: [
        {
          icon1: 'domestic-waste.svg',
          label: '가정집 폐기물',
          val: 'domestic',
        },
        {
          icon1: 'industrial-waste.svg',
          label: '사업장 폐기물',
          val: 'industrial',
        },
        {
          icon1: 'construction-waste.svg',
          label: '건설 폐기물',
          val: 'construction',
        },
        {
          icon1: 'box.svg',
          label: '재활용 정기수거',
          val: 'box',
        },
      ],
      list_household_waste_type: [
        {
          icon1: 'bed.svg',
          label: '가구',
          val: 'domestic',
        },
        {
          icon1: 'radio.svg',
          label: '가전',
          val: 'industrial',
        },
        {
          icon1: 'clothes.svg',
          label: '생활용품',
          val: 'construction',
        },
        {
          icon1: 'document.svg',
          label: '기타',
          val: 'box',
        },
      ]
    };
  },
  mounted() {
    this.$emit('onHandleStep', this.$route.params.step )
  },
  methods: {
    
  },

}
</script>

<style lang="stylus">
  .heading-title
    font-size: 27px
    font-family: 'notosanskr-regular'
  
  .heading-subtitle
    color: #959595

</style>
