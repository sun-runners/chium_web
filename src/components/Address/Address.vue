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
  methods: {
    async patchAddress (data) {
      // Variable Section
      const dataUser = { address1: data.roadAddress || data.jibunAddress }

      // Set User
      await this.$store.commit('patchUser', dataUser)

      // Go home
      await this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
.AddressDialog {

}
</style>