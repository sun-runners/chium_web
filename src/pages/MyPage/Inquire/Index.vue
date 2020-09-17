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
            s
          </q-card-section>

          <q-separator inset />
          <!-- company Q & A -->
          <q-card-section>
            s
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
</style>
