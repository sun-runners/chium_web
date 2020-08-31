<template>
    <q-layout view="lHr lpR fFf" class="">
        <q-header class="bg-white text-primary">
          <!-- <q-bar dense class="bg-black text-white">
            <div>mobi-net</div>
            <q-icon name="email" />
            <q-space />
            <q-icon name="bluetooth" />
            <q-icon name="signal_wifi_4_bar" />
            <q-icon name="signal_cellular_4_bar" />
            <div class="gt-xs">100%</div>
            <q-icon name="battery_full" />
            <div>10:00AM</div>
          </q-bar> -->
          <q-toolbar class="justify-center no-padding">
            <q-toolbar-title class="text-center text-accent">
              <navigation :currentRoute="currentRoute" :widthMax="widthMax"></navigation>
            </q-toolbar-title>
          </q-toolbar>
        </q-header>
        <q-footer class="bg-white row wrap justify-center items-center">
          <div :style="widthMax">
            <q-toolbar class="justify-center bg-white" v-if="!isStorePage">
              <q-tabs active-color="secondary">
                  <q-route-tab name="tab1" to="/home" style="color: #999999" label="홈" icon="home"></q-route-tab>
                  <q-route-tab name="tab2" to="/reservation" style="color: #999999" label="예약" icon="calendar_today"></q-route-tab>
                  <q-route-tab name="tab3" to="/search" style="color: #999999" label="검색" icon="find_in_page"></q-route-tab>
                  <!-- <q-route-tab name="tab4" to="/store" style="color: #999999" label="업체" icon="store"></q-route-tab> -->
                  <q-route-tab name="tab5" to="/my_page" style="color: #999999" label="마이" icon="person"></q-route-tab>
                </q-tabs>
            </q-toolbar>
            <q-btn-group flat v-else class="full-width">
              <q-btn style="max-width:70px;" class="like-btn no-border-radius	btn-grp-consult notosanskr-medium" icon="favorite_border" />
              <q-btn label="견적신청하기" class="full-width no-border-radius	btn-grp-consult notosanskr-medium" color="secondary" :to="{name:'space_type'}" />
            </q-btn-group>
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
.like-btn
  background-color: #3EC5FF
  border-raduis: 0px
  width: 75px
.btn-grp-consult
  font-size: 16px
  min-height: 60px
</style>
