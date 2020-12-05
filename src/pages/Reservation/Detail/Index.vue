<template>
  <div>
    <nav-header-info
      :name="'예약상세보기'"
      class="full-width"
      backTo="reservation"
    />
    <div style="background: #F2F2F2; min-height: 100vh;" class="q-pa-md">
      <!-- ------------------------ Quote info ------------------------ -->
      <quote-info></quote-info>
      <!-- ------------------------ contact options ------------------------ -->
      <contact-options></contact-options>
      <!-- ------------------------ -Request Info ---------------------- -->
      <request-info></request-info>
      <!-- ------------------------ -Demolition Site Info ---------------------- -->
      <demolition-site></demolition-site>
      <!-- ------------------------ -Work Content Info ---------------------- -->
      <work-content-info></work-content-info>
      <!-- ------------------------ -Company Information ---------------------- -->
      <company-info></company-info>
    </div>
  </div>
</template>

<script>
import RequestInfo from "components/ReservationDetails/RequestInfo";
import DemolitionSite from "components/ReservationDetails/DemolitionSite";
import WorkContentInfo from "components/ReservationDetails/WorkContentInfo";
import CompanyInfo from "components/ReservationDetails/CompanyInfo.vue";
import ContactOptions from "components/ReservationDetails/ContactOptions";
import QuoteInfo from "components/ReservationDetails/QuoteInfo";
import NavHeaderInfo from "components/Utility/NavHeaderInfo";
export default {
  components: {
    "request-info": RequestInfo,
    "demolition-site": DemolitionSite,
    "work-content-info": WorkContentInfo,
    "company-info": CompanyInfo,
    "contact-options": ContactOptions,
    "quote-info": QuoteInfo,
    "nav-header-info": NavHeaderInfo,
  },
};
</script>

<style scoped></style>
