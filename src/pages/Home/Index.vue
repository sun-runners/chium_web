<template>
  <div class="bg-primary" style="min-height: inherit">
    <!-- Home toolbar starts -->
    <top-toolbar></top-toolbar>
    <!-- Home banner starts -->
    <banner></banner>
    <!-- Content -->
    <quote-options></quote-options>
  </div>
</template>

<script>
import TopToolbar from "components/HomeComponents/TopToolbar.vue";
import Banner from "components/HomeComponents/Banner.vue";
import QuoteOptions from "components/HomeComponents/QuoteOptions.vue";
export default {
  name: "Home",
  components: {
    "top-toolbar": TopToolbar,
    banner: Banner,
    "quote-options": QuoteOptions,
  },
};
</script>

<style lang="scss" scoped></style>
