<template>
  <q-card
    flat
    class="my-card notosanskr-medium q-mb-md"
    id="companyInformationCard"
  >
    <q-card-section class="row items-center q-px-md">
      <q-icon
        name="o_local_shipping"
        class="text-grey-13 q-pr-sm"
        style="font-size: 24px;"
      />
      <div>업체정보</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="column q-pb-none" style="font-size: 13px;">
      <div class="q-mb-sm">
        <div class="text-grey-13 q-mb-xs" style="color:#888888;">업체명</div>
        <p style="color: #151515;">전국불도저</p>
      </div>
      <div>
        <div class="text-grey-13 q-mb-xs" style="color:#888888;">경력</div>
        <p style="color: #151515;">11년</p>
      </div>
      <div>
        <div class="text-grey-13 q-mb-xs" style="color:#888888;">매칭수</div>
        <p style="color: #151515;">21,245</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style scoped></style>
