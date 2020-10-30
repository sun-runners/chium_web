<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <div class="full-width bg-white">
        <nav-header-info :name="'신고하기'" class="full-width" backTo="store_company_detail" />
        <div class="notosanskr-regular q-px-md q-py-lg">
          <div class="company-name notosanskr-medium">어게인업</div>
          <div class="company-phone">
            010-2345-6789
            <q-badge align="middle" class="badge">인증완료</q-badge>
          </div>
        </div>
      </div>
    </template>

    <template #pageBody>
      <div class="full-height full-height q-mt-sm q-px-md notosanskr-regular">Company Rsesport</div>
    </template>

    <template #pageFooter>
      <q-btn flat align="center" class="btn-report notosanskr-medium full-width">신고하기</q-btn>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "CompanyReport",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleSlots: {
        bgHeader: "white",
        bgBody: "#F3F3F3",
        bgFooter: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.company-name {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.9px;
  color: #15161a;
}
.company-phone {
  font-size: 15px;
  line-height: 22px;
  color: #15161a;
  margin-top: 9px;
  .badge {
    font-weight: 500;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.6px;
    color: #ffffff;
    background: #195de4;
    border-radius: 4px;
    margin-left: 8px;
  }
}
.btn-report {
  font-weight: 500;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.9px;
  color: #ffffff;
  background: #bcc0c5;

  .complete {
    background: #2cb3ff;
  }
}
</style>