<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info name="작업일정" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div class="q-py-sm row">
        <div class="vertical-line"><div class="vl"></div></div>
        <div class="content-container col">
          <div class="schedule">
            <q-icon class="text-dark" size="20px" style="margin-right: 10px;">
              <img src="~assets/timeline_ongoing.svg" />
            </q-icon>
            <q-card flat bordered>
              <q-card-section class="row justify-between items-center">
                <div>
                  <div class="schedule-date">
                    08/24 - 12:00 PM
                  </div>
                  <div class="schedule-work notosanskr-regular">
                    작업예정
                  </div>
                </div>
                <q-icon class="text-dark" size="20px">
                  <img src="~assets/arrow_right.svg" />
                </q-icon>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="info-item row notosanskr-regular">
                <span>업체</span>
                <div class="col" style="margin-left:20px">
                  전국 불도저
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="info-item row notosanskr-regular">
                <span>주소</span>
                <div class="col" style="margin-left:20px">
                  경기도 치움시 철거면 폐기 4길 16-38 폐기 타운하우스
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="info-item row notosanskr-regular">
                <span>작업</span>
                <div class="col text-secondary" style="margin-left:20px">
                  사업장 폐기물
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="bg-grey-13">
            {{ body }}
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
  name: "WorkSchedule",
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
      body:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  },
};
</script>

<style lang="scss" scoped>
.vertical-line {
  // background: rgba(121, 255, 128, 0.486);
  min-height: 90vh;
  width: 46px;
  .vl {
    border-left: 1px dashed #959595;
    min-height: inherit;
    margin-left: 23px;
  }
}
.schedule {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
  padding-right: 16px;
  margin-bottom: 16px;
  .schedule-date {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #151515;
  }
  .schedule-work {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #959595;
  }
  .info-item {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #151515;
    span {
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.65px;
      color: #767676;
    }
  }
}
</style>
