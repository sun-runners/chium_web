<template lang="pug">
   div
    q-banner(class='banner text-white no-margin' style="min-height:400px; background-color:#62BDF8;")
      div(class="row")
        div(class="col flex justify-center items-center content-center")
          q-img(:src="require('src/assets/banner_top.png')" class="" style="max-width: 375px; height: 100%; max-height: 400px")
    div
      div(class='row')
        div(class='col')
          div(class='row')
            div(class='col')
              h6(class='q-mt-md q-mb-xs q-ml-md text-black notosanskr-medium home-heading-text') 우리 동네 업체
            div(class='col flex justify-end')
              q-btn(flat class='q-mt-md q-mb-xs q-ml-md q-mr-lg text-black view-more-btn notosanskr-medium') 더보기
        
      gallery-sliding-horizontal
      
      popular-companies

      div(class='column')
        div(class='q-pt-md')
          q-banner(class='banner bg-secondary q-pa-none text-white')
            q-img(:src="require('src/assets/banner_bottom.png')" style="max-width: 100%; height: 100%;")

        div(class='bg-grey-3 q-py-lg')
          home-notice
          terms-of-service

</template>

<script>
import GallerySlidingHorizontal from 'src/components/Galleries/GallerySlidingHorizontal'
import PopularCompanies from 'src/components/PopularCompanies'
import HomeNotice from 'src/components/HomeNotice'
import TermsOfServiceVue from 'src/components/TermsOfService.vue'
export default {
  name: 'Home',
  data () {
    return {
      slide: 1,
    }
  },
  computed: {
    getBannerMaxWidth () {
      const { name } = this.$q;
      switch (name) {
        case 'md': return { }
      }
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

<style lang="stylus" scoped>
.view-more-btn
  font-size: 13px
  border: 0.5px solid #D2D2D2

.home-heading-text
  font-size: 18px

.banner
  height: 100px;
@media (min-width: 600px)
  .banner
    height: 250px;
</style>
