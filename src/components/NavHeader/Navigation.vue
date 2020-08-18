<template>
    <div>
      <div class="row">
        <div v-if="doesRouteHasBackButton" class="col-1">
          <q-btn flat icon="keyboard_backspace" @click="$router.go(-1)" />
        </div>
        <div :class="doesRouteHasBackButton ? 'col-11' : 'col-12' + ' text-center'">
          <div v-if="currentRoute === 'home'" >
            괘랑4길 16-38
            <q-btn icon="arrow_drop_down_circle" dense color="secondary" rounded flat></q-btn>
          </div>
          <div v-if="currentRoute === 'my_page'" style="height: 44px; font-size: 16px;" >
            <p class="q-py-sm text-dark notosanskr-medium">마이페이지</p>
          </div>
          <div v-if="currentRoute === 'reservation'" style="height: 44px; font-size: 16px;" >
            <p class="q-py-sm text-dark notosanskr-medium">작업예약</p>
          </div>
          <div v-if="currentRoute === 'reservation_detail'" style="height: 44px; font-size: 16px;" >
            <p class="q-py-sm text-dark notosanskr-medium">예약상세보기</p>
          </div>
          <div v-if="currentRoute === 'request_estimate'" style="height: 44px; font-size: 16px;" >
            <p class="q-py-sm text-dark notosanskr-medium">견적신청</p>
          </div>
        </div>
      </div> 
      <div class="row justify-center" v-if="routeFilter">
          <div class="col" :style="widthMax">
              <div v-if="currentRoute === 'search'">
                <q-input filled borderless placeholder="철거업체 통합검색" class="full-width">
                    <template v-slot:prepend>
                        <q-icon name="search"  />
                    </template>
                    <template v-slot:append>
                        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                    </template>
                </q-input>
              </div>
              <q-tabs
                  inline-label
                  dense
                  align="justify"
                  class="q-mt-sm"
              >
                  <q-route-tab 
                  class="text-secondary q-pa-sm"  
                  v-for="tab in tabs" 
                  :keys="tab.name" 
                  :name="tab.name" 
                  v-bind="tab" 
                  :to="{name: tab.routeName}"
                  />
              </q-tabs>
          </div>
      </div>
    </div>
</template>

<script>
import { get, includes, size } from 'lodash'

export default {
  name: 'Navigation',
  props: ['currentRoute', 'widthMax'],
  data(){
    return {
      storeTab: 'mails'
    }
  },
  mounted() {
    console.log(this);
  },
  methods: {
  },
  computed: {
    doesRouteHasBackButton() {
      const { fullPath } = this.$route;

      return size(fullPath.match(/[\W]/g)) > 1
    },
    storeHeadingName () {
      
    },
    tabs () {
      const tabArrays = {
        search: [
          { name: 'company_name', label: '전국' },
          { name: 'place', label: '서울시' },
          { name: 'place', label: '경기도' },
          { name: 'place', label: '인천' },
          { name: 'place', label: '대구' },
          { name: 'place', label: '경남/경북' },
          { name: 'place', label: '전라/충청' }
        ],
        store_detail: [
          { name: 'company_introduction', label: '업체소개', routeName: 'store_detail' },
          { name: 'introduction_work', label: '작업소개', routeName: 'store_work' },
          { name: 'reviews', label: '후기(633)', routeName: 'store_review' },
          { name: 'inquire', label: '문의하기', routeName: 'store_inquiry' }
        ],
        store_work: [
          { name: 'company_introduction', label: '업체소개', routeName: 'store_detail' },
          { name: 'introduction_work', label: '작업소개', routeName: 'store_work' },
          { name: 'reviews', label: '후기(633)', routeName: 'store_review' },
          { name: 'inquire', label: '문의하기', routeName: 'store_inquiry' }

        ],
        store_review: [
          { name: 'company_introduction', label: '업체소개', routeName: 'store_detail' },
          { name: 'introduction_work', label: '작업소개', routeName: 'store_work' },
          { name: 'reviews', label: '후기(633)', routeName: 'store_review' },
          { name: 'inquire', label: '문의하기', routeName: 'store_inquiry' }

        ],
        store_inquiry: [
          { name: 'company_introduction', label: '업체소개', routeName: 'store_detail' },
          { name: 'introduction_work', label: '작업소개', routeName: 'store_work' },
          { name: 'reviews', label: '후기(633)', routeName: 'store_review' },
          { name: 'inquire', label: '문의하기', routeName: 'store_inquiry' }

        ],
        store_inquiry_detail: [
          { name: 'company_introduction', label: '업체소개', routeName: 'store_detail' },
          { name: 'introduction_work', label: '작업소개', routeName: 'store_work' },
          { name: 'reviews', label: '후기(633)', routeName: 'store_review' },
          { name: 'inquire', label: '문의하기', routeName: 'store_inquiry' }
        ],
        reservation: [
          { name: 'request_my_quote', label: '내 견적 신청', routeName: '' },
          { name: 'my_quote_auction', label: '내 견적 경매', routeName: '' },
          { name: 'work_complete', label: '작업완료', routeName: '' },
        ],
      }
      return get(tabArrays, this.currentRoute)
    },
    routeFilter () {
      return includes(['search', 'store_detail', 'store_review', 'store_work', 'store_inquiry', 'store_inquiry_detail', 'reservation'], this.currentRoute)
    }
  }
}

</script>
