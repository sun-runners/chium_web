<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <div class="full-width">
        <nav-header-info :name="'업체 상세정보'" class="full-width" backTo="store_detail" />
      </div>
    </template>

    <template #pageBody>
      <div class="full-height">content her</div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "CompanyDetail",
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