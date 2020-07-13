<template>
  <div class="row overflow-auto q-pt-sm">
    <div class="gallery-container">
      <div class="item" v-for="(item, index) in items" :key="index" @click="goStoreDetail">
          <q-img class="image" src="https://picsum.photos/360/360"/>
          <p class="q-pt-md q-ma-none q-pa-none text-dark">{{ item.title }}</p>
          <StarGrade :star="item.star"></StarGrade>
      </div>
    </div>
  </div>
</template>

<script>
import StarGrade from 'src/components/Utility/StarGrade'
export default {
  components: {
    StarGrade
  },
  data () {
    return {
      items: [
        {
          title: '파란환경철거',
          star: 4
        },
        {
          title: '파란환경철거',
          star: 5
        },
        {
          title: '파란환경철거',
          star: 3
        },
        {
          title: '파란환경철거',
          star: 2
        },
        {
          title: '파란환경철거',
          star: 5
        },
        {
          title: '파란환경철거',
          star: 5
        }
      ]
    }
  },
  methods: {
    goStoreDetail () {
      this.$router.push({ name: 'store' })
    }
  }
}
</script>

<style lang="stylus" scoped>
p {
  font-family: Noto Sans CJK KR
}
.gallery-container
    display: flex
    overflow-x: auto
.item
    padding 0 4px
    width: 300px
    height: 100%
.image
    width: 145px;
    height: 145px;
@media (min-width: 600px)
  .item
    padding 8px;
  .image
      height 200px;
      width  200px;
</style>
