<template>
  <div class="text-center bg-white" @click="goAddress">
    <div class="flex items-center justify-center">
      <span class="q-py-sm text-dark text-center notosanskr-medium">
        {{$store.getters.user.address1 || '주소를 입력해주세요'}}
      </span>
      <q-btn
        icon="arrow_drop_down_circle"
        dense
        color="secondary"
        rounded
        flat
      ></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goAddress () {
      this.$router.push({ name: 'address' })
    }
  }
}
</script>

<style scoped></style>
