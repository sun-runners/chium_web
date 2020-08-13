<template>
  <q-card class="my-card" flat>
    <q-card-section class="row content-center" style="height: 44px;">
      <q-btn flat color="dark" icon="keyboard_backspace" v-if="backIcon" />
      <q-btn flat color="dark" icon="clear" v-else />
      <div
        style="font-weight: 500; font-size: 16px;"
        class="notosanskr-regular col row items-center justify-center"
      >{{ name }}</div>
      <q-btn flat color="dark" icon="clear" v-if="backIcon" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    name: String,
    backIcon: Boolean,
  },
};
</script>

<style>
</style>