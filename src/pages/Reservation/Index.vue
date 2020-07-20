<template>
  <div style="background: #F2F2F2; height: 100vh;" class="q-pa-md">
    <div class="search-bar-container row">
      <q-input
        v-model="search"
        debounce="1000"
        filled
        placeholder="작업주소/업체명으로 검색"
        color="secondary"
        hint
        class="col-12"
        bg-color="white"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div class="reservations-container">
      <q-card class="my-card" flat>
        <q-card-section class="row justify-between">
          <div class="row">
            <div class="text-dark q-mr-md" style="font-size: 16px;">견적신청</div>
            <div class="text-grey row items-center" style="font-size: 12px;">2020.07.01</div>
          </div>
          <div>
            <q-btn
              color="secondary"
              padding="0px"
              class="q-ma-none q-pa-none"
              flat
              size="12px"
              label="상세보기"
            />
            <q-icon name="keyboard_arrow_right" class="text-secondary" style="font-size: 18px;" />
          </div>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="row">
          <div class="col-3">
            <q-img src="https://placeimg.com/500/300/nature" width="70px" height="93px" />
          </div>
          <div class="col">
            <div class="name" style="font-size: 14px;">전국불도저</div>
            <div class="address ellipsis" style="font-size: 14px;">경기도 화성시 괘랑4길 16-38번지 솔가타...</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reservation",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
div {
  color: #151515;
}
</style>