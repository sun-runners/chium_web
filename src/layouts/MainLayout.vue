<template>
    <q-layout view="lHr lpR fFf" class="">
        <q-header class="bg-white text-primary">
          <q-toolbar class="justify-center no-padding">
            <q-toolbar-title class="text-center text-accent">
              <navigation :currentRoute="currentRoute" :widthMax="widthMax"></navigation>
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
        <h6>{{ currentRoute }}</h6>
        <q-footer>
          <q-toolbar class="justify-center bg-white" v-if="!isStorePage">
            <q-tabs active-color="secondary">
                <q-route-tab name="tab1" to="/home" style="color: #999999" label="홈" icon="home"></q-route-tab>
                <q-route-tab name="tab2" to="/reservation" style="color: #999999" label="예약" icon="calendar_today"></q-route-tab>
                <q-route-tab name="tab3" to="/search" style="color: #999999" label="검색" icon="find_in_page"></q-route-tab>
                <!-- <q-route-tab name="tab4" to="/store" style="color: #999999" label="업체" icon="store"></q-route-tab> -->
                <q-route-tab name="tab5" to="/my_page" style="color: #999999" label="마이" icon="person"></q-route-tab>
              </q-tabs>
          </q-toolbar>
          <div :style="widthMax" v-else class="row">
            <div class="col-1"><q-btn color="secondary" flat class="full-width" icon="mail" /></div>
            <div class="col-11"><q-btn color="secondary" flat class="full-width" icon="mail" label="On Left" /></div>
          </div>
        </q-footer>
        <q-page-container class="doc-container">
          <transition-group
            appear
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <div class="row justify-center" key="div-container">
              <div class="col" :style="widthMax">
                <q-page style="padding-top: 60px" class="no-padding">
                  <router-view></router-view>
                </q-page>
              </div>
            </div>
          </transition-group>
        </q-page-container>

    </q-layout>
</template>

<script>

import { get } from 'lodash'
import Navigation from 'src/components/NavHeader/Navigation'

export default {
  components: {
    Navigation
  },
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
    isStorePage () {
      return [
        'store',
        'store_review',
        'store_work',
        'store_inquiry'
      ].
      includes(this.currentRoute);
    },
    currentRoute () {
      const route = get(this, '$route', '')
      const { name } = route
      return name
    },
    widthMax () {
      return { width: this.widnow_width + 'px', 'max-width': '1000px' }
    }
  }
}
</script>

<style lang="stylus">
</style>
