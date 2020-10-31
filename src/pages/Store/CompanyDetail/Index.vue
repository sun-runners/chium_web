<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <div class="full-width bg-white">
        <nav-header-info :name="'업체 상세정보'" class="full-width" backTo="store_detail" />
        <div class="notosanskr-regular q-px-md q-py-lg">
          <div class="company-name notosanskr-medium">어게인업</div>
          <div class="company-phone">
            010-2345-6789
            <q-badge align="middle" class="badge">인증완료</q-badge>
          </div>
          <!-- Actions -->
          <div class="row q-col-gutter-sm q-mt-lg">
            <div class="col-6">
              <q-btn
                unelevated
                class="text-black full-width"
                :to="{ name: 'store_company_report'}"
              >신고하기</q-btn>
            </div>
            <div class="col-6">
              <q-btn unelevated class="text-black full-width">전화하기</q-btn>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #pageBody>
      <div class="full-height full-height bg-white q-mt-sm q-px-md notosanskr-regular">
        <div class="business-text notosanskr-medium">사업자정보</div>
        <div class="row" style="margin-top: 12px; border-top: #15161a 2px solid;">
          <div
            class="col-12 row"
            style="border-bottom: 1px solid #e0e0e0;"
            v-for="(company, i) in companyInfo"
            :key="i"
          >
            <div class="company-label">{{ company.label }}</div>
            <div class="company-data col items-center row items-center">{{ company.data}}</div>
          </div>
        </div>
      </div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "CompanyDetail",
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

      companyInfo: [
        { label: "상호 명", data: "어게인업 (Again up)" },
        { label: "대표자", data: "홍길동" },
        { label: "사업자등록번호", data: "1234567899" },
        {
          label: "사업장 소재지",
          data:
            "치움도 폐기시 클리닝구 폐기로380번길 5-20 1층 일부 (우 : 10406)",
        },
        { label: "이메일", data: "chium01@naver.com" },
      ],
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

button {
  height: 44px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
}

.business-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.7px;
  color: #15161a;
  padding-top: 36px;
}

.company-label {
  height: 48px;
  font-weight: 500;
  font-size: 13px;
  line-height: 48px;
  letter-spacing: -0.65px;
  color: #767676;
  width: 114px;
}

.company-data {
  font-size: 13px;
  padding: 12px;
  border-left: 1px solid #e0e0e0;
  letter-spacing: -0.65px;
  color: #15161a;
}
</style>