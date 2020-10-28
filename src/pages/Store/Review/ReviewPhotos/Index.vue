<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info :name="'포토후기(116)'" class="full-width" backTo="search" />
    </template>
    <template #pageBody>
      <div class="bg-white q-ma-md">photos</div>
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
        bgBody: "white",
        bgFooter: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>