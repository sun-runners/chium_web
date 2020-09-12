<template>
  <q-card class="my-card" flat>
    <q-card-section
      class="row content-center q-px-none"
      style="height: 44px; padding: 0 16px;"
    >
      <router-link
        :to="{ name: backTo }"
        v-if="backTo"
        class="row items-center"
        style="text-decoration:none"
      >
        <q-icon class="text-dark" name="keyboard_backspace" size="24px" />
      </router-link>
      <q-btn flat color="dark" icon="clear" :to="{ name: closedTo }" v-else />
      <div
        style="font-weight: 500; font-size: 16px;"
        class="notosanskr-medium col row items-center justify-center  nav-text"
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

<style scoped>
.nav-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.8px;
  color: #151515;
}
</style>
