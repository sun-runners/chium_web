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
            <q-card>
              <q-card-section>
                {{ body }}
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
  min-height: 100vh;
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
}
</style>
