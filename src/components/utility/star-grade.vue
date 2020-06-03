<template>
  <div class="row  q-pb-md">
    <span class="far fa-star" :class="{'fa fa-star' : star > 0}"></span>
    <span class="far fa-star" :class="{'fa fa-star' : star > 1}"></span>
    <span class="far fa-star" :class="{'fa fa-star' : star > 2}"></span>
    <span class="far fa-star" :class="{'fa fa-star' : star > 3}"></span>
    <span class="far fa-star" :class="{'fa fa-star' : star > 4}"></span>
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
