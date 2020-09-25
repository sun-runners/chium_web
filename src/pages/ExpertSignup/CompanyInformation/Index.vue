<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-md q-pt-sm">
          <div class="title notosanskr-regular">업체 기본정보</div>
          <div class="name-section notosanskr-regular">
            <div class="name-text q-pb-sm">업체 명</div>
            <input
              type="text"
              class="name-field full-width q-pa-sm"
              placeholder="업체명을 입력해주세요."
            />
          </div>
        </div>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer"
        style="font-size:17px;"
        :rounded="false"
        flat
        label="다음"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "TermsCondition",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleSlots: {
        bgBody: "white",
        bgFooter: "white",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 27px;
  line-height: 40px;
  letter-spacing: -1.35px;
  color: #151515;
}
.name-section {
  margin-top: 36px;
  .name-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
  .name-field {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;
  }
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
