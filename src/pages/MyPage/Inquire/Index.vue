<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info name="업체문의" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div class="q-py-sm">
        <q-card flat bordered class="my-card" style="margin-bottom: 10px">
          <!-- company Name, State -->
          <q-card-section
            class="row justify-between items-center notosanskr-medium q-py-none"
          >
            <div class="company-name">
              원철거
            </div>
            <div class="company-state">
              <div class="state-text">미답변</div>
            </div>
          </q-card-section>

          <q-separator inset />
          <!-- company info -->
          <q-card-section>
            <div class="info-section ">
              <div class="info-item">
                <span class="q-mr-sm">경력</span>11년
                <!-- {{ company.career }} -->
              </div>
              <div class="info-item">
                <span class="q-mr-sm">매칭</span>1,102회
                <!-- {{ company.matching }} -->
              </div>
              <div class="info-item text-secondary">
                <span class="q-mr-sm">평점</span>4.0
                <!-- {{ company.rating }} -->
              </div>
            </div>
          </q-card-section>

          <q-separator inset />
          <!-- company Q & A -->
          <q-card-section class="row items-center">
            <div
              class="row justify-center items-center bg-dark text-white"
              style="height: 36px; width: 36px; border-radius: 50%;0"
            >
              Q
            </div>
            <div class="question-section">
              <div class="question-message">
                100평이상 공간 철거비용 문의합니다.
              </div>
              <div class="question-date">
                2020-04-02
              </div>
            </div>
          </q-card-section>

          <q-separator inset />
          <!-- buttons section -->
          <q-card-section>
            s
          </q-card-section>
        </q-card>
      </div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "InterestedCompany",
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
  font-size: 14px;
  line-height: 44px;
  letter-spacing: -0.7px;
  color: #151515;
}
.company-state {
  height: 24px;
  width: 51px;
  background: #2cb3ff1c;
  border-radius: 100px;

  .state-text {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.65px;
    color: #2cb3ff;
  }
}
.info-item {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  padding-bottom: 8px;
  color: #151515;
  span {
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #767676;
  }
}
.question-section {
  padding-left: 10px;
  .question-message {
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #5a5a5a;
  }
  .question-date {
    font-size: 12px;
    line-height: 18px;
    color: #767676;
  }
}
</style>
