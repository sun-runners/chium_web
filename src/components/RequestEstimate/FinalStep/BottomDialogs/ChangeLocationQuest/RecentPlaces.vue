<template>
  <div class="full-height">
    <div
      v-for="(address, i) of recentAddress"
      :key="i"
      class="recent-place q-pl-md q-py-md notosanskr-regular"
    >
      <q-badge
        outline
        :color="currentAddress == address ? 'secondary' : 'grey'"
        class="q-mb-sm"
        text-color="black"
        label="현재장소"
      />
      <div class="row justify-between">
        <!-- address text | 주소 텍스트 -->
        <div class="place-text">
          {{ address }}
        </div>
        <!-- check icon | 확인 아이콘 -->
        <q-btn
          flat
          color="white"
          text-color="black"
          @click="setNewAddress(address)"
        >
          <q-icon size="24px">
            <img
              src="~assets/circle_check_blue.svg"
              v-if="newAddress == address"
            />
            <img src="~assets/circle_check_grey.svg" v-else />
          </q-icon>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentAddress:
        "경기도 치움시 철거동 123-4 치움 번지 폐기 타운하우스 112호 (15812)",
      newAddress: null,
      recentAddress: [
        "경기도 치움시 철거동 123-4 치움 번지 폐기 타운하우스 112호 (15812)",
        "서울특별시 성북구 길음로 334 (길음동,길음뉴타운) 길음 뉴타운 8단지 812동 1902호(20202)",
        "경기도 치움시 철거동 13-4 치움 번지 폐기 타운하우스 112호 (15812)",
        "경기도 치움시 철거동 23-4 치움 번지 폐기 타운하우스 112호 (15812)",
      ],
    };
  },
  methods: {
    setNewAddress(address) {
      this.newAddress = address;
    },
  },
};
</script>

<style scoped>
.place-text {
  width: 259px;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.75px;
  color: #15161a;
}
</style>
