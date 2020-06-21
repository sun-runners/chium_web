<template>
  <div class="row items-center q-pa-none q-ma-none">
    <div class="row items-center q-pb-sm">
      <q-rating
        v-model="star"
        class="rating-size q-pa-none q-ma-none"
        :max="5"
        color="secondary"
      />
      <p class="q-pa-none q-ma-none q-ml-sm  text-weight-bold" :style="`font-size: ${size - 6}px`">{{star}}.0</p>
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

<style scoped>
.rating-size{
  font-size: 16px;
}
@media (min-width: 600px) {
  .rating-size{
    font-size: 20px;
  }
}
</style>
