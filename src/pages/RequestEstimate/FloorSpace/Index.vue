<template>
  <div>Floor Space</div>
</template>

<script>
export default {
  created() {
    this.$emit("indicatorActive", { step: 2, color: "#46B3FC" });
  },
};
</script>

<style>
</style>