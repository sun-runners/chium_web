<template>
  <q-layout view="lHr lpR fFf" class="">
    <q-footer class="bg-white row wrap justify-center items-center">
      <div :style="widthMax">
        <q-toolbar class="justify-center bg-white">
          <q-tabs active-color="secondary">
            <q-route-tab
              name="home"
              to="/home"
              style="color: #999999"
              label="홈"
              icon="home"
            ></q-route-tab>
            <q-route-tab
              name="reservation"
              to="/reservation"
              style="color: #999999"
              label="예약"
              icon="calendar_today"
            ></q-route-tab>
            <q-route-tab
              name="search"
              to="/search"
              style="color: #999999"
              label="검색"
              icon="find_in_page"
              @click="notReady"
            ></q-route-tab>
            <q-route-tab
              name="store"
              to="/store"
              style="color: #999999"
              label="업체"
              icon="store"
              @click="notReady"
            ></q-route-tab>
            <q-route-tab
              name="my_page"
              to="/my_page"
              style="color: #999999"
              label="마이"
              icon="person"
            ></q-route-tab>
          </q-tabs>
        </q-toolbar>
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
              <router-view @alertNotReady="alertNotReady"></router-view>
            </q-page>
          </div>
        </div>
      </transition-group>
    </q-page-container>

    <q-dialog v-model="dialogNotReady">
      <q-card align="center">
        <q-card-section>
          <div class="text-h5">준비중인 페이지입니다.</div>
        </q-card-section>
        <q-card-section>
          고객님, 죄송합니다. 현재는 베타서비스(1월 ~ 3월) 기간이며, 4월 초로
          정식 런칭예정입니다.
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="확인" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      window_height: window.innerHeight,
      widnow_width: window.innerWidth,
      dialogNotReady: false
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
    },
    notReady (e, go) {
      e.navigate = false
      this.dialogNotReady = true
    },
    alertNotReady () {
      this.dialogNotReady = true
    }
  },
  computed: {
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
