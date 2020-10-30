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
              <q-btn unelevated class="text-black full-width">신고하기</q-btn>
            </div>
            <div class="col-6">
              <q-btn unelevated class="text-black full-width">전화하기</q-btn>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #pageBody>
      <div class="full-height">content her</div>
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
</style>