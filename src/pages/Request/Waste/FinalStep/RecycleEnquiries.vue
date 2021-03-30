<template>
  <div class="">
    <head-section :schedule="schedule" />
    <request-place
      :placeOfDischarge="placeOfDischarge"
      :type="type"
      hiddenFloor
      hiddenAcreage
    />
    <!-- 의뢰자 -->
    <requester :contact="contact" />
    <previsit-on-site :preVisitOnSite="preVisitOnSite" />
  </div>
</template>

<script>
import {
  HeadSection,
  RequestPlace,
  Requester,
  PrevisitOnSite,
} from "components/RequestEstimate/FinalStep";
export default {
  components: {
    "head-section": HeadSection,
    "request-place": RequestPlace,
    requester: Requester,
    "previsit-on-site": PrevisitOnSite,
  },
  data() {
    return {
      // head
      schedule: "07월 24일(금) 오후 02:00시 예정",
      // request place
      placeOfDischarge:
        "경기도 치움시 철거동 123-4 치움 번지 폐기 타운하우스 112호",
      type: "상업시설",
      // requester
      contact: {
        text: "홍길동",
        phone: "010-1234-5678",
      },
      // previsit
      preVisitOnSite: "사전 방문 안함 ",
    };
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 6,
        btnLabel: "견적신청완료",
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/home",
        prevPathRoute: "/request/waste/five/recycle",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
    setTimeout(() => {
      this.$emit("next", true);
    }, 1000);
  },
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped></style>
