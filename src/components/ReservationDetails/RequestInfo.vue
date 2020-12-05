<template>
  <q-card flat class="my-card notosanskr-medium q-mb-md" id="requesterInfoCard">
    <q-card-section class="row items-center q-px-md">
      <q-icon
        name="o_account_circle"
        class="text-grey-13 q-pr-sm"
        style="font-size: 24px;"
      />
      <div>의뢰자 정보</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="column q-pb-none" style="font-size: 13px;">
      <div class="q-mb-sm">
        <div class="text-grey-13 q-mb-xs" style="color: #888888;">의뢰자</div>
        <p style="color: #151515;">홍길동</p>
      </div>
      <div>
        <div class="text-grey-13 q-mb-xs" style="color: #888888;">연락처</div>
        <p style="color: #151515;">010-2398-0374</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style scoped></style>
