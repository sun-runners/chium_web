<template lang="pug">
  div
    q-dialog(v-model="modal" position="bottom")
      q-card(class="bday-date-picker flex justify-center items-center")
        q-section
          div(class="row q-gutter-lg")
            div(class="col")
              div(class="column no-wrap q-gutter-lg  flex justify-center content-center items-center wheeler-year" @wheel.prevent="onHandleScroll")
                div(class="col text-subtitle1 no-padding date-wheel-val" v-for="year,index in yearRange" ) {{ year }} {{index}}
</template>

<script>
import ModalMixins from 'src/mixins/ModalMixins'
import { each } from 'lodash'

export default {
  props: {
    modal: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      model: 0,
      startRange: 1980,
    }
  },
  created() {
    // this.modal = this.openModal;
  },
  computed: {
    yearRange () {
      const ranges = [];
      for (let x = this.startRange; x <= this.startRange+1; x++) {
        ranges.push(x)
      }
      return ranges;
    },
   },
   methods: {
    onHandleScrollDown(event) {
      console.log("onHandleScrollDown", event);
    },
    onHandleScroll({ deltaY }) {
      // console.log(movementY)
      if (deltaY > 20) {
        console.log("DOWN", deltaY);
        this.startRange--;
      } else if (deltaY < -8) {
        console.log("UP", deltaY);
        this.startRange++;
      }
      
    },
   },
  watch: {
    modal: {
      deep: true,
      handler(newVal) {
        console.log("newVal", newVal)
      },
    }
  },
}
</script>

<style lang="stylus">
  .bday-date-picker
    border-radius: 100px
    height: 268px 
    width: 375px
    background-color: #F2F2F2

  .date-wheel-val
    font-size: 30px
  // .wheeler-year
  //   max-height: 30%
  //   overflow-y: scroll
</style>