<template>
    <q-card flat class="my-card">
        <q-card-section>
        <div class="text-h6">{{ post.name }}</div>
        <star-grade :star="post.score" :size="25"></star-grade>
        </q-card-section>

        <q-card-section class="q-pt-none row">
            <div v-for="(item, index) in post.details" :key="index" class="row">
                <div class="q-mx-sm text-grey-14">{{ item }}</div>
                <q-separator vertical size="2px"/>
            </div>
        </q-card-section>

        <q-card-section v-if="post.gallery.length">
        <div class="q-pa-md">
            <gallery-static-horizontal :gallery="post.gallery"></gallery-static-horizontal>
        </div>
        </q-card-section>

        <q-card-section class="message">
            {{ post.message }}
        </q-card-section>
    </q-card>
</template>

<script>
import StarGrade from 'src/components/Utility/StarGrade'
import GalleryStaticHorizontal from 'src/components/Galleries/GalleryStaticHorizontal'

export default {
  components: {
    'star-grade': StarGrade,
    'gallery-static-horizontal': GalleryStaticHorizontal
  },
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style>

</style>
