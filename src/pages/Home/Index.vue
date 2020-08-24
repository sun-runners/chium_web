<template lang="pug">
   div
    div(class='text-white no-margin' style="min-height:420px; background-color:#46B3FC;")
      div(class="row")
        div(class="col" style="min-width: 228px;")
          div(class="column")
            p(class="col banner-text q-pt-xl q-pl-md") 치움은 
              br
              | 어떤일을 하나요?
          
            div(class="col")
              q-btn(label="치움 가이드 보러가기" flat class="guide-btn q-ml-lg q-mt-md" size="sm" align="left" icon-right="arrow_forward_ios")
        
        div(class="col flex justify-end items-end content-end" style="min-height: 420px;")
          q-img(:src="require('src/assets/boy.svg')" class="q-mr-sm" style="max-width: 250px; min-width: 250px; height: 100%; max-height: 268px")
          
    div(class="row bg-primary" style="min-height: 220px")
      div(class="col q-pa-sm q-mt-md flex content-center justify-center")
        q-btn( flat class="full-width full-height home-btn bg-white" align="center"  type="a" size="xl") 
          q-icon(size="110px" :name="`img:${require('src/assets/icon_truck.svg')}`")
          p 폐기물 버리기
      div(class="col q-pa-sm q-mt-md flex content-center justify-center")
        q-btn(type="a" align="center" flat class="full-width full-height home-btn bg-white" size="xl")
          q-icon(size="110px" :name="`img:${require('src/assets/icon_swipe.svg')}`")
          p 철거하기

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

.home-btn
  min-height: 179px
  max-width: 166px
  font-family: 'notosanskr-regular'
  font-size: 16px
  line-height: 28px
  letter-spacing: -0.9px

.banner-text
  font-family: 'notosanskr-medium'
  font-size: 34px
  text-align: left
  min-width: 288px
  // border: 1px solid #000


.guide-btn
  font-family: 'notosanskr-medium';
  font-weight: 500
  font-size: 14px
  height 46px
  border-radius: 1000px
  border: 1px solid #fff

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
