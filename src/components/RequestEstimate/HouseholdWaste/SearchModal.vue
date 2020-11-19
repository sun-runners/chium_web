<template>
  <q-dialog
    v-model="searchModal"
    position="bottom"
    transition-show="slide-up"
    class="q-pa-none"
  >
    <q-card>
      <q-card-section class="header notosanskr-medium">
        가전 항목 0개 선택
      </q-card-section>
      <q-card-section class="q-py-none notosanskr-regular">
        <q-input
          v-model="searchText"
          filled
          bottom-slots
          color="secondary"
          label="냉장고, 건조기 등 검색"
          label-color="grey-14"
          :input-class="{ 'search-field': true }"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="searchText = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section class="row items-center no-wrap q-pa-none">
        Hello
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  props: {
    dialog: Boolean,
  },
  computed: {
    searchModal: {
      get() {
        return this.dialog;
      },
      set(val) {
        this.$emit("closeModal", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 100%;
  max-width: 1000px;
  margin: 0px;
  margin-top: 50px;
  min-height: 93vh;
  background: white;
  .header {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: #151515;
  }
}
</style>
