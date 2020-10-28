<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info :name="'포토후기(116)'" class="full-width" backTo="store_review" />
    </template>
    <template #pageBody>
      <div class="row q-col-gutter-xs bg-white q-ma-md full-height">
        <div v-for="(item, i) in 30" :key="i" class="col-4">
          <q-img :src="'https://placeimg.com/500/300/nature?t=' + Math.random()" :ratio="1" />
        </div>
      </div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "ReviewPhotos",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleSlots: {
        bgHeader: "white",
        bgBody: "#F3F3F3",
        bgFooter: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>