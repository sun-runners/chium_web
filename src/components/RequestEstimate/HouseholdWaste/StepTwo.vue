<template>
  <div>
    <p class="heading-title">
      폐기물 유형
      <span class="heading-subtitle">을 알려주세요.</span>
    </p>
    <div class="row">
      <div class="col">
        <q-list separator="separator">
          <q-item
            class="q-pt-lg q-pb-lg q-pl-none"
            clickable="clickable"
            v-for="(list, key) in list_household_waste_type"
            :key="key"
            @click="openDialog()"
          >
            <q-item-section avatar="avatar">
              <q-icon>
                <img :src="require(`assets/request_estimate-icon/${list.icon1}`)" />
              </q-icon>
            </q-item-section>
            <q-item-section
              style="font-size: 16px; font-family: notosanskr-regular"
            >{{ list.label }}</q-item-section>
            <q-item-section avatar="avatar">
              <q-icon>
                <img :src="require(`assets/request_estimate-icon/medium_arrow.right.svg`)"
                />
              </q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <!-- Modal Starts Here -->
    <q-dialog v-model="dialog" position="bottom" transition-show="slide-up" class="q-pa-none">
      <q-card>
        <q-card-section class="header notosanskr-medium">
          가전 항목 0개 선택
        </q-card-section>
        <q-card-section class="q-py-none notosanskr-regular">
          <q-input v-model="searchText" filled bottom-slots color="secondary" label="냉장고, 건조기 등 검색" label-color="grey-14" :input-class="{'search-field' : true}" :dense="dense">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="searchText = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section class="row items-center no-wrap q-pa-none">
          Hello
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selectedWaste: "",
      searchText: '',
      list_household_waste_type: [
        {
          icon1: "bed.svg",
          label: "가구",
          val: "domestic",
        },
        {
          icon1: "radio.svg",
          label: "가전",
          val: "industrial",
        },
        {
          icon1: "clothes.svg",
          label: "생활용품",
          val: "construction",
        },
        {
          icon1: "document.svg",
          label: "기타",
          val: "box",
        },
      ],
    };
  },
  computed: {},
  methods: {
    openDialog(position) {
      this.dialog = true
    }
  },
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  font-family: "notosanskr-regular";
}
.heading-subtitle {
  color: #959595;
}

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
