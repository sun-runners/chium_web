<template>
  <div class="q-pl-md bg-white">
    <p class="heading-title">
      건물 유형
      <span class="heading-subtitle">을 알려주세요. </span>
    </p>
    <div class="row">
      <div class="col">
        <q-list separator>
          <q-item
            class="q-pt-lg q-pb-lg q-pl-none"
            clickable="clickable"
            v-for="(list, key) in list_structure_type"
            :key="key"
            @click="
              setSelectedStructure(list.val)
              $emit('next', true)
            "
          >
            <q-item-section avatar="avatar">
              <q-icon>
                <img
                  :src="
                    require(`assets/demolition_icon/structure_type/${list.icon}`)
                  "
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
                    }`)
                  "
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
      list_structure_type: [
        {
          icon: 'pylon.svg',
          label: '철탑',
          val: 'pylon'
        },
        {
          icon: 'chimney.svg',
          label: '굴뚝',
          val: 'chimney'
        },
        {
          icon: 'h-beam.svg',
          label: '복합건물',
          val: 'h-beam'
        },
        {
          icon: 'etc.svg',
          label: '기타',
          val: 'etc'
        }
      ]
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setSelectedStructure (val) {
      this.selectedWaste = val
      this.$emit('setStructureType', val)
    }
  }
}
</script>

<style scoped>
.heading-title {
  font-size: 27px;
  font-family: 'notosanskr-regular';
}
.heading-subtitle {
  color: #959595;
}
</style>
