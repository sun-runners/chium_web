<template>
  <div class="q-pa-md">
    <p class="q-my-sm" style="font-size: 12px; line-height: 18px;">(유) REMOVE</p>
    <div class="row items-center">
      <div class="row items-center q-mt-md" v-for="(item, index) in items" :key="index">
        <p class="q-pa-none q-ma-none" style="font-size: 10px;">{{ item }}</p>
        <div style="width: 1px; height: 15px" class="bg-grey-13 q-mx-xs"></div>
      </div>
    </div>
    <p class="q-mt-lg" style="font-size: 10px;">
      (유) REMOVE는 통신판매중개자로서 상품/거래정보 및 거래와 관련하여 통신판매 당사자 의 고의 또는 과실로 소비자에게 발생하는 손해에 대해 책임을 지지 않습니다.
      상품 거래에대한 정확한 정보는 해당 판매자에게 직접 확인 바랍니다.
    </p>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      items: [
        '사업자정보확인',
        '이용약관',
        '전자금융거래이용약관',
        '개인정보처리방침'
      ]
    }
  }
}
</script>

<style scoped>
div {
  color: #151515;
}
</style>
