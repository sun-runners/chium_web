<template>
  <div>
    <upload-picture-site @next="(val) => $emit('next', val)" />
  </div>
</template>

<script>
import { UploadPictureSite } from "src/components/RequestEstimate/Common";
export default {
  components: {
    "upload-picture-site": UploadPictureSite,
  },
  computed: {
    layoutState() {
      return {
        totalSteps: 6,
        activeStep: 3,
        btnLabel: "다음",
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: "/request/waste/four/construction",
        prevPathRoute: "/request/waste/two/construction",
      };
    },
  },
  mounted() {
    this.$emit("setStateLayout", this.layoutState);
  },
};
</script>

<style scoped></style>
