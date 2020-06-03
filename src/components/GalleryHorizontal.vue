<template>
    <div>
        <div class="gallery-container">
            <div class="item" v-for="(item, index) in items" :key="index">
                <q-img class="image" src="https://picsum.photos/360/360"/>
                <p class=" q-pt-md">{{ item.title }}</p>
                <StarGrade :star="item.star"></StarGrade>
            </div>
        </div>
    </div>
</template>

<script>
import StarGrade from './utility/StarGrade'
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
  }
}
</script>

<style lang="stylus">
.gallery-container
    display: flex
    overflow-x: auto
.item
    padding 8px
    width: 300px
    height: 100%
.image
    height 200px
    width  200px
</style>
