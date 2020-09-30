<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-md q-pt-sm">
          <div class="title notosanskr-regular">업체증빙</div>
          <!-- company info section -->
          <div class="company-info-section notosanskr-regular">
            <div class="registration-text q-pb-sm notosanskr-medium">
              사업자등록번호
            </div>
            <q-file
              outlined
              class="registration-field"
              label="사업자등록번호를 첨부해주세요."
            >
              <template v-slot:append>
                <div class="attachment notosanskr-medium">첨부</div>
              </template>
            </q-file>

            <div class="permit-license-text q-pb-sm q-mt-lg notosanskr-medium">
              허가증 및 면허
            </div>

            <q-file
              outlined
              class="permit-license-field"
              label="사업자등록번호를 첨부해주세요."
            >
              <template v-slot:append>
                <div class="attachment notosanskr-medium">첨부</div>
              </template>
            </q-file>
          </div>
        </div>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer "
        style="font-size:17px;"
        :rounded="false"
        flat
        label="가입신청 완료"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "ProofCompany",
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
  methods: {
    selectItem(item) {
      if (!this.selectedRepresentative.includes(item)) {
        this.selectedRepresentative.push(item);
      } else {
        this.selectedRepresentative = this.selectedRepresentative.filter(
          (service) => service != item
        );
      }
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
  .registration-field,
  .permit-license-field {
    background: #ffffff !important;
    box-sizing: border-box;
    border-radius: 8px;
    .attachment {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.8px;
      color: #195de4;
    }
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
