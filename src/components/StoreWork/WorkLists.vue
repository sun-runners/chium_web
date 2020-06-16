<template>
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <work-item :post="post"></work-item>
    </div>
  </div>
</template>

<script>
import WorkItem from 'src/components/StoreWork/WorkItem'
export default {
  components: {
    'work-item': WorkItem
  },
  props: {
    posts: Array
  }
}
</script>

<style>

</style>
