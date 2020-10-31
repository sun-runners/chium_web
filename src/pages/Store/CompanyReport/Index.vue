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
      <div class="full-height full-height q-mt-sm q-px-md notosanskr-regular">
        <div class="report-label q-mb-sm notosanskr-medium">신고사유</div>
        <div style="height: 206px">
          <textarea
            name="report"
            id="report"
            v-model="reportText"
            class="report-text full-width"
            placeholder="신고사유를 적어주세요."
            rows="9"
          ></textarea>
        </div>
        <br />
        <div class="helper-text q-pt-sm">신고사유 피드백은 따로 전달되지 않습니다.</div>
      </div>
    </template>

    <template #pageFooter>
      <q-btn
        flat
        align="center"
        class="btn-report notosanskr-medium full-width"
        :class="{'complete' : reportText.length}"
      >신고하기</q-btn>
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
      reportText: "",
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

.report-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
  margin-top: 37px;
}

.report-text {
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  background: white;
  border: none;
  padding: 16px;
  letter-spacing: -0.8px;
  color: #151515;
}

.helper-text {
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.6px;
  color: #767676;
}
.btn-report {
  font-weight: 500;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.9px;
  color: #ffffff;
  background: #bcc0c5;

  &.complete {
    background: #2cb3ff;
  }
}
</style>