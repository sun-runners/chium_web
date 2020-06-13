<template>
    <div class="bg-grey-3">
        <div class="bg-white">
            <div class="row">
                <div class="col-6">
                    <p style="font-size: 22px; line-height: 33px;">업체 만족도</p>
                    <div class="row content-center">
                        <q-rating
                        v-model="reviewRate"
                        size="2em"
                        :max="5"
                        color="secondary"
                        />
                        <p style="font-size: 24px; line-height: 33px;" class="q-pt-md q-pl-sm">{{ reviewRate }}</p>
                    </div>
                </div>
                <div class="col-6">
                </div>
            </div>
            <q-separator size="3px" inset/>
            <div class="q-pa-lg">
                <div class="q-py-sm" v-for="(slider, index) in sliders" :key="index">
                    <slide-grade
                    :label="slider.label"
                    :value="slider.value"
                    @changeValue="e => slider.value = e"
                    ></slide-grade>
                </div>
            </div>
        </div>
        <div class="bg-white q-mt-md">
          <div class="row justify-center">
            <div class="col q-pa-md row ">
              <q-btn-dropdown outline class="full-width" color="primary" text-color="dark" label="별점순">
                <q-list>
                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>별점순</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>별점순</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="onItemClick">
                    <q-item-section>
                      <q-item-label>별점순</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
            <div class="col-8 q-pa-md row justify-center">
              <q-btn outline color="white" class="full-width" text-color="black" label="포토후기만 모아보기 (116)" />
            </div>
          </div>
          <q-card class="q-pt-md" flat>
            <q-tabs
              v-model="tab"
              dense
              class="primary"
              active-color="secondary"
              indicator-color="secondary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="all" label="전체" />
              <q-tab name="commercial_space" label="상업공간" />
              <q-tab name="office_space" label="사무공간" />
              <q-tab name="residential_space" label="주거공간" />
              <q-tab name="facility_waste" label="시설물/폐기물" />
            </q-tabs>

            <q-separator color="grey-3" size="20px"/>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="all">
                <review-lists></review-lists>
              </q-tab-panel>

              <q-tab-panel name="commercial_space">
                <div class="text-h6">상업공간</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="office_space">
                <div class="text-h6">사무공간</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
    </div>
</template>

<script>
import SlideGrade from 'src/components/Utility/SlideGrade'
import ReviewLists from 'src/components/StoreReview/ReviewLists'
export default {
  name: 'StoreReview',
  components: {
    'slide-grade': SlideGrade,
    'review-lists': ReviewLists
  },
  data () {
    return {
      reviewRate: 4,
      tab: 'all',
      sliders: [
        {
          label: '상업 공간', value: '3.9'
        },
        {
          label: '사무공간', value: '3.8'
        },
        {
          label: '주거공간', value: '4.0'
        },
        {
          label: '시설물 / 폐기물', value: '4.9'
        }
      ]
    }
  }
}
</script>

<style>

</style>
