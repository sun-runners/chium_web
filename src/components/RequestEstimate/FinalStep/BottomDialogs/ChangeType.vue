<template>
  <div>
    <q-btn
      flat
      class="change-btn notosanskr-medium"
      padding="0px"
      @click="dialog = true"
    >
      변경
    </q-btn>
    <q-dialog v-model="dialog" position="bottom">
      <q-card class="notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width"
        >
          <div class="toolbar-title q-pl-md notosanskr-medium">
            유형변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <q-card-section>
          <div class="heading-title">
            건물유형
            <span class="heading-subtitle">을 알려주세요.</span>
          </div>

          <q-list separator>
            <q-item
              class="q-pt-lg q-pb-lg q-pl-none"
              clickable="clickable"
              v-for="(list, key) in listType"
              :key="key"
              @click="setSelectedType(list.val); $emit('next', true);"
            >
              <q-item-section avatar="avatar">
                <q-icon>
                  <img
                    :src="require(`assets/request_estimate-icon/${list.icon1}`)"
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
                        selectedType === list.val
                          ? 'radio-btn-selected.png'
                          : 'radio-btn-unselected.png'
                      }`)"
                  />
                </q-icon>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- Footer section | 바닥 글 버튼 섹션  -->
        <q-card-section class="q-pa-xs q-px-md absolute-bottom">
          <q-btn
            style="height: 60px;"
            :color="changeEnable ? 'secondary' : 'grey'"
            class="change-btn full-width notosanskr-medium "
            unelevated
            text-color="white"
            label="변경하기"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      changeEnable: true,
      selectedType: '',
      listType: [
        {
          icon1: 'recycle_house.svg',
          label: '단독주택',
          val: '단독주택',
        },
        {
          icon1: 'apartment.svg',
          label: '공동주택',
          val: '공동주택',
        },
        {
          icon1: 'recycle_building.svg',
          label: '복합건물',
          val: '복합건물',
        },
        {
          icon1: 'factory.svg',
          label: '공장',
          val: '공장',
        },
        {
          icon1: 'school.svg',
          label: '기타',
          val: '기타',
        },
      ],
    };
  },
  methods: {
    setSelectedType(val) {
      this.selectedType = val;
    }
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 100%;
  max-width: 1000px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100vh;
}
.toolbar-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 24px;
}
.heading-subtitle {
  color: #959595;
}
.change-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  margin: 0px;
  letter-spacing: -0.8px;
  padding: 0 16px;
  color: #195de4;
}
</style>
