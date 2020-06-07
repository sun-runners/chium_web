<template>
    <div>
        <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        >
        <q-carousel-slide :name="1" img-src="https://picsum.photos/360/360" />
        </q-carousel>
        <div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <h6 class="q-mt-md q-mb-xs q-ml-md text-black">우리 동네 업체</h6>
                        </div>
                        <div class="col flex justify-end">
                            <q-btn outline class="q-mt-md q-mb-xs q-ml-md q-mr-lg text-black">더보기</q-btn>
                        </div>
                    </div>
                </div>
            <gallery-sliding-horizontal></gallery-sliding-horizontal>
            </div>
            <popular-companies></popular-companies>
            <div class="column">
                <div class="q-pt-md">
                    <q-banner class="bg-secondary text-white">
                        <div class="row no-wrap items-center justify-around">
                            <p class="text-h5">우수 후기 고객 50명 선착순 마일리지 50,000P 지급</p>
                            <h4 class="text-center">Image</h4>
                        </div>
                    </q-banner>
                </div>
                <div class="bg-grey-3 q-py-lg">
                    <home-notice></home-notice>
                    <terms-of-service></terms-of-service>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GallerySlidingHorizontal from 'src/components/GallerySlidingHorizontal'
import PopularCompanies from 'src/components/PopularCompanies'
import HomeNotice from 'src/components/HomeNotice'
import TermsOfServiceVue from 'src/components/TermsOfService.vue'
export default {
  name: 'Home',
  data () {
    return {
      slide: 1
    }
  },
  components: {
    'gallery-sliding-horizontal': GallerySlidingHorizontal,
    'popular-companies': PopularCompanies,
    'home-notice': HomeNotice,
    'terms-of-service': TermsOfServiceVue
  }
}
</script>

<style>

</style>
