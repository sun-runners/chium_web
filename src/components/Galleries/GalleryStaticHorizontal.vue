<template>
    <div>
        <q-img v-for="(img, index) in gallery.slice(0, cutOff + 1)" :key="index"
        :src="img"
        spinner-color="white"
        :style="`height: ${height}; max-width: ${width};`"
        img-class="my-custom-image"
        class="border q-mx-sm"
        >
        <div class="absolute-full text-subtitle2 flex flex-center" v-if="index == cutOff && gallery.length > 4">
            더보기
        </div>
        </q-img>
    </div>
</template>

<script>
export default {
  props: {
    gallery: Array,
    cutOff: {
      type: Number,
      default: 3
    },
    height: {
      type: String,
      default: '80px'
    },
    width: {
      type: String,
      default: '80px'
    }
  }
}
</script>

<style>

</style>
