<template>
  <div class="row items-center">
    <div class="row items-center">
      <q-icon class="q-pb-md" size="22px" name="star" color="secondary" v-for="n in star" :key="n" />
      <p class="q-ml-sm text-weight-bold">{{star}}.0</p>
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
