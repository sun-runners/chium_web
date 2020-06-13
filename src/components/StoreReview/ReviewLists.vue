<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <review-item :post="post"></review-item>
    </div>
  </div>
</template>

<script>
import ReviewItem from 'src/components/StoreReview/ReviewItem'
export default {
  components: {
    'review-item': ReviewItem
  },
  props: {
    posts: Array
  }
}
</script>

<style scoped>
.message {
  line-height: 25px;
  letter-spacing: -1.05px;
  font-size: 14px;
}

</style>
