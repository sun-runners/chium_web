<template>
  <div class="row  q-pb-md">
    <div class="q-pa-md">
      <q-rating
        v-model="star"
        size="2em"
        :max="5"
        color="secondary"
      />
    </div>
    <p class="q-px-sm text-weight-bold">{{star}}.0</p>
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
