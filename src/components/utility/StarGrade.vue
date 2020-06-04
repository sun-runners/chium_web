<template>
  <div class="row items-center q-pb-md">
    <div class="col-11 q-pa-md ">
      <q-rating
        v-model="star"
        size="2em"
        :max="5"
        color="secondary"
      />
    </div>
    <div class="col row items-center">
      <p class="q-pt-md text-weight-bold">{{star}}.0</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    star: {
      type: Number
    }
  }
}
</script>

<style>

</style>
