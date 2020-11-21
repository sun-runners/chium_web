<template>
  <q-dialog
    v-model="searchModal"
    position="bottom"
    transition-show="slide-up"
    class="q-pa-none"
  >
    <q-card>
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-white">
          <q-card-section class=" header notosanskr-medium">
            가전 항목 0개 선택
          </q-card-section>
          <q-card-section class=" q-py-none notosanskr-regular">
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
        </q-header>

        <q-footer class="bg-white text-center q-px-md q-pb-xs">
          <q-btn
            flat
            class="selection-done notosanskr-regular"
            @click="selectionComplete()"
            :disable="!selectedItem.length"
            :class="{ 'btn-disabel': !selectedItem.length }"
          >
            선택 완료
          </q-btn>
        </q-footer>

        <q-page-container>
          <q-page padding>
            <!-- check sections starts here -->
            <q-btn
              flat
              v-for="(item, i) in searchItems"
              :key="i"
              @click="checkItem(item)"
              class="full-width"
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
          </q-page>
        </q-page-container>
      </q-layout>
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
        "세탁기 last",
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
        this.$emit("toggleModal", val);
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
    selectionComplete() {
      if (this.selectedItem.length) {
        this.$emit("selectionComplete", this.selectedItem);
        this.$emit("toggleModal", false);
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
.selection-done {
  /* Color/Main */
  background: #2cb3ff;
  border-radius: 8px;
  width: 100%;
  max-width: calc(1000px - 32px);
  height: 60px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.9px;
  color: #ffffff;
}
.btn-disabel {
  background: #bcc0c5;
}
</style>
