<template>
  <div class="bg-white">
    <q-layout view="hHh lpR fFf">
      <!-- Header Starts here -->
      <q-header class="text-dark row justify-center bg-white" height-hint="98">
        <div :style="widthMax">
          <q-card class="my-card" flat>
            <q-card-section
              class="row content-center q-px-none"
              style="height: 44px; padding: 0 16px;"
            >
              <router-link
                :to="{ name: returnTo }"
                class="row items-center"
                style="text-decoration:none; width: 56px;"
              >
                <q-icon
                  class="text-dark"
                  name="keyboard_backspace"
                  size="24px"
                />
              </router-link>

              <div
                style="font-weight: 500; font-size: 16px;"
                class="notosanskr-medium col row items-center justify-center  nav-text"
              >
                전문가 가입
              </div>
              <q-btn
                flat
                color="dark"
                label="취소"
                class="cancel-btn notosanskr-medium"
                :to="{ name: cancel }"
                v-if="returnTo && cancel"
              />
              <div style="width: 56px" v-else></div>
            </q-card-section>
          </q-card>
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
      <q-page-container class="row justify-center" style="min-height:100vh;">
        <router-view
          class="q-ma-none q-pa-none"
          style="background: #F2F2F2"
          :style="widthMax"
          v-if="processVisible"
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
      processVisible: true,

      returnTo: "",
      cancel: "",
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
          returnTo: "my_page",
          cancelVisible: false,
        },
        {
          routeName: "company_information",
          indicatorColor: "#2CB3FF",
          stepNum: 2,
          returnTo: "terms_condition",
          cancelVisible: true,
        },
        {
          routeName: "company_address",
          indicatorColor: "#1E84E3",
          stepNum: 3,
          returnTo: "company_information",
          cancelVisible: true,
        },
        {
          routeName: "service_area",
          indicatorColor: "#1257C7",
          stepNum: 4,
          returnTo: "company_address",
          cancelVisible: true,
        },
        {
          routeName: "representative_service",
          indicatorColor: "#0D32AE",
          stepNum: 5,
          returnTo: "service_area",
          cancelVisible: true,
        },
        {
          routeName: "proof_company",
          indicatorColor: "#1B1492",
          stepNum: 6,
          returnTo: "representative_service",
          cancelVisible: true,
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
        this.activeStep = found_route.stepNum;
        this.activeColor = found_route.indicatorColor;
        this.returnTo = found_route.returnTo;
        found_route.cancelVisible
          ? (this.cancel = "my_page")
          : (this.cancel = "");
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
.cancel-btn {
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  text-align: right;
  letter-spacing: -0.75px;
  color: #151515;
}
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
