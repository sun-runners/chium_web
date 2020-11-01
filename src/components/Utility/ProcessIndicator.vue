<template lang="pug">
  div(class="q-mb-lg")
    div(class="row progress-bar")
      div(class="col" v-for="step in totalSteps" :class="{ 'progress-step-divider': (step != activeStep) }")
    
    div(class="bubble") 
      q-img(src="~assets/request_estimate-icon/bubble.png")
        p {{ activeStep }} / {{ totalSteps }}
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

.bubble p{
  margin-top: 10px;
  z-index: 10;
  font-size: 10px;
  font-family: 'notosanskr-regular';
}

.bubble {
  position: absolute;
  margin-left: 10px;
  border-radius: 5px;
  height: 36px;
  width: 38px;
  text-align: center;
}

// .bubble::after {
//   content: "";
// 	  display: block; 
//     position: absolute;
//     // top: -20px;
// 	  bottom: 33px;
// 	  left: 11px;
// 	  width: 5px;
// 	  border-width: 0px 6px 6px 6px;
// 	  border-style: solid;
//     border-color: #F0F0F0 transparent;
//     background-color: transparent;
// }

</style>