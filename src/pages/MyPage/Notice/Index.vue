<template>
  <default-template>
    <template #pageHeader>
      <nav-header-info name="공지사항" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div>
        <q-list bordered class="rounded-borders">
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
                  <div class="state-text">알림</div>
                </div>
                <div class="content-message">
                  개인 정보처리 방침 일부 변경 안내
                </div>
                <div class="date-area">
                  2020-08-20
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
    return {};
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
.content-message {
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
