<template>
  <div class="bg-grey">
    <q-layout view="hHh lpR fFf" class="bg-red">
      <!-- Header Starts here -->
      <q-header class="text-dark row justify-center bg-grey-11" height-hint="98">
        <div :style="widthMax" class="bg-white">
          <nav-header-info name="견적신청"></nav-header-info>
          <div class="q-px-sm">
            <process-indicator
              :totalSteps="totalSteps"
              :activeStep="activeStep"
              :activeColor="activeColor"
            ></process-indicator>
          </div>
        </div>
      </q-header>
      <!-- Child Routes content here            -->
      <q-page-container class="row justify-center bg-grey-11" style="min-height:100vh;">
        <router-view
          @next="(val)=> isBtnReady = val"
          class="q-ma-none q-pa-none"
          style="background: #F2F2F2"
          :style="widthMax"
        />
      </q-page-container>
      <!-- Request Footer content here -->
      <q-footer class="row justify-center bg-grey-11">
        <q-toolbar class="bg-white text-white q-py-sm" :style="widthMax">
          <q-toolbar-title>
            <q-btn
              class="full-width notosanskr-regular btn-footer"
              :class="{'btn-ready' : isBtnReady }"
              :disable="!isBtnReady"
              style="font-size:17px;"
              :label="btnLabel"
              @click="myBtnFunction"
            />
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import NavHeaderInfo from "components/Utility/NavHeaderInfo";
import ProcessIndicator from "components/Utility/ProcessIndicator";
export default {
  name: "RequestEstimate",
  components: {
    "process-indicator": ProcessIndicator,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      totalSteps: 6,
      activeStep: 0,
      activeColor: "",
      btnLabel: "다음",
      isBtnReady: false,
      redirectTo: "",
      requestComplete: false,
    };
  },
  computed: {
    widthMax() {
      return { width: window.innerWidth + "px", "max-width": "1000px" };
    },
    stepsList() {
      return [
        {
          routeName: "space_type",
          indicatorColor: "#55E2EB",
          stepNum: 1,
          redirect: "floor_space",
        },
        {
          routeName: "floor_space",
          indicatorColor: "#46B3FC",
          stepNum: 2,
          redirect: "space_type",
        },
      ];
    },
  },
  methods: {
    setProcessIndicator() {
      const found_route = this.stepsList.find(
        (step) => step.routeName == this.$route.name
      );
      if (found_route) {
        if (this.activeStep < found_route.stepNum) {
          this.isBtnReady = false;
        }
        this.activeStep = found_route.stepNum;
        this.activeColor = found_route.indicatorColor;
        if (found_route.redirect) {
          this.redirectTo = found_route.redirect;
          this.requestComplete = false;
        } else {
          this.redirectTo = "";
          this.requestComplete = true;
        }
      }
    },
    myBtnFunction() {
      if (this.requestComplete) {
        // Reqest Estimate Completion
        console.log("request complete");
      } else {
        this.$router.push({ name: this.redirectTo });
      }
    },
  },
  watch: {
    $route(to, from) {
      this.setProcessIndicator();
    },
  },
  created() {
    this.setProcessIndicator();
  },
};
</script>

<style lang="scss">
.btn-footer {
  color: #919698;
  background: #e8eaeb;
  border-radius: 8px;
  max-height: 60px;
}

.btn-ready {
  color: #ffffff;
  background: #46b3fc;
}
</style>
