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
}
</style>
