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
              <q-card-section class="notice-content" v-html="notice.content"></q-card-section>
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
          title: "베타테스트 준비중입니다.",
          state: "공지사항",
          date: "2020-12-31",
          new: true,
          content: '안녕하세요. 치움 개발팀입니다.\n' +
            '지금은 대부분의 기능들이 현재 개발중이며, 일에 정식 런칭을 준비하고 있습니다.\n' +
            '좋은 모습으로 런칭하겠습니다!'
        }
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
  white-space: pre-wrap;
}
</style>
