<template>
  <q-card flat class="my-card q-py-md">
    <q-card-section>
      <div class="item-info row justify-between">
        <div class="row">
          <div class="post-name text-h6 q-pr-sm">{{ post.name }}</div>
          <q-rating
            v-model="post.score"
            class="rating-size q-pa-none q-ma-none"
            :max="5"
            color="secondary"
          />
        </div>
        <div class="post-date">{{ post.date }}</div>
      </div>
    </q-card-section>

    <q-card-section class="post-details q-pa-none q-px-xs row">
      <div v-for="(item, index) in post.details" :key="index" class="row">
        <div class="q-mx-sm text-grey-14">{{ item }}</div>
        <q-separator vertical size="2px" />
      </div>
    </q-card-section>

    <q-card-section v-if="post.gallery.length">
      <div class>
        <gallery-static-horizontal :gallery="post.gallery"></gallery-static-horizontal>
      </div>
    </q-card-section>

    <q-card-section class="message q-px-xl q-mb-xl">{{ post.message }}</q-card-section>
    <q-separator inset size="2px" />
  </q-card>
</template>

<script>
import StarGrade from "src/components/Utility/StarGrade";
import GalleryStaticHorizontal from "src/components/Galleries/GalleryStaticHorizontal";

export default {
  components: {
    "star-grade": StarGrade,
    "gallery-static-horizontal": GalleryStaticHorizontal,
  },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.post-name {
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.65px;
  color: #15161a;
}

.post-date {
  font-size: 12px;
  line-height: 18px;
  color: #959595;
}

.post-details {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.6px;
  color: #767676;
}
</style>
