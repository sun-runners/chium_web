<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-pa-sm">
          <div class="title notosanskr-regular">약관동의</div>
          <div class="sub-title notosanskr-regular q-pt-xs">
            전문 업체로 가입하기 위해 아래의 약관에 <br />동의해주세요.
          </div>
          <!-- check sections starts here -->
          <div class="notosanskr-medium row items-center" style="height: 68px;">
            <q-icon class="text-dark" size="24px" @click="agreeAll = !agreeAll">
              <img src="~assets/circle_check_blue.svg" v-if="agreeAll" />
              <img src="~assets/circle_check_grey.svg" v-else />
            </q-icon>
            <div class="item-text">
              전체동의
            </div>
          </div>
          <q-separator></q-separator>
          <div
            class="notosanskr-regular row justify-between items-center q-pr-sm"
            style="height: 64px;"
          >
            <div class="row items-center">
              <q-icon
                class="text-dark"
                size="24px"
                @click="agreements.termsService = !agreements.termsService"
              >
                <img
                  src="~assets/circle_check_blue.svg"
                  v-if="agreements.termsService"
                />
                <img src="~assets/circle_check_grey.svg" v-else />
              </q-icon>
              <div class="item-text required">
                [필수]서비스 이용약관
              </div>
            </div>
            <button class="view-content notosankr-medium">
              내용보기
              <span class="material-icons" style="font-size: 24px;"
                >keyboard_arrow_right</span
              >
            </button>
          </div>
          <q-separator></q-separator>
          <div
            class="notosanskr-regular row justify-between items-center q-pr-sm"
            style="height: 64px;"
          >
            <div class="row items-center">
              <q-icon
                class="text-dark"
                size="24px"
                @click="agreements.privacyPolicy = !agreements.privacyPolicy"
              >
                <img
                  src="~assets/circle_check_blue.svg"
                  v-if="agreements.privacyPolicy"
                />
                <img src="~assets/circle_check_grey.svg" v-else />
              </q-icon>
              <div class="item-text required">
                [필수] 개인정보 처리방침
              </div>
            </div>
            <button class="view-content notosankr-medium">
              내용보기
              <span class="material-icons q-px-none" style="font-size: 24px;"
                >keyboard_arrow_right</span
              >
            </button>
          </div>
          <q-separator></q-separator>
        </div>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer"
        style="font-size:17px;"
        :class="{ 'btn-ready': agreeAll }"
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
      agreeAll: false,
      agreements: {
        termsService: false,
        privacyPolicy: false,
      },
    };
  },
  methods: {
    checkAll() {
      this.agreeAll = !this.agreeAll;
    },
  },
  watch: {
    agreements: {
      handler: function(value) {
        value.termsService && value.privacyPolicy
          ? (this.agreeAll = true)
          : (this.agreeAll = false);
      },
      deep: true,
      immediate: true,
    },
    agreeAll(value, from) {
      if (value) {
        this.agreements.termsService = true;
        this.agreements.privacyPolicy = true;
      }
      if (
        from &&
        this.agreements.termsService &&
        this.agreements.privacyPolicy
      ) {
        this.agreements.termsService = false;
        this.agreements.privacyPolicy = false;
      }
      console.log(from, value);
    },
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
  margin-bottom: 24px;
}
.item-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.9px;
  color: #151515;
  padding-left: 16px;
  &.required {
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.75px;
    color: #151515;
  }
}
.view-content {
  padding: 2px 0px 2px 16px;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.65px;
  color: #5a5a5a;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
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
