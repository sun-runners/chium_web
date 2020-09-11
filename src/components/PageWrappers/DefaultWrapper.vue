<template>
  <div class="bg-grey">
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <slot :style="widthMax"></slot>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "DefaultWrapper",
  data() {
    return {};
  },
  computed: {
    widthMax() {
      return { width: window.innerWidth + "px", "max-width": "1000px" };
    },
  },
};
</script>

<style lang="scss" scoped></style>
