<template>
  <div class="AddressDialog">
    <vue-daum-postcode
      q="서대문구"
      :animation="true"
      :no-shorthand="true"
      :no-auto-mapping="true"
      :please-read-guide="3"
      :please-read-guide-timer="2"
      :max-suggest-items="3"
      :show-more-h-name="true"
      :hide-map-btn="true"
      :hide-eng-btn="true"
      :always-show-eng-addr="true"
      :zonecode-only="true"
      :theme="{
    bgColor: '#162525',
    searchBgColor: '#162525',
    contentBgColor: '#162525',
    pageBgColor: '#162525',
    textColor: '#FFFFFF',
    queryTextColor: '#FFFFFF',
    outlineColor: '#44444'
  }"/>
  </div>
</template>

<script>
export default {
  name: 'AddressDialog'
}
</script>

<style lang="scss">
.AddressDialog {

}
</style>