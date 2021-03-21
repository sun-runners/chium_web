<template>
  <div class="">
    <p class="heading-title bg-white q-ma-none q-px-md notosanskr-regular">
      엘레베이터 유무
      <span class="heading-subtitle">에 대해서 알려주세요.</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elevator: false,
    };
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>
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
</style>
