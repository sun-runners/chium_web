<template>
  <div class="q-pl-md bg-white">
    <p class="heading-title">
      재활용 수거 장소<span class="heading-subtitle">를 알려주세요.</span>
    </p>
    <div class="row">
      <div class="col">
        <q-list separator="separator">
          <q-item
            class="q-pt-lg q-pb-lg q-pl-none"
            clickable="clickable"
            v-for="(list, key) in list_recycle_type"
            :key="key"
            @click="setRecyclePlace(list.val)"
          >
            <q-item-section avatar="avatar">
              <q-icon>
                <img
                  :src="require(`assets/request_estimate-icon/${list.iconRecycleenquiries}`)"
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
                      recyclePlace === list.val
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
      recyclePlace: '',
      list_recycle_type: [
        {
          iconRecycleenquiries: 'recycle_house.svg',
          label: '주거단지',
          val: '주거단지',
        },
        {
          iconRecycleenquiries: 'recycle_building.svg',
          label: '빌딩 및 오피스텔',
          val: '빌딩 및 오피스텔',
        },
        {
          iconRecycleenquiries: 'recycle_store.svg',
          label: '상업시설',
          val: '상업시설',
        },
        {
          iconRecycleenquiries: 'recycle_school.svg',
          label: '기타',
          val: '기타',
        },
      ],
    };
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 6,
        activeStep: 2,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/three/recycle',
        prevPathRoute: '/request/waste/',
        patchData: null
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setRecyclePlace (val) {
      this.recyclePlace = val
      this.$emit('setEnquiryData', { recycle_place: val })
      this.$emit('next', true)
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
