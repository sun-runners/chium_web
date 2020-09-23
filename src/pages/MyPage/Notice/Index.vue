<template>
  <default-template>
    <template #pageHeader>
      <nav-header-info name="공지사항" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div>
        <q-list class="rounded-borders" v-for="(notice, i) in notices" :key="i">
          <q-separator></q-separator>
          <q-expansion-item
            expand-icon-toggle
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <template #header>
              <div class="column q-py-sm full-width  notosanskr-regular">
                <div class="state-badge">
                  <div class="state-text">{{ notice.state }}</div>
                </div>
                <div class="notice-title">
                  {{ notice.title }}
                  <q-icon
                    class="text-dark q-ml-sm"
                    size="14px"
                    v-if="notice.new"
                  >
                    <img src="~assets/new.svg" />
                  </q-icon>
                </div>
                <div class="date-area">
                  {{ notice.date }}
                </div>
              </div>
            </template>
            <q-card>
              <q-card-section class="notice-content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
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
      notices: [
        {
          title: "개인 정보처리 방침 일부 변경 안내",
          state: "알림",
          date: "2020-10-20",
          new: true,
          content: "...",
        },
        {
          title: "앱 접속 장애 사과 안내",
          state: "알림",
          date: "2020-08-20",
          new: false,
          content: "...",
        },
        {
          title: "치움 무더위 여름 이벤트",
          state: "이벤트",
          date: "2020-07-09",
          new: false,
          content: "...",
        },
        {
          title: "중복 맞이 삼계탕보다 더 더 좋은1 .1.2버전 업데이트 안내",
          state: "업데이트",
          date: "2020-06-30",
          new: false,
          content: "...",
        },
        {
          title: "이번에도 좋은 기능 왕창 안고 찾아온 1.1.1버전 업데이트 안내",
          state: "이벤트",
          date: "2020-06-20",
          new: false,
          content: "...",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.state-badge {
  height: 24px;
  width: 51px;
  background: #f7f7f6;
  border-radius: 100px;
  border: 1px solid #d9d9d9;
  .state-text {
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.65px;
    color: #767676;
  }
}
.notice-title {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.75px;
  color: #151515;
  margin: 10px 0px 4px;
}
.date-area {
  font-size: 13px;
  line-height: 20px;
  color: #959595;
}

.notice-content {
  background: #f6f6f6;
  padding: 30px 16px;
}
</style>
