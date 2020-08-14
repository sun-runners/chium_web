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
      <!-- Child Routes content here -->
      <q-page-container class="row justify-center bg-grey-11" style="min-height:100vh;">
        <router-view class="row justify-center q-ma-none bg-white" :style="widthMax" />
      </q-page-container>
      <!-- Request Footer content here -->
      <q-footer class="row justify-center bg-grey-11 q-py-sm">
        <q-toolbar class="bg-white text-white" :style="widthMax">
          <q-toolbar-title>
            <q-btn
              color="secondary"
              class="full-width notosanskr-regular"
              style="font-size:17px; padding: 17px 0;"
              label="다음"
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
      activeStep: 3,
      activeColor: "#55E2EB",
    };
  },
  computed: {
    widthMax() {
      return { width: window.innerWidth + "px", "max-width": "1000px" };
    },
  },
  mounted() {
    console.log(this.widthMax);
  },
};
</script>

<style lang="scss" scoped></style>
