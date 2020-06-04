<template>
  <div>
    <gallery-horizontal></gallery-horizontal>
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
</template>

<script>
import GalleryHorizontal from '../components/GalleryHorizontal'
import PopularCompanies from '../components/PopularCompanies'
export default {
  name: 'Home',
  components: {
    'gallery-horizontal': GalleryHorizontal,
    'popular-companies': PopularCompanies
  }
}
</script>

<style>

</style>
