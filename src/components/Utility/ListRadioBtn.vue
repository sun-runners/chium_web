<template>
  <div class="q-pl-md bg-white">
    <p class="heading-title bg-white q-ma-none notosanskr-regular">
      공간 유형을
      <span class="heading-subtitle"> 알려주세요.</span>
    </p>
    <div class="row q-mt-md">
      <div class="col">
        <q-list separator>
          <q-item
            class="q-pt-lg q-pb-lg q-pl-none"
            clickable="clickable"
            v-for="(list, key) in list_waste_type"
            :key="key"
            @click="setSelectedWaste(list.val); $emit('next', true);"
          >
            <q-item-section avatar="avatar">
              <q-icon>
                <img
                  :src="require(`assets/demolition_icon/${list.icon1}`)"
                />
              </q-icon>
            </q-item-section>
            <q-item-section
              style="font-size: 16px; font-family: notosanskr-regular"
              >{{ list.label }}</q-item-section
            >
            <q-item-section avatar="avatar">
              <q-icon>
                <img
                  :src="
                    require(`assets/request_estimate-icon/${
                      selectedWaste === list.val
                        ? 'radio-btn-selected.png'
                        : 'radio-btn-unselected.png'
                    }`)"
                />
              </q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedWaste: '',
      list_waste_type: [
        {
          icon1: 'House.svg',
          label: '내부 철거',
          val: 'household',
        },
        {
          icon1: 'Building_1.svg',
          label: '사업장 폐기물',
          val: 'business',
        },
      ]
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    setSelectedWaste (val) {
      this.selectedWaste = val;
      // this.$emit('change', layoutState);
    }
  }
}
</script>

<style scoped>
.heading-title {
  font-size: 27px;
  font-family: "notosanskr-regular";
}
.heading-subtitle {
  color: #959595;
}
</style>
