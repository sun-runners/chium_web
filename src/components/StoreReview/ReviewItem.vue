<template>
  <q-card flat class="my-card q-py-md notosanskr-regular">
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
      <div v-for="(item, index) in post.details" :key="index" class="row q-pa-none">
        <div class="q-mx-sm text-grey-14">{{ item }}</div>
        <q-separator vertical size="2px" />
      </div>
    </q-card-section>

    <q-card-section v-if="post.gallery.length" class="q-pa-none">
      <div class="q-py-md q-px-md">
        <gallery-static-horizontal :gallery="post.gallery"></gallery-static-horizontal>
      </div>
    </q-card-section>

    <q-card-section class="q-mb-xl row">
      <div class="message col q-pr-xl ellipsis-2-lines">{{ post.message }}</div>
      <div class="col-1 row items-center">
        <q-icon size="34px" style="color: #A0A0A0" class="end" name="keyboard_arrow_right"></q-icon>
      </div>
    </q-card-section>
    <q-separator inset size="2px" />
  </q-card>
</template>

<script>
import GalleryStaticHorizontal from "src/components/Galleries/GalleryStaticHorizontal";

export default {
  components: {
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

.message {
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;
  /* or 154% */

  letter-spacing: -0.65px;

  /* Font/#15 */
  height: 40px;
  color: #15161a;
}
</style>
