<template>
  <q-layout view="lHr lpR fff" class="">
      <q-header class="bg-white text-primary">
        <q-toolbar class="justify-center no-padding">
          <q-toolbar-title class="text-center text-accent">
            <navigation :currentRoute="currentRoute" :widthMax="widthMax" :headingName="currentRoute"></navigation>
          </q-toolbar-title>
        </q-toolbar>
        <process-indicator v-if="currentRoute === '회원가입'" :totalSteps="totalSteps" :activeStep="stepData.currentStep" />
      </q-header>
      <q-footer class="bg-white row justify-center items-center ">
        <div class="row" v-if="currentRoute == '로그인'">
          <div class="col-12  ">
            <p class="text-grey-7 q-mb-lg text-center">SNS 계정으로 진행하기</p>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col flex justify-center items-center">
                <q-btn size="50px" class="kakao" round flat :icon="`img:${require('src/assets/sns logo/kakao.svg')}`"/>
              </div>

              <div class="col flex justify-center items-center">
                <q-btn size="50px" class="fb" round flat :icon="`img:${require('src/assets/sns logo/fb.svg')}`"/>
              </div>

              <div class="col flex justify-center items-center">
                <q-btn size="10px" class="naver" round flat :icon="`img:${require('src/assets/sns logo/naver.svg')}`"/>
              </div>

              <div class="col flex justify-center items-center">
                <q-btn size="50px" class="apple" round flat :icon="`img:${require('src/assets/sns logo/apple.svg')}`"/>
              </div>
            </div>
          </div>
        </div>
        <!-- <h1 class="text-black">mmm {{ isNextBtnReady }}</h1> -->
        <q-btn
          v-if="currentRoute == '회원가입'"
          @click="__onHandleNextStep"
          label="다음"
          class="next-btn full-width"
          :class="{ 'next-btn-ready': isNextBtnReady }"
          :disable="!isNextBtnReady"
          flat
        />
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
                <router-view
                  @whenReady="_ => isNextBtnReady = _"
                  @setStepData="_ => stepData = _"
                >
                </router-view>
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
import ProcessIndicator from 'src/components/Utility/ProcessIndicator'

export default {
  components: {
    Navigation,
    ProcessIndicator
  },
  data () {
    return {
      totalSteps: 4,
      stepData: {},
      isNextBtnReady: false,
      window_height: window.innerHeight,
      widnow_width: window.innerWidth
    }
  },
  created () {
    console.log(this)
    window.addEventListener('resize', this.handleHeight())
  },
  destroyed () {
    window.removeEventListener('resize', this.handleHeight())
  },
  methods: {
    handleHeight () {
      this.window_height = window.innerHeight
      this.widnow_width = window.innerWidth
    },
    __onHandleNextStep () {
      if (this.isFinalStep) {
        alert('done submit here!')
        return
      }
      this.$router.push({ path: `/auth/sign_up/${this.stepData.routeNext}` })
    }
  },
  computed: {
    isStorePage () {
      return [
        'store_detail',
        'store_review',
        'store_work',
        'store_inquiry'
      ].includes(this.currentRoute)
    },
    currentRoute () {
      const route = get(this, '$route', '')
      const { name } = route
      return name
    },
    widthMax () {
      return { width: this.widnow_width + 'px', 'max-width': '1000px' }
    },
    isFinalStep () {
      return (this.stepData.currentStep === this.totalSteps)
    }
  }
}
</script>

<style lang="stylus">
.next-btn
  color: #ffffff
  background-color: #BCC0C5
  height: 52px
  border-radius: 0px
  font-family: 'notosanskr-regular'
  font-size: 18px

.next-btn-ready
  background-color: #2CB3FF

.like-btn
  background-color: #3EC5FF
  border-raduis: 0px
  width: 75px

.btn-grp-consult
  font-size: 16px
  min-height: 60px

.kakao
  background-color: #FFDF2F

.fb
  background-color: #465C9C

.naver
  background-color: #26D777

.apple
  background-color: #171717
</style>
