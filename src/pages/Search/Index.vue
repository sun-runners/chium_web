<template>
  <div class="">
    <div>
        <q-input outlined placeholder="철거업체 통합검색">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
    </div>
    <q-tabs
        narrow-indicator
        dense
        align="justify"
    >
        <q-tab class="text-secondary q-pa-sm" name="mails" label="업체명" />
        <q-tab class="text-secondary q-pa-sm" name="alarms" label="장소" />
    </q-tabs>
    <q-list padding class="q-mt-md">
      <template v-for="count in 20">
      <q-item :key="count">
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>
          <q-item-label>원철거</q-item-label>
          <q-item-label caption lines="2" class="text-black text-bold">서울특별시 광진구 천호대로.</q-item-label>
          <q-item-label caption lines="2" class="text-bold" style="color: #999999">리뷰 510 . 매칭 1,120</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-icon name="star" color="secondary" />
          <q-item-label class="text-bold text-black text-center" caption>4.9</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator :key="count" spaced />
      </template>
    </q-list>
  </div>
</template>

<script>
// import GalleryHorizontal from 'src/components/GalleryHorizontal'
// import PopularCompanies from 'src/components/PopularCompanies'
export default {
  name: 'Search',
  data () {
    return {
      slide: 1
    }
  },
  components: {
    // 'gallery-horizontal': GalleryHorizontal,
    // 'popular-companies': PopularCompanies
  }
}
</script>

<style>

</style>
