<template>
  <div class="row q-py-xs progress-bar q-pa-none">
    <ul class="col q-pa-none q-ma-none" v-for="(item, index) in totalSteps" :key="index">
      <li
        :style="{'background': index+1 == activeStep ? activeColor : ''}"
        class="full-width q-py-xs"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProcessIndicator",
  props: {
    totalSteps: Number,
    activeStep: Number,
    activeColor: String,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
li {
  border-radius: 10px;
}
.progress-bar {
  border-radius: 10px;
  background-color: #f2f2f2;
}
</style>