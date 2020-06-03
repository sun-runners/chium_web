<template>
  <div class="row  q-pb-md">
    <span class="far fa-star" :class="{'fa fa-star text-light-blue' : star > 0}"></span>
    <span class="far fa-star" :class="{'fa fa-star text-light-blue' : star > 1}"></span>
    <span class="far fa-star" :class="{'fa fa-star text-light-blue' : star > 2}"></span>
    <span class="far fa-star" :class="{'fa fa-star text-light-blue' : star > 3}"></span>
    <span class="far fa-star" :class="{'fa fa-star text-light-blue' : star > 4}"></span>
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
