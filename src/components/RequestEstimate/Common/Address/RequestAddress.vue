<template>
  <div class="AddressDialog">
    <vue-daum-postcode
        :animation="true"
        :no-shorthand="true"
        :no-auto-mapping="true"
        :please-read-guide="1"
        :please-read-guide-timer="2"
        :max-suggest-items="5"
        :show-more-h-name="true"
        :hide-map-btn="true"
        :hide-eng-btn="true"
        :always-show-eng-addr="false"
        :zonecode-only="true"
        @complete="patchAddress"
        :theme="{
        bgColor: '#F3F3F3',
        searchBgColor: '#FFFFFF',
        contentBgColor: '#FFFFFF',
        pageBgColor: '#FFFFFF',
        textColor: '#15161A',
        queryTextColor: '#15161A',
        outlineColor: '#ffffff',
      }"/>
  </div>
</template>

<script>
export default {
  name: 'AddressDialog',
  mounted () {},
  created() {
    console.log(this.$route.query)
  },
  methods: {
    async patchAddress (data) {
      // Set Address
      console.log(this.$store)
      await this.$store.commit('patchEnquiry', { data: { address: data.address } })
      // Go back
      await this.$router.push({ path: this.$route.query.back })
    }
  }
}
</script>

<style lang="scss">
.AddressDialog {

}
</style>