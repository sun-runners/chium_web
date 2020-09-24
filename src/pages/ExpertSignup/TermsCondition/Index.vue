<template>
  <default-template>
    <template #pageBody>
      <div class="bg-white">
        <div class="q-pa-sm">
          <div class="title notosanskr-regular">약관동의</div>
          <div class="sub-title notosanskr-regular q-pt-xs">
            전문 업체로 가입하기 위해 아래의 약관에 <br />동의해주세요.
          </div>
          <!-- check sections starts here -->
        </div>
      </div>
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
    return {};
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
.sub-title {
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.7px;
  color: #959595;
}
</style>
