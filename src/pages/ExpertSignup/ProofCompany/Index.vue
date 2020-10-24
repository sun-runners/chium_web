<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-md q-pt-sm">
          <div class="title notosanskr-regular">업체증빙</div>
          <!-- company info section -->
          <div class="company-info-section notosanskr-regular">
            <!-- Registration License Set -->
            <div class="registration-text q-pb-sm notosanskr-medium">사업자등록번호</div>
            <custom-file-upoad label="사업자등록번호를 첨부해주세요." @changed="registrationNumberSet" />
            <!-- Permit License Set -->
            <div class="permit-license-text q-pb-sm q-mt-lg notosanskr-medium">허가증 및 면허</div>
            <custom-file-upoad label="사업자등록번호를 첨부해주세요." @changed="permitLicenseSet" />
          </div>
          <div
            class="note q-pa-md q-mt-lg notosanskr-regular"
            v-if="permitLicense && registrationNumber"
          >
            ※안전한 서비스와 전문성 확인을 위해 선택하신 전문 분야의 허가증 및
            면허증을 첨부해주세요.
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
        label="가입신청 완료"
        :disabled="!permitLicense && !registrationNumber"
        :class="{ 'btn-ready': permitLicense && registrationNumber }"
        @click="registrationCompleted"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
import CustomFileUpload from "src/components/Utility/CustomFileUpload";
export default {
  name: "ProofCompany",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
    "custom-file-upoad": CustomFileUpload,
  },
  data() {
    return {
      styleSlots: {
        bgBody: "white",
        bgFooter: "white",
      },
      permitLicense: null,
      registrationNumber: null,
    };
  },
  methods: {
    registrationCompleted() {
      this.$router.push({ name: "registration_completed" });
    },
    registrationNumberSet(file) {
      console.log("registration number file: " + file.name);
      this.registrationNumber = file;
    },
    permitLicenseSet(file) {
      console.log("permit license File " + file.name);
      this.permitLicense = file;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 27px;
  line-height: 40px;
  letter-spacing: -1.35px;
  color: #151515;
}

.company-info-section {
  margin-top: 36px;

  .registration-text,
  .permit-license-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
}
.note {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.6px;
  color: #767676;
  background: #f7f7f6;
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
