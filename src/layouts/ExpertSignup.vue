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
                icon="clear"
                :to="{ name: closedTo }"
                v-if="returnTo && closedTo"
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

      returnTo: "",
      closedTo: "",
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
        },
        {
          routeName: "company_information",
          indicatorColor: "#2CB3FF",
          stepNum: 2,
          returnTo: "terms_condition",
        },
        {
          routeName: "company_address",
          indicatorColor: "#1E84E3",
          stepNum: 3,
          returnTo: "company_information",
        },
        {
          routeName: "service_area",
          indicatorColor: "#1257C7",
          stepNum: 4,
          returnTo: "company_address",
        },
        {
          routeName: "representative_service",
          indicatorColor: "#0D32AE",
          stepNum: 5,
          returnTo: "service_area",
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
  border-radius: 0;
  height: 60px;
}

.btn-ready {
  color: #ffffff;
  background: #46b3fc;
}
</style>
