<template>
    <div>
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
                    <q-tab class="text-secondary q-pa-sm"  v-for="tab in tabs" :key="tab.name" v-bind="tab" />
                </q-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { get, includes } from 'lodash'

export default {
  name: 'Navigation',
  props: ['currentRoute', 'widthMax'],
  methods: {
  },
  computed: {
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
        store: [
          { name: 'company_introduction', label: '업체소개' },
          { name: 'job_introduction', label: '작업소개' },
          { name: 'late', label: '후기(633)' },
          { name: 'contact', label: '문의하기' }
        ],
        store_review: [
          { name: 'company_introduction', label: '업체소개' },
          { name: 'job_introduction', label: '작업소개' },
          { name: 'late', label: '후기(633)' },
          { name: 'contact', label: '문의하기' }
        ],
        store_work: [
          { name: 'company_introduction', label: '업체소개' },
          { name: 'job_introduction', label: '작업소개' },
          { name: 'late', label: '후기(633)' },
          { name: 'contact', label: '문의하기' }
        ],
        store_inquiry: [
          { name: 'company_introduction', label: '업체소개' },
          { name: 'job_introduction', label: '작업소개' },
          { name: 'late', label: '후기(633)' },
          { name: 'contact', label: '문의하기' }
        ],
        store_inquiry_detail: [
          { name: 'company_introduction', label: '업체소개' },
          { name: 'job_introduction', label: '작업소개' },
          { name: 'late', label: '후기(633)' },
          { name: 'contact', label: '문의하기' }
        ]
      }
      return get(tabArrays, this.currentRoute)
    },
    routeFilter () {
      return includes(['search', 'store', 'store_review', 'store_work', 'store_inquiry', 'store_inquiry_detail'], this.currentRoute)
    }
  }
}

</script>
