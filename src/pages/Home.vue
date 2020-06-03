<template>
  <div>
    <gallery-horizontal></gallery-horizontal>
    <popular-companies></popular-companies>
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
