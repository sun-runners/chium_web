<template>
  <div class="">
    <head-section :schedule="schedule" />
    <!-- 의뢰 장소 -->
    <request-place
      :placeOfDischarge="placeOfDischarge"
      :type="type"
      :elevator="elevator"
      hiddenAcreage
      hiddenFloor
    />
    <!-- 의뢰자 -->
    <requester :contact="contact" />
    <!-- 의뢰 내용 -->
    <request-details
      :work="work"
      :discardedGoods="discardedGoods"
      :scheduleDate="scheduleDate"
      :scheduleTime="scheduleTime"
      :company="company"
    />
  </div>
</template>

<script>
import {
  HeadSection,
  RequestPlace,
  Requester,
  RequestDetails,
} from "components/RequestEstimate/FinalStep";
export default {
  components: {
    "head-section": HeadSection,
    "request-place": RequestPlace,
    requester: Requester,
    "request-details": RequestDetails,
  },
  data() {
    return {
      // head
      schedule: "07월 24일(금) 오후 02:00시 예정",
      // request place
      placeOfDischarge:
        "경기도 치움시 철거동 123-4 치움 번지 폐기 타운하우스 112호",
      type: "상업공간 32",
      elevator: "있음",
      // requester
      contact: {
        text: "홍길동",
        phone: "010-1234-5678",
      },
      // Request Details
      work: "가정집 폐기물 h",
      discardedGoods: ["핸드블랜더1", "전자렌지2", "건조기1", "세탁기1"],
      scheduleDate: "07월 24일 (목) -",
      scheduleTime: "오전 08:00시 s",
      company: "전국 불도저",
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
        prevPathRoute: "/request/waste/five/business",
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
