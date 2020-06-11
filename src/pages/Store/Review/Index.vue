<template>
    <div class="bg-grey-3">
        <div class="bg-white">
            <div class="row">
                <div class="col-6">
                    <p style="font-size: 22px; line-height: 33px;">업체 만족도</p>
                    <div class="row content-center">
                        <q-rating
                        v-model="reviewRate"
                        size="2em"
                        :max="5"
                        color="secondary"
                        />
                        <p style="font-size: 24px; line-height: 33px;" class="q-pt-md q-pl-sm">{{ reviewRate }}</p>
                    </div>
                </div>
                <div class="col-6">
                </div>
            </div>
            <q-separator size="3px" inset/>
            <div class="q-pa-lg">
                <div class="q-py-sm" v-for="(slider, index) in sliders" :key="index">
                    <slide-grade
                    :label="slider.label"
                    :value="slider.value"
                    @changeValue="e => slider.value = e"
                    ></slide-grade>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SlideGrade from 'src/components/utility/SlideGrade'
export default {
  name: 'StoreReview',
  components: {
    'slide-grade': SlideGrade
  },
  data () {
    return {
      reviewRate: 4,
      sliders: [
        {
          label: '상업 공간', value: '3.9'
        },
        {
          label: '사무공간', value: '3.8'
        },
        {
          label: '주거공간', value: '4.0'
        },
        {
          label: '시설물 / 폐기물', value: '4.9'
        }
      ]
    }
  }
}
</script>

<style>

</style>
