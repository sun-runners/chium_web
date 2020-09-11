<template>
  <q-card class="my-card" flat>
    <q-card-section class="row content-center q-px-none" style="height: 44px;">
      <q-btn
        flat
        color="dark"
        icon="keyboard_backspace"
        :to="{ name: backTo }"
        v-if="backTo"
      />
      <q-btn flat color="dark" icon="clear" :to="{ name: closedTo }" v-else />
      <div
        style="font-weight: 500; font-size: 16px;"
        class="notosanskr-regular col row items-center justify-center"
      >
        {{ name }}
      </div>
      <q-btn
        flat
        color="dark"
        icon="clear"
        :to="{ name: closedTo }"
        v-if="backTo && closedTo"
      />
      <div style="width: 56px" v-else></div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    name: String,
    backTo: String,
    closedTo: String,
  },
};
</script>

<style></style>
