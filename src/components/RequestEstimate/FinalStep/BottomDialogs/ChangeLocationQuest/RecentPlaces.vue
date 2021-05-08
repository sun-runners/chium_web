<template>
  <div class="item-container">
    <q-btn
      v-for="(address, i) of recentAddress"
      :key="i"
      flat
      class="full-width notosanskr-regular"
      dense
      padding="16px"
      @click="setNewAddress(address)"
    >
      <div class="full-width text-left">
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
            {{ `${address.address}${address.description ? ` ${address.description}` : ''}` }}
          </div>
          <!-- check icon | 확인 아이콘 -->
          <q-btn flat color="white" text-color="black">
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
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentAddress: {
        address: this.$store.state.category.enquiry.address,
        description: this.$store.state.category.enquiry.description,
      },
      newAddress: null,
      recentAddress: [
        { address: this.$store.state.category.enquiry.address, description: this.$store.state.category.enquiry.description },
        { address: this.$store.state.user.data.address1, description: this.$store.state.user.data.address2 },
      ],
    };
  },
  methods: {
    setNewAddress(address) {
      this.newAddress = address;
      this.$emit('selectAddress', address);
    },
    selectAddress (address) {
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
