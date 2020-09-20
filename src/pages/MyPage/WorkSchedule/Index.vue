<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info name="작업일정" class="full-width" backTo="my_page" />
      <q-tabs
        v-model="filterTabs"
        narrow-indicator
        class="text-black notosanskr-regular"
        active-color="secondary"
      >
        <q-tab name="view_all" class="filterTab" label="모두보기" />
        <q-tab name="scheduled_work" class="filterTab" label="작업예정" />
        <q-tab name="work_complete" class="filterTab" label="작업완료" />
        <q-tab name="canceled_work" class="filterTab" label="취소일정" />
      </q-tabs>
    </template>

    <template #pageBody>
      <div class="q-py-sm row">
        <div class="vertical-line"><div class="vl"></div></div>
        <div class="content-container col">
          <div
            class="schedule"
            v-for="(schedule, index) in mySchedules"
            :key="index"
          >
            <q-icon class="text-dark" size="20px" style="margin-right: 10px;">
              <img
                src="~assets/timeline_ongoing.svg"
                v-if="schedule.status == 'ongoing'"
              />
              <img
                src="~assets/timeline_cancel.svg"
                v-if="schedule.status == 'cancel'"
              />
              <img
                src="~assets/timeline_complete.svg"
                v-if="schedule.status == 'complete'"
              />
            </q-icon>
            <q-card flat bordered>
              <q-card-section class="row justify-between items-center">
                <div>
                  <div
                    class="schedule-date notosanskr-regular"
                    :class="{ dashed: schedule.status != 'ongoing' }"
                  >
                    {{ schedule.date }}
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
                  {{ schedule.name }}
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="info-item row notosanskr-regular">
                <span>주소</span>
                <div class="col" style="margin-left:20px">
                  {{ schedule.address }}
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section class="info-item row notosanskr-regular">
                <span>작업</span>
                <div class="col text-secondary" style="margin-left:20px">
                  {{ schedule.work }}
                </div>
              </q-card-section>
            </q-card>
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
      filterTabs: "view_all",
      schedules: [
        {
          date: "08/24 - 12:00 PM",
          name: "전국 불도저",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "ongoing",
        },
        {
          date: "08/10 - 4:00 PM",
          name: "어게인업",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "ongoing",
        },
        {
          date: "06/05 - 10:00 AM",
          name: "전국 불도저",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "complete",
        },
        {
          date: "05/10 - 11:00 AM",
          name: "전국 불도저",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "complete",
        },
        {
          date: "06/05 - 12:00 PM",
          name: "전국 불도저",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "complete",
        },
        {
          date: "06/05 - 12:00 PM",
          name: "전국 불도저",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "cancel",
        },
        {
          date: "06/05 - 12:00 PM",
          name: "전국 불도저",
          address: "경기도 치움시 철거면 폐기 4길 16-38 폐기타운하우스",
          work: "폐기물 분리배출",
          status: "cancel",
        },
      ],
    };
  },
  computed: {
    mySchedules() {
      switch (this.filterTabs) {
        case "scheduled_work":
          return this.schedules.filter((item) => item.status == "ongoing");
          break;
        case "work_complete":
          return this.schedules.filter((item) => item.status == "complete");
          break;
        case "canceled_work":
          return this.schedules.filter((item) => item.status == "cancel");
          break;
        default:
          return this.schedules;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filterTab {
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.7px;
}
.vertical-line {
  // background: rgba(121, 255, 128, 0.486);
  min-height: 90vh;
  width: 46px;
  .vl {
    border-left: 1px dashed #959595;
    min-height: 100%;
    margin-left: 23px;
  }
}
.schedule {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -32px;
  padding-right: 16px;
  margin-bottom: 16px;
  .schedule-date {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #151515;
    &.dashed {
      text-decoration: line-through;
    }
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
