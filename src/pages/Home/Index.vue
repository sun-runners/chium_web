<template>
  <div class="bg-primary" style="min-height: inherit">
    <!-- Home toolbar starts -->
    <top-toolbar></top-toolbar>
    <!-- Home banner starts -->
    <banner @alertNotReady="$emit('alertNotReady')"></banner>
    <!-- Content -->
    <quote-options></quote-options>
  </div>
</template>

<script>
import TopToolbar from 'components/HomeComponents/TopToolbar.vue'
import Banner from 'components/HomeComponents/Banner.vue'
import QuoteOptions from 'components/HomeComponents/QuoteOptions.vue'
import Vue from 'vue'

export default {
  name: 'Home',
  components: {
    'top-toolbar': TopToolbar,
    banner: Banner,
    'quote-options': QuoteOptions
  },
  created () {
    if (this.$store && this.$store.getters && this.$store.getters.user && this.$store.getters.user.token) {
      Vue.prototype.$axios.defaults.headers.common.Authorization = `token ${this.$store.getters.token}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
