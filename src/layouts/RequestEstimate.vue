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
          <div class="q-px-sm">
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
            @click="myBtnFunction"
          />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import ToolbarHead from "components/RequestEstimate/ToolbarHead";
import ProcessIndicator from "components/Utility/ProcessIndicator";

export default {
  name: "RequestEstimate",
  components: {
    "process-indicator": ProcessIndicator,
    "toolbar-head": ToolbarHead,
  },
  data() {
    return {
      totalSteps: 0,
      activeStep: 0,
      btnLabel: "다음",
      isBtnReady: false,
      isBtnHidden: false,
      requestComplete: false,
      nextPathRoute: "",
      prevPathRoute: "",
    };
  },
  computed: {
    widthMax() {
      return { width: window.innerWidth + "px", "max-width": "1000px" };
    },
  },
  methods: {
    setBtnReady(val) {
      this.isBtnReady = val;
      if (this.isBtnHidden && val) {
        this.isBtnHidden = !val;
      }
    },
    myBtnFunction() {
      this.$router.push({ path: this.nextPathRoute });
    },
    setLayoutState(state) {
      this.totalSteps = state.totalSteps;
      this.activeStep = state.activeStep;
      this.btnLabel = state.btnLabel;
      this.isBtnReady = state.isBtnReady;
      this.isBtnHidden = state.isBtnHidden;
      this.requestComplete = state.requestComplete;
      this.nextPathRoute = state.nextPathRoute;
      this.prevPathRoute = state.prevPathRoute;
    },
  },
};
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
