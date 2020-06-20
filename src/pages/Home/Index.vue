<template lang="pug">
   div
    q-carousel(animated='', v-model='slide', arrows='', navigation='', infinite='')
      q-carousel-slide(:name='1', img-src='https://picsum.photos/360/360')
    div
      div(class='row')
        div(class='col')
          div(class='row')
            div(class='col')
              h6(class='q-mt-md q-mb-xs q-ml-md text-black') &#xC6B0;&#xB9AC; &#xB3D9;&#xB124; &#xC5C5;&#xCCB4;
            div(class='col flex justify-end')
              q-btn(outline='', class='q-mt-md q-mb-xs q-ml-md q-mr-lg text-black') &#xB354;&#xBCF4;&#xAE30;
        gallery-sliding-horizontal
      popular-companies
      div(class='column')
        div(class='q-pt-md')
          q-banner(class='bg-secondary text-white')
            div(class='row no-wrap items-center justify-around')
              p(class='text-h5') &#xC6B0;&#xC218; &#xD6C4;&#xAE30; &#xACE0;&#xAC1D; 50&#xBA85; &#xC120;&#xCC29;&#xC21C; &#xB9C8;&#xC77C;&#xB9AC;&#xC9C0; 50,000P &#xC9C0;&#xAE09;
              h4(class='text-center') Image
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
