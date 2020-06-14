<template>
  <div class="row items-center">
    <div class="row items-center">
      <q-rating
        v-model="star"
        :size="`${size}px`"
        :max="5"
        color="secondary"
      />
      <p class="q-ml-sm q-pt-md text-weight-bold" :style="`font-size: ${size - 6}px`">{{star}}.0</p>
      <!-- <q-icon class="q-pb-md" size="22px" name="star" color="secondary" v-for="n in star" :key="n" /> -->
      <!-- <p class="q-ml-sm text-weight-bold">{{star}}.0</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    star: {
      type: Number
    },
    size: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style>

</style>
