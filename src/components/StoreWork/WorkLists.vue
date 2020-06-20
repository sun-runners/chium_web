<template lang="pug">
  div
    div(v-for='(post, index) in posts', :key='index')
      include blocks/work-item

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
