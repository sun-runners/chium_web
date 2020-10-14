<template lang="pug">
.bg-primary(style="min-height: inherit")
  .text-white.no-margin(style="height: 418px; background-color:#46B3FC;")
    .row
      .col(style="min-width: 228px;")
        .column.notosanskr-regular
          p.col.banner-text.q-pt-xl.q-pl-md
            | 치움은
            br
            | 어떤일을 하나요?
          .col
            q-btn.guide-btn.q-ml-lg.q-mt-md(
              label="치움 가이드 보러가기",
              flat="flat",
              size="sm",
              align="left",
              icon-right="arrow_forward_ios"
            )
      .col.flex.justify-end.items-end.content-end(style="min-height: 420px;")
        q-img.q-mr-sm(
          :src="require('src/assets/boy.svg')",
          style="max-width: 250px; min-width: 250px; height: 100%; max-height: 268px"
        )
  .row.q-gutter-md.q-pa-sm.q-pt-md.q-px-md(style="")
    .col.bg-white.flex.content-center.justify-center
      q-btn.full-width.full-height.home-btn.bg-white(
        @click="showPopup()",
        align="center",
        type="a"
      )
        q-icon(
          size="110px",
          :name="`img:${require('src/assets/icon_truck.svg')}`"
        )
        p.notosanskr-medium.q-pt-sm.full-width 폐기물 버리기
    .col.bg-white.flex.content-center.justify-center
      q-btn.full-width.full-height.home-btn.bg-white(
        @click="showPopup('demolition')",
        type="a",
        align="center"
      )
        q-icon(
          size="110px",
          :name="`img:${require('src/assets/icon_swipe.svg')}`"
        )
        p.notosanskr-medium.q-pt-sm.full-width 철거하기
  q-dialog(v-model="popupBottom", full-width="", position="bottom")
    q-card(style="height: 100%;border-radius: 8px;")
      .waste.q-px-md.notosanskr-regular
        .close.notosanskr-medium 닫기
        .text-heading.notosanskr-medium 철거하기!
        p.text-sub-heading.q-mt-sm 철거를 진행하기전 업체에게서 견적 받는 방법을 선택해주세요.
        q-btn.vendor-btn(style="background: #2CB3FF; color: white") 업체 한 곳에서 견적받기
        q-btn.vendor-btn.bg-white(style="color: #15161A; margin-top: 10px;") 여러 업체에게 역 견적 받기
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
      popupBottom: false,
      contentWaste: true,
    };
  },
  created() {
    this.$emit("changeHeadingName", "괘랑4길 16-38");
  },
  methods: {
    showPopup(content = "waste") {
      this.popupBottom = !this.popupBottom;
      this.contentWaste = content == "waste" ? true : false;
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
  min-height: 180px;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.85px;
  color: #15161a;
  padding: 17px;
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

.waste {
  height: 312px;
  color: #15161a;
  letter-spacing: -0.8px;
  text-align: center;
  .close {
    font-weight: 500;
    font-size: 14px;
    line-height: 50px;
    text-align: right;
    letter-spacing: -0.7px;
  }
  .text-heading {
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;

    letter-spacing: -1.1px;
  }
  .text-sub-heading {
    font-size: 16px;
    line-height: 24px;

    color: #5a5a5a;
  }
  .vendor-btn {
    font-size: 15px;
    line-height: 40px;
    color: #ffffff;
    width: 280px;
    padding: 0;
  }
}
</style>
