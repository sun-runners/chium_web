<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <div class="header bg-white row items-center q-pl-xs" style="height: 44px">
        <q-btn flat round color="black" icon="close" size="16px" :to="{name:'store_review'}" />
      </div>
    </template>
    <template #pageBody>
      <div class="bg-white q-ma-md notosanskr-regular" style="padding-bottom: 27px;">
        <q-img src="https://placeimg.com/500/300/nature" :ratio="1" />
        <div class="details-container q-px-md">
          <div class="name">박*인</div>
          <q-rating
            v-model="score"
            class="rating-size q-pa-none q-ma-none"
            :max="5"
            color="secondary"
            size="20px"
          />
          <div class="details q-pa-none q-ma-none row">
            <div v-for="(item, index) in details" :key="index" class="row q-pa-none">
              <div class="text-grey-14">{{ item }}</div>
              <q-separator vertical size="2px" class="q-mx-sm" />
            </div>
          </div>
        </div>
        <div
          class="message q-px-md"
          style="padding-top: 13px;"
        >가게를 처음하는거라 어떻게 해야할지 막막했어요 ㅠㅠ 인테리어부터 싹뜯어내고 다시해야할거 같아서 철거업체에 의뢰를 하여 진행했습니다. 너무나 안전하게 시공날짜에 맞춰서 신속하게 진행해줘서 감사했어요 ㅎㅎ 덕분에 가게 인테리어도 기분좋게 끝냈습니다.</div>
      </div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
export default {
  name: "ReviewDetailed",
  components: {
    "default-template": DefaultTemplate,
  },
  data() {
    return {
      styleSlots: {
        bgHeader: "white",
        bgBody: "#F3F3F3",
        bgFooter: "",
      },
      score: 4,
      details: ["주거공간", "오피스텔", "12평", "서울시 종로구"],
    };
  },
};
</script>

<style lang="scss" scoped>
.details-container {
  .name {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #15161a;
    margin-top: 19px;
  }
  .details {
    padding-top: 11px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #767676;
  }
}
.message {
  .message {
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.7px;
    color: #222222;
  }
}
</style>