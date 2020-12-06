<template>
  <q-tabs
    v-model="filterTabs"
    class="text-black notosanskr-regular"
    active-color="secondary"
    dense
    align="justify"
  >
    <q-route-tab
      name="store_detail"
      :to="{ name: 'store_detail' }"
      class="filterTab"
      label="업체소개"
    />
    <q-route-tab
      name="reviews"
      :to="{ name: 'store_review' }"
      class="filterTab"
      label="후기(633)"
    />
    <q-route-tab
      name="inquire"
      :to="{ name: 'store_inquiry' }"
      class="filterTab"
      label="문의하기"
    />
  </q-tabs>
</template>

<script>
export default {
  data() {
    return {
      filterTabs: null,
    };
  },
};
</script>

<style scoped></style>
