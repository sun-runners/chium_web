<template>
  <q-card flat class="my-card notosanskr-medium q-mb-md" id="workContentsCard">
    <q-card-section class="row items-center q-px-md">
      <q-icon
        name="o_check_box"
        class="text-grey-13 q-pr-sm"
        style="font-size: 24px;"
      />
      <div>작업내용</div>
    </q-card-section>

    <q-separator />

    <q-card-section class="column q-pb-none" style="font-size: 13px;">
      <div style="margin-bottom: 15px;">
        <div class="text-grey-13" style="color:#888888; margin-bottom: 5px;">
          유형
        </div>
        <q-btn
          unelevated
          rounded
          class="demolition-btn"
          style="font-size: 12px;padding: 2px 10px"
          label="전체철거"
        />
      </div>

      <div>
        <div class="text-grey-13 q-mb-xs" style="color:#888888;">
          희망작업일
        </div>
        <p style="color: #151515;">1개월이내</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {};
</script>

<style scoped>
.demolition-btn {
  background: #d4f2ff;
  color: #18a0fb;
}
</style>
