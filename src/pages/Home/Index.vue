<template>
    <div>
        <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        >
        <q-carousel-slide :name="1" img-src="http://localhost:8080/statics/images/Bannertops.jpg" />
        </q-carousel>
        <div>
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <h5 class="q-mt-md q-mb-xs q-ml-md text-black">우리 동네 업체</h5>
                        </div>
                        <div class="col flex justify-end">
                            <q-btn outline class="q-mt-md q-mb-xs q-ml-md q-mr-lg text-black">더보기</q-btn>
                        </div>
                    </div>
                </div>
            <gallery-horizontal></gallery-horizontal>
            </div>
            <popular-companies></popular-companies>
            <div class="q-pt-md">
            <q-banner class="bg-secondary text-white">
                <div class="row items-center">
                <div class="col-7">
                    <p class="text-h5">우수 후기 고객 50명 선착순 마일리지 50,000P 지급</p>
                </div>
                <div class="col-5">
                    <h4 class="text-center">Image</h4>
                </div>
                </div>
            </q-banner>
            </div>
        </div>
    </div>
</template>

<script>
import GalleryHorizontal from 'src/components/GalleryHorizontal'
import PopularCompanies from 'src/components/PopularCompanies'
export default {
  name: 'Home',
  data () {
    return {
      slide: 1
    }
  },
  components: {
    'gallery-horizontal': GalleryHorizontal,
    'popular-companies': PopularCompanies
  }
}
</script>

<style>

</style>
