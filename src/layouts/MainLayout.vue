<template>
    <q-layout view="lHr lpR fFf" class="">
      <q-header class="bg-white text-primary">
        <q-toolbar class="justify-center">
          <q-toolbar-title class="text-center text-accent">
            <div v-if="currentRoute === 'home'">
              괘랑4길 16-38 {{ currentRoute }}
              <q-btn icon="arrow_drop_down_circle" dense color="secondary" rounded flat></q-btn>
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-footer>
        <q-toolbar class="justify-center">
           <q-tabs active-color="secondary">
              <q-route-tab name="tab1" to="home" style="color: #999999" label="홈" icon="home"></q-route-tab>
              <q-route-tab name="tab2" to="home" style="color: #999999" label="예약" icon="calendar_today"></q-route-tab>
              <q-route-tab name="tab3" to="search" style="color: #999999" label="검색" icon="search"></q-route-tab>
              <q-route-tab name="tab4" to="home" style="color: #999999" label="업체" icon="store"></q-route-tab>
              <q-route-tab name="tab5" to="home" style="color: #999999" label="마이" icon="person"></q-route-tab>
            </q-tabs>
        </q-toolbar>
      </q-footer>
      <q-page-container class="doc-container">
        <div class="row justify-center">
          <div class="col" :style="{'width': widnow_width+'px', 'max-width': '1000px'}">
            <q-page style="padding-top: 60px" class="q-pa-md">
              <router-view></router-view>
            </q-page>
          </div>
        </div>
      </q-page-container>
    </q-layout>
</template>

<script>

import { get } from 'lodash'

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
    console.log(this)
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
  },
  computed: {
    currentRoute () {
      const route = get(this, '$route', '')
      const { name } = route
      return name
    }
  }
}
</script>

<style lang="stylus">

</style>
