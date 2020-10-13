<template lang="pug">
  .bg-primary
    .text-white.no-margin(style='height: 100%; background-color:#46B3FC;')
      .row
        .col(style='min-width: 228px;')
          .column.notosanskr-regular
            p.col.banner-text.q-pt-xl.q-pl-md
              | 치움은
              br
              | 어떤일을 하나요?
            .col
              q-btn.guide-btn.q-ml-lg.q-mt-md(label='치움 가이드 보러가기', flat='flat', size='sm', align='left', icon-right='arrow_forward_ios')
        .col.flex.justify-end.items-end.content-end(style='min-height: 420px;')
          q-img.q-mr-sm(:src="require('src/assets/boy.svg')", style='max-width: 250px; min-width: 250px; height: 100%; max-height: 268px')
    .row.q-gutter-sm.q-pa-sm(style='')
      .col.bg-white.q-pa-sm.flex.content-center.justify-center
        q-btn.full-width.full-height.home-btn.bg-white(flat='flat', align='center', type='a')
          q-icon(size='110px', :name="`img:${require('src/assets/icon_truck.svg')}`")
          p.notosanskr-medium.q-pt-sm 폐기물 버리기
      .col.bg-white.q-pa-sm.flex.content-center.justify-center
        q-btn.full-width.full-height.home-btn.bg-white(type='a', align='center', flat='flat')
          q-icon(size='110px', :name="`img:${require('src/assets/icon_swipe.svg')}`")
          p.notosanskr-medium.q-pt-sm 철거하기
</template>

<script>
import GallerySlidingHorizontal from "src/components/Galleries/GallerySlidingHorizontal";
import PopularCompanies from "src/components/PopularCompanies";
import HomeNotice from "src/components/HomeNotice";
import TermsOfServiceVue from "src/components/TermsOfService.vue";
export default {
  name: "Home",
  data() {
    return {
      slide: 1,
    };
  },
  created() {
    this.$emit("changeHeadingName", "괘랑4길 16-38");
  },
  computed: {
    getBannerMaxWidth() {
      const { name } = this.$q;
      switch (name) {
        case "md":
          return {};
      }
    },
  },
  components: {
    "gallery-sliding-horizontal": GallerySlidingHorizontal,
    "popular-companies": PopularCompanies,
    "home-notice": HomeNotice,
    "terms-of-service": TermsOfServiceVue,
  },
};
</script>

<style lang="scss" scoped>
.home-btn {
  min-height: 179px;
  max-width: 166px;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.85px;
  color: #15161a;
}

.banner-text {
  font-size: 34px;
  text-align: left;
  min-width: 288px;
}

.guide-btn {
  font-weight: 500;
  font-size: 14px;
  height: 46px;
  border-radius: 1000px;
  border: 1px solid #fff;
}

.view-more-btn {
  font-size: 13px;
  border: 0.5px solid #d2d2d2;
}

.home-heading-text {
  font-size: 18px;
}

.banner {
  height: 100px;
}

@media (min-width: 600px) {
  .banner {
    height: 250px;
  }
}
</style>
