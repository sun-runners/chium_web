<template>
    <q-layout view="lHr lpR fFf" class="fixed-center" container :style="{'height': window_height+'px', 'width': widnow_width+'px', 'max-width': '1000px'}">
      <q-header class="bg-white text-primary">
        <q-toolbar class="justify-center">
          <q-toolbar-title class="text-center text-accent">
            괘랑4길 16-38
            <q-btn icon="arrow_drop_down_circle" dense color="secondary" rounded flat></q-btn>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-footer>
        <q-toolbar class="justify-center">
           <q-tabs active-color="secondary">
              <q-tab name="tab1" style="color: #999999" label="홈" icon="home"></q-tab>
              <q-tab name="tab2" style="color: #999999" label="예약" icon="calendar_today"></q-tab>
              <q-tab name="tab3" style="color: #999999" label="검색" icon="search"></q-tab>
              <q-tab name="tab4" style="color: #999999" label="업체" icon="store"></q-tab>
              <q-tab name="tab5" style="color: #999999" label="마이" icon="person"></q-tab>
            </q-tabs>
        </q-toolbar>
      </q-footer>
      <q-page-container>
        <q-page style="padding-top: 60px" class="q-pa-md">
          <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            :style="{'height': window_height+'px'}"
          >
            <router-view></router-view>
          </q-scroll-area>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>

export default {
  data () {
    return {
      window_height: window.innerHeight,
      widnow_width: window.innerWidth,
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },
      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleHeight)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleHeight)
  },
  methods: {
    handleHeight () {
      this.window_height = window.innerHeight
      this.widnow_width = window.innerWidth
    }
  }
}
</script>

<style lang="stylus">

</style>
