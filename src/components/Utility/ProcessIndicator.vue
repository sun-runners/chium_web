<template lang="pug">
  div(class="row progress-bar")
    div(class="col" v-for="step in totalSteps" :class="{ 'progress-step-divider': (step != activeStep) }")
</template>

<script>
export default {
  name: "ProcessIndicator",
  props: ['totalSteps', 'activeStep'],
};
</script>

<style lang="scss" scoped>
.progress-step-divider {
  background-color: #f2f2f2;
  max-height: 4px;
  min-height: 4px; 
}

.progress-bar {
  border-radius: 10px;
  background: linear-gradient(295deg, #B770FF 30%, #46B3FC 90%);
  // height: 4px;
  // max-height: 4px;
}
</style>