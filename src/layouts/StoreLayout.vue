<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info :name="'어게인업'" class="full-width" backTo="search" />
      <top-toolbar-tabs />
    </template>

    <template #pageBody>
      <router-view></router-view>
    </template>

    <template #pageFooter>
      <estimate-quote-request></estimate-quote-request>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
import EstimatedQuoteRequest from "src/components/StoreLayoutComponents/EstimatedQuoteRequest";
import TopToolbarTabs from "src/components/StoreLayoutComponents/TopToolbarTabs";
export default {
  name: "StoreLayout",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
    "estimate-quote-request": EstimatedQuoteRequest,
    "top-toolbar-tabs": TopToolbarTabs,
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

<style lang="scss" scoped></style>
