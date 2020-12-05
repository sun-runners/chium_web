<template>
  <div class="bg-grey-3 padding-top">
    <!-- search filter section -->
    <search-filter />
    <!-- section ends -->
    <q-list class="q-mt-lg bg-white" padding="">
      <q-item-label header="">
        <div class="row">
          <div class="col">
            <q-btn-group flat="flat">
              <q-btn
                class="text-blue btn-group-filter btn-group-filter-active"
                color="white"
                :size="$q.screen.width &lt; 376 ? 'xs' : 'sm'"
                flat="flat"
                label="전체"
              ></q-btn>
              <q-btn
                class="text-grey-6 btn-group-filter"
                color="white"
                :size="$q.screen.width &lt; 376 ? 'xs' : 'sm'"
                flat="flat"
                label="철거"
              ></q-btn>
              <q-btn
                class="text-grey-6 btn-group-filter"
                color="white"
                :size="$q.screen.width &lt; 376 ? 'xs' : 'sm'"
                flat="flat"
                label="폐기물"
              ></q-btn>
            </q-btn-group>
          </div>
          <div class="col flex justify-end">
            <q-btn-dropdown
              class="text-black"
              color="white"
              flat=""
              label="인기순"
            >
              <q-list>
                <q-item clickable="" v-close-popup="" @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable="" v-close-popup="" @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable="" v-close-popup="" @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div> </q-item-label
      ><template v-for="count in 20"
        ><q-item
          class="result-list"
          :key="count"
          clickable="clickable"
          @click="onItemResultClick"
          ><q-item-section top="" avatar="">
            <q-img
              class="image"
              src="https://picsum.photos/360/360"
              width="70px"
              height="70px"
            ></q-img>
          </q-item-section>
          <q-item-section>
            <q-item-label class="notosanskr-medium" style="font-size: 15px">
              미래 철거 폐기물
            </q-item-label>
            <q-item-label
              class="notosanskr-regular"
              caption=""
              lines="2"
              style="color: #454545; font-size: 13px"
            >
              경기 화성시 병점로 12
            </q-item-label>
            <q-item-label
              class="text-bold"
              caption=""
              lines="2"
              style="color: #999999; font-size: 12px"
            >
              <span class="review-matching-text-border">
                <span class="text-secondary notosanskr-medium">1,520 </span>
                <span class="notosanskr-regular">리뷰</span>
              </span>
              <span class="review-matching-text">
                <span class="text-secondary notosanskr-medium">12,520 </span>
                <span class="notosanskr-regular">매칭</span></span
              >
            </q-item-label>
          </q-item-section>
          <q-item-section side="" top="">
            <span>
              <q-icon name="star" color="secondary" style="font-size:20px">
              </q-icon>
              <q-item-label
                class="notosanskr-medium score-value text-black text-center"
              >
                4.9
              </q-item-label>
            </span>
          </q-item-section>
        </q-item>
        <q-separator :key="count + '-separator'" spaced=""></q-separator>
      </template>
    </q-list>
  </div>
</template>

<script>
import SearchFilter from "components/SearchPageComponents/SearchFilter.vue";
export default {
  name: "Search",
  components: {
    "search-filter": SearchFilter,
  },
  data() {
    return {
      slide: 1,
    };
  },
  methods: {
    onItemClick() {
      alert("click");
    },
    onItemResultClick() {
      this.$router.push("store");
    },
  },
};
</script>

<style lang="stylus">
.padding-top
  padding-top: 0.1mm

.btn-group-filter
  border: 1px solid #888888

.btn-group-filter-active
  border: 1px solid #18A0FB
  color: #18A0FB

.review-matching-text-border
  padding: 10px
  padding-left: 0px
  border-right: 1px #F2F2F2 solid

.review-matching-text
  padding: 10px

.result-list
  cursor: pointer
  &:hover
   background-color: #F2F2F2

.scope-value
  font-size 12px
</style>
