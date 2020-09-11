<template>
  <default-wrapper>
    <div class="bg-white" style="min-height: 100vh;">
      <nav-header-info name="내 계정" backTo="my_page"  />
    </div>
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
};
</script>

<style scoped></style>
