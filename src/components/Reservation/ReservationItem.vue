<template>
  <q-card class="my-card" flat>
    <q-card-section class="row justify-between">
      <div class="row">
        <div class="text-dark q-mr-md" style="font-size: 16px;">{{ item.status }}</div>
        <div class="text-grey row items-center" style="font-size: 12px;">{{ item.date }}</div>
      </div>
      <div>
        <q-btn
          color="secondary"
          padding="0px"
          class="q-ma-none q-pa-none"
          flat
          size="12px"
          label="상세보기"
          :to="{name:'reservation_detail'}"
        />
        <q-icon name="keyboard_arrow_right" class="text-secondary" style="font-size: 18px;" />
      </div>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="row">
      <div class="q-mr-sm">
        <q-img src="https://placeimg.com/500/300/nature" width="70px" height="93px" />
      </div>
      <div class="col">
        <div class="name" style="font-size: 14px;">{{ item.name }}</div>
        <div class="address ellipsis" style="font-size: 14px;">{{ item.address }}</div>
        <div class="option row">
          <div flat class="row" v-for="(option, index) in item.options" :key="index">
            <q-btn flat style="color: #888888;" padding="5px" size="14px" :label="option" />
            <q-separator vertical inset />
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div v-if="item.status == '견적신청'">
        <q-btn
          :rounded="false"
          class="full-width"
          style="color: #151515; border: 1px solid #E4E4E4"
          label="취소하기"
          unelevated
        />
      </div>
      <div class="row q-col-gutter-x-xs" v-if="item.status == '견적상담'">
        <div class="col-4">
          <q-btn
            :rounded="false"
            class="full-width work"
            padding="10px"
            color="secondary"
            style="color: #151515; border: 1px solid #E4E4E4"
            label="작업진행"
            unelevated
          />
        </div>
        <div class="col-4">
          <q-btn
            :rounded="false"
            class="full-width cancel"
            padding="10px"
            style="color: #151515; border: 1px solid #E4E4E4"
            label="취소하기"
            unelevated
          />
        </div>
        <div class="col-4">
          <q-btn
            :rounded="false"
            class="full-width call"
            padding="10px"
            style="color: #151515; border: 1px solid #E4E4E4"
            label="전화하기"
            unelevated
          />
        </div>
      </div>
      <div class="row q-col-gutter-x-xs" v-if="item.status == '철거완료'">
        <div class="col-6">
          <q-btn
            :rounded="false"
            class="full-width cancel"
            padding="10px"
            style="color: #151515; border: 1px solid #E4E4E4"
            label="취소하기"
            unelevated
          />
        </div>
        <div class="col-6">
          <q-btn
            :rounded="false"
            class="full-width call"
            padding="10px"
            style="color: #151515; border: 1px solid #E4E4E4"
            label="전화하기"
            unelevated
          />
        </div>
      </div>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="costs-container row justify-between" v-if="item.costs">
      <div>총 견적비용</div>
      <div style="color: #FF4848;">
        <span style="font-size:20px;">{{ item.costs}}</span> 원
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style>
</style>