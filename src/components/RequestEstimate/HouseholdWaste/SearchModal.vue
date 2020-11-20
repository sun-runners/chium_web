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
      <q-separator size="2px" color="black" />
      <q-card-section class="column q-px-md q-pb-md">
        <!-- check sections starts here -->
        <q-btn
          flat
          v-for="(item, i) in searchItems"
          :key="i"
          @click="checkItem(item)"
        >
          <div
            class="search-item notosanskr-medium row items-center full-width"
          >
            <q-icon class="text-dark q-mr-md" size="24px">
              <img
                src="~assets/circle_check_blue.svg"
                v-if="selectedItem.includes(item)"
              />
              <img src="~assets/circle_check_grey.svg" v-else />
            </q-icon>
            <div class="item-text">
              {{ item }}
            </div>
          </div>
          <q-separator />
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      searchItems: [
        "TV",
        "냉장고",
        "김치 냉장고",
        "세탁기",
        "건조기",
        "공기청정기",
        "가습기",
        "제습기",
        "세탁기-",
        "커피머신",
        "오븐",
        "전자렌지",
        "세탁기1",
        "커피머신",
        "오븐",
        "전자렌지",
        "세탁기",
      ],
      selectedItem: [],
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
  methods: {
    checkItem(item) {
      if (!this.selectedItem.includes(item)) {
        this.selectedItem.push(item);
      } else {
        this.selectedItem = this.selectedItem.filter((i) => i != item);
      }
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
  height: 93vh;
  background: white;
  .header {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: #151515;
  }
}
.search-item {
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 147% */

  display: flex;
  align-items: center;
  letter-spacing: -0.75px;

  color: #151515;
  padding: 10px 0px;
}
</style>
