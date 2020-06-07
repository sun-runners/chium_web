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
            <gallery-horizontal></gallery-horizontal>
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
                <div class="bg-grey-2 q-py-lg">
                    <home-notice></home-notice>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GalleryHorizontal from 'src/components/GalleryHorizontal'
import PopularCompanies from 'src/components/PopularCompanies'
import HomeNotice from 'src/components/HomeNotice'
export default {
  name: 'Home',
  data () {
    return {
      slide: 1
    }
  },
  components: {
    'gallery-horizontal': GalleryHorizontal,
    'popular-companies': PopularCompanies,
    'home-notice': HomeNotice
  }
}
</script>

<style>

</style>
