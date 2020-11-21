<template>
  <div class="bg-white">
    <q-layout view="hHh lpR fFf" class="bg-white">
      <!-- Header Starts here -->
      <q-header class="text-dark row justify-center bg-white" height-hint="98">
        <div :style="widthMax" class="bg-white">
          <q-card class="my-card notosanskr-medium" flat>
            <q-card-section
              class="row content-center q-px-none"
              style="height: 44px; padding: 0 16px;"
            >
              <router-link
                :to="{ path: `${path}/${activeStep - 1}` }"
                v-if="activeStep > 1"
                class="row items-center"
                style="text-decoration:none; width: 56px;"
              >
                <q-icon
                  class="text-dark"
                  name="keyboard_backspace"
                  size="24px"
                />
              </router-link>
              <router-link
                :to="{ name: 'home' }"
                class="row items-center"
                style="text-decoration:none"
                v-else
              >
                <q-icon class="text-dark" name="clear" size="24px" />
              </router-link>
              <div
                style="font-weight: 500; font-size: 16px;"
                class="col row items-center justify-center  nav-text"
              >
                견적신청
              </div>
              <q-btn
                flat
                color="dark"
                :to="{ name: 'my_page' }"
                v-if="activeStep > 1"
                label="취소"
              />
              <div style="width: 56px" v-else></div>
            </q-card-section>
          </q-card>
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
          class="q-ma-none q-pa-none bg-white"
          style="background: #F2F2F2"
          :style="widthMax"
          @onHandleStep="(_) => (activeStep = _)"
        />
      </q-page-container>
      <!-- Request Footer content here -->
      <q-footer class="row justify-center bg-white" v-if="!isBtnHidden">
        <q-toolbar
          class="bg-white text-white q-py-sm q-px-none"
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
import NavHeaderInfo from "components/Utility/NavHeaderInfo";
import ProcessIndicator from "components/Utility/ProcessIndicator";
import { toInteger } from "lodash";

export default {
  name: "RequestEstimate",
  components: {
    "process-indicator": ProcessIndicator,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      totalSteps: 6,
      activeStep: 1,
      btnLabel: "다음",
      isBtnReady: false,
      isBtnHidden: false,
      requestComplete: false,
      path: "",
    };
  },
  computed: {
    widthMax() {
      return { width: window.innerWidth + "px", "max-width": "1000px" };
    },
    stepsList() {
      return [
        {
          stepNum: 1,
          btnReady: false,
        },
        {
          stepNum: 2,
          btnReady: false,
        },
        {
          stepNum: 3,
          btnReady: false,
        },
        {
          stepNum: 4,
          btnReady: false,
          hideBtnFooter: true,
        },
        {
          routeName: "picture_space",
          stepNum: 5,
          btnReady: true,
        },
        {
          stepNum: 6,
          btnReady: true,
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
        (step) => step.stepNum == this.$route.params.step
      );
      if (found_route) {
        this.isBtnReady = found_route.btnReady;
        this.activeStep = found_route.stepNum;

        this.isBtnHidden = found_route.hideBtnFooter ? true : false;
      }
    },
    myBtnFunction() {
      // we get the current step and we move to the next
      this.$router.push(
        `${this.path}/${toInteger(this.$route.params.step) + 1}`
      );
    },
  },
  watch: {
    $route(to, from) {
      this.isBtnReady = false;
      this.setProcessIndicator();
    },
    "$route.params.step": {
      deep: true,
      handler(newStep) {
        this.activeStep = toInteger(newStep);
      },
    },
  },
  created() {
    const path = this.$route.path.split("/")[2];
    this.path = `/request/${path}`;
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
