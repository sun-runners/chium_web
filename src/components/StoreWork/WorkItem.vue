<template>
  <div class="q-mx-sm q-pb-lg row justify-center">
    <div style="width: 500px;">
        <q-img height="256px" :src="post.img" native-context-menu></q-img>
        <p class="text-6 q-pt-md" style="font-size: 18px; line-height: 27px;">{{ post.title }}</p>
        <div class="row justify-start text-grey-14">
          <div  class="row"  v-for="(detail, index) in post.details" :key="index">
            <span>{{ detail }}</span>
            <q-separator class="q-mx-sm" vertical size="2px"/>
          </div>
        </div>
        <p class="q-pt-md text-secondary text-weight-bold">{{ post.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style>

</style>
