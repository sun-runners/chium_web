<template>
  <div class="column bg-white">
    <div class="col">
      공간 평수와  층수를
      알려주세요.
    </div>
    <div class="col">
      <q-input class="field-calculation" v-model="text" flat mask="##평 미만" />
    </div>
  </div>
</template>

<script>
// import { WorkDueDate } from 'src/components/RequestEstimate/Common';
export default {
  data () {
    return {
      text: null
    }
  },
  components: {
    // WorkDueDate
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 5,
        activeStep: 3,
        btnLabel: '다음',
        isBtnReady: false,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/four/household',
        prevPathRoute: '/request/demolition/two/household',
      };
    },
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState);
  },
};
</script>

<style lang="scss" scoped>
.field-calculation {
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 8px;
// font-sizing
  font-family: 'notosanskr-regular';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */


  /* Font/#15 */

  color: #15161A;
}

.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 36px;
}

.heading-subtitle {
  color: #959595;
}

.schedule-undecided {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #15161a;
}
</style>
