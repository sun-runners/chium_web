<template>
  <div class="">
    <q-list padding class="q-mt-md">
      <template v-for="count in 20">
      <q-item :key="count">
        <q-item-section top avatar>
          <q-img class="image" src="https://picsum.photos/360/360" width="70px" height="70px" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">원철거</q-item-label>
          <q-item-label caption lines="2" class="text-bold" style="color: #454545">서울특별시 광진구 천호대로.</q-item-label>
          <q-item-label caption lines="2" class="text-bold" style="color: #999999">리뷰 510 . 매칭 1,120</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon name="star" color="secondary" />
          <q-item-label class="text-bold text-black text-center" caption>4.9</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator :key="count + '-separator'" spaced />
      </template>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      slide: 1
    }
  },
  components: {

  }
}
</script>

<style>

</style>
