<template>
  <div class="bg-white">
    <q-layout view="hHh lpR fFf" class="bg-white">
      <!-- Header Starts here -->
      <q-header class="text-dark row justify-center bg-white" height-hint="98">
        <div :style="widthMax" class="bg-white">
          <toolbar-head
            :prevPathRoute="prevPathRoute"
            :activeStep="activeStep"
          />
          <!-- Progress of Process Starts here -->
          <div class="q-px-sm q-pb-md">
            <process-indicator
              :totalSteps="totalSteps"
              :activeStep="activeStep"
            ></process-indicator>
          </div>
        </div>
      </q-header>
      <!-- Child Routes content here            -->
      <q-page-container
        class="row justify-center bg-white"
        style="min-height:100vh;"
      >
        <router-view
          @next="setBtnReady"
          class="q-ma-none q-pa-none"
          style="background: #F2F2F2"
          :style="widthMax"
          @setStateLayout="setLayoutState"
          @setEnquiryData="setEnquiryData"
        />
      </q-page-container>
      <!-- Request Footer content here -->
      <q-footer class="row justify-center bg-white" v-if="!isBtnHidden">
        <q-toolbar
          class="bg-white text-white q-py-none q-px-none"
          :style="widthMax"
        >
          <q-btn
            class="full-width notosanskr-regular btn-footer"
            :class="{ 'btn-ready': isBtnReady }"
            :disable="!isBtnReady"
            style="font-size:17px;"
            :rounded="false"
            flat
            :label="btnLabel"
            @click.once="__onHandleNextStep"
          />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import ToolbarHead from 'components/RequestEstimate/ToolbarHead'
import ProcessIndicator from 'components/Utility/ProcessIndicator'

export default {
  name: 'RequestEstimate',
  components: {
    'process-indicator': ProcessIndicator,
    'toolbar-head': ToolbarHead
  },
  data () {
    return {
      totalSteps: 0,
      activeStep: 0,
      btnLabel: '다음',
      isBtnReady: false,
      isBtnHidden: false,
      requestComplete: false,
      nextPathRoute: '',
      prevPathRoute: '',
      category: null,
      patchData: null
    }
  },
  computed: {
    widthMax () {
      return { width: window.innerWidth + 'px', 'max-width': '1000px' }
    }
  },
  methods: {
    setEnquiryData (data) {
      console.log(data)
      // console.log(`${Object.keys(data)[0]} ${data[Object.keys(data)[0]]}`)
      if (data.category) { // 카테고리
        this.category = data.category
      }
      // if (data.patchData) { // 데이터
      //   this.patchData = data.patchData
      // }
      else {
        // eslint-disable-next-line no-unused-vars
        // var temp = new Object()
        // for (var i = 0; i < Object.keys(data).length; i++) {
        //   const key = Object.keys(data)[i]
        //   temp[key] = data[key]
        // }
        this.patchData = data
      }
    },
    setBtnReady (val) {
      this.isBtnReady = val
      if (this.isBtnHidden && val) {
        this.isBtnHidden = !val
      }
    },
    __onHandleNextStep () {
      const key = Object.keys(this.patchData)[0]
      if (this.activeStep === 1) {
        this.$store.commit('setCategory', this.category)
      } else {
        console.log(this.patchData)
        this.$store.commit('patchEnquiry', this.patchData)
      }
      this.$router.push({ path: this.nextPathRoute })
    },
    setLayoutState (state) {
      this.totalSteps = state.totalSteps
      this.activeStep = state.activeStep
      this.btnLabel = state.btnLabel
      this.isBtnReady = state.isBtnReady
      this.isBtnHidden = state.isBtnHidden
      this.requestComplete = state.requestComplete
      this.nextPathRoute = state.nextPathRoute
      this.prevPathRoute = state.prevPathRoute
      this.patchData = state.patchData
    }
  }
}
</script>

<style lang="scss">
.btn-footer {
  color: #919698;
  background: #bcc0c5;
  border-radius: 0;
  height: 60px;
}

.btn-ready {
  color: #ffffff;
  background: #46b3fc;
}
</style>
