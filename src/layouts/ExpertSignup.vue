<template>
  <div class="bg-grey">
    <q-layout view="hHh lpR fFf" class="bg-red">
      <!-- Header Starts here -->
      <q-header
        class="text-dark row justify-center bg-grey-11"
        height-hint="98"
      >
        <div :style="widthMax" class="bg-white">
          <nav-header-info
            name="전문가 가입"
            :backTo="returnTo"
            closedTo="store"
          ></nav-header-info>
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
      <q-page-container
        class="row justify-center bg-grey-11"
        style="min-height:100vh;"
      >
        <router-view
          class="q-ma-none q-pa-none"
          style="background: #F2F2F2"
          :style="widthMax"
        />
      </q-page-container>
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
      isBtnHidden: false,
      redirectTo: "",
      returnTo: "",
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
          routeName: "terms_condition",
          indicatorColor: "#55E2EB",
          stepNum: 1,
          btnReady: false,
          redirect: "floor_space",
          returnTo: "",
        },
      ];
    },
  },
  methods: {
    setBtnReady(val) {
      this.isBtnReady = val;
      if (val) {
        this.isBtnHidden = false;
      } else {
        this.setProcessIndicator();
      }
    },
    setProcessIndicator() {
      const found_route = this.stepsList.find(
        (step) => step.routeName == this.$route.name
      );
      if (found_route) {
        this.isBtnReady = found_route.btnReady;
        this.activeStep = found_route.stepNum;
        this.activeColor = found_route.indicatorColor;
        this.returnTo = found_route.returnTo;
        if (found_route.redirect) {
          this.redirectTo = found_route.redirect;
          this.requestComplete = false;
        } else {
          this.redirectTo = "";
          this.requestComplete = true;
        }
        this.isBtnHidden = found_route.hideBtnFooter ? true : false;
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
      this.isBtnReady = false;
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
  border-radius: 0;
  height: 60px;
}

.btn-ready {
  color: #ffffff;
  background: #46b3fc;
}
</style>
