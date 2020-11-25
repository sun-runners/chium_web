<template>
  <q-card class="my-card notosanskr-medium" flat>
    <q-card-section
      class="row content-center q-px-none"
      style="height: 44px; padding: 0 16px;"
    >
      <router-link
        :to="{ path: prevPathRoute }"
        v-if="activeStep > 1"
        class="row items-center"
        style="text-decoration:none; width: 56px;"
      >
        <q-icon class="text-dark" name="keyboard_backspace" size="24px" />
      </router-link>
      <router-link
        :to="{ path: '/home' }"
        class="row items-center"
        style="text-decoration:none"
        v-else
      >
        <q-icon class="text-dark" name="clear" size="24px" />
      </router-link>
      <div
        style="font-weight: 500; font-size: 16px;"
        class="col row items-center justify-center  nav-text"
      >
        견적신청
      </div>
      <q-btn
        flat
        color="dark"
        :to="{ name: 'my_page' }"
        v-if="activeStep > 1"
        label="취소"
      />
      <div style="width: 56px" v-else></div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    prevPathRoute: String,
    activeStep: Number,
  },
  methods: {},
};
</script>

<style scoped></style>
