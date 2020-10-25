<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info name="작업일정" class="full-width" backTo="search" />
      <q-tabs
        v-model="filterTabs"
        class="text-black notosanskr-regular"
        active-color="secondary"
        dense
        align="justify"
      >
        <q-route-tab
          name="store_detail"
          :to="{ name: 'store_detail' }"
          class="filterTab"
          label="업체소개"
        />
        <q-route-tab
          name="reviews"
          :to="{ name: 'store_review' }"
          class="filterTab"
          label="후기(633)"
        />
        <q-route-tab name="inquire" :to="{ name: 'store_inquiry' }" class="filterTab" label="문의하기" />
      </q-tabs>
    </template>

    <template #pageBody>
      <router-view></router-view>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "StoreLayout",
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
      filterTabs: "view_all",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>