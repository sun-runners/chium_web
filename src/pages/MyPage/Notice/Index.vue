<template>
  <default-template>
    <template #pageHeader>
      <nav-header-info name="공지사항" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div>
        notice page
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

<style></style>
