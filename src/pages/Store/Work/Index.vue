<template>
<div class="bg-white">
  <h6 class="q-pa-md q-ma-none">20개 작업</h6>
  <work-lists :posts="posts"></work-lists>
</div>
</template>

<script>
import WorkLists from 'src/components/StoreWork/WorkLists'
export default {
  name: 'StoreWork',
  components: {
    'work-lists': WorkLists
  },
  data () {
    return {
      posts: [
        {
          title: '아디다스 매장 철거',
          img: 'https://placeimg.com/500/500/architecture',
          details: ['상업공간', '상가/매장', '45평', '서울시 은평구'],
          price: '3,000 만원'
        },
        {
          title: '스포츠클럽 철거',
          img: 'https://placeimg.com/500/500/tech',
          details: ['상업공간', '상가/매장', '60평', '성남시 용산구'],
          price: '6,000 만원'
        },
        {
          title: '아디다스 매장 철거',
          img: 'https://placeimg.com/500/500/grayscale',
          details: ['상업공간', '상가/매장', '45평', '서울시 은평구'],
          price: '3,000 만원'
        }
      ]
    }
  }
}
</script>

<style>

</style>
