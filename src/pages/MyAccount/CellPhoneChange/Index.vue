<template>
  <default-wrapper :styleSlots="styleWrapperSlots">
    <template #pageHeader>
      <nav-header-info
        name="핸드폰 변경"
        class="full-width"
        backTo="my_account"
      />
    </template>

    <template #pageContent>
      <div style="padding-left: 16px;">
        body content
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer btn-ready"
        style="font-size:17px;"
        :rounded="false"
        flat
        :label="'변경'"
      />
    </template>
  </default-wrapper>
</template>

<script>
import DefaultWrapper from "src/components/PageWrappers/DefaultWrapper";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  components: {
    "default-wrapper": DefaultWrapper,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleWrapperSlots: {
        bgHeader: "white",
        bgBody: "white",
        bgFooter: "white",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
