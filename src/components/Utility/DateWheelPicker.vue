<template lang="pug">
  div
    q-dialog(v-model="modal" position="bottom")
      q-card(class="bday-date-picker flex justify-center items-center" style="background-color: #F2F2F2")
        q-card-section
          div(class="row q-gutter-lg")
            div(class="col")
              q-date(v-model="date")

</template>

<script>
import ModalMixins from 'src/mixins/ModalMixins'
import { each, isEqual, get, set } from 'lodash'

export default {
  props: {
    modal: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      date: '',
      model: 0,
      currentYearIndex: 1,
      startYearRange: 1980,
      startDayRange: 1,
      startMonthRange: 1,
      // yearMax(type) {
      //   switch (type) {
      //     case 'startYearRange': return [1980, ];
      //   }
      // },
    }
  },
  created() {
    // this.modal = this.openModal;
  },
  computed: {
    yearRange () {
      const ranges = [];
      for (let x = this.startYearRange; x <= this.startYearRange+4; x++) {
        ranges.push(x)
      }
      return ranges;
    },
    dayRange () {
      const ranges = [];
      for (let x = this.startDayRange; x <= this.startDayRange+1; x++) {
        ranges.push(x)
      }
      return ranges;
    },
    monthRange () {
      const ranges = [];
      for (let x = this.startMonthRange; x <= this.startMonthRange+1; x++) {
        ranges.push(x)
      }
      return ranges;
    },
   },
   methods: {
    onHandleSwipeWheel({ direction,  }, type, max = [0,0]) {
      console.log("this.$refs.itemRef",this.$refs.itemRef);
      console.log("this.$refs.wheelerBox",this.$refs.wheelerBox);
      let range = get(this, type);
      if (isEqual(direction, 'up')) {
        if (range < new Date().getFullYear()) {
            console.log("this.$refs.wheelerBox.offsetHeight",this.$refs.wheelerBox.offsetHeight)
            for(let x = this.$refs.wheelerBox.scrollTop; x <= this.$refs.wheelerBox.scrollTop + this.$refs.wheelerBox.offsetHeight; x++) {
              setTimeout(() => { this.$refs.wheelerBox.scrollTop = x; }, 1000);
            }
            range++;
            this.currentYearIndex+2;

            if (this.$refs.wheelerBox.offsetHeight > 125) {
              set(this, type, range);
              this.$refs.wheelerBox.scrollTop = 0;     
            }
        }
      } else if(isEqual(direction, 'down')) {
          if (this.startYearRange > 1900) {
              for(let x = this.$refs.wheelerBox.scrollTop; x >= this.$refs.wheelerBox.scrollTop - this.$refs.wheelerBox.offsetHeight; x--) {
                setTimeout(() => { this.$refs.wheelerBox.scrollTop = x; }, 1000);
              }
              
              range--;
              
              if (this.currentYearIndex > 0) {
                this.currentYearIndex-2;
              }

              // set(this, type, range);
              // this.$refs.wheelerBox.scrollTop = 0;
          }
      }
    },
    onHandleScroll({ deltaY }) {
      if (this.startYearRange < new Date().getFullYear()) {  
        if (deltaY > 20) {
          this.startYearRange++;
        } 
         
      }
      if (this.startYearRange > 1900) {
        if (deltaY < -8) {
          this.startYearRange--;
        }
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
  
  .wheeler
    text-align: left
    height: 63+63px
    width: 110
    overflow-y: hidden
    display: flex
    flex-direction: column
    box-sizing: border-box
    scroll-snap-type: y mandatory
    transition-property: scroll

  .date-wheel-val
    flex: 0 0 63px
    flex-grow: 0
    flex-shrink: 0
    flex-basis: 63px
    font-size: 30px
    display: flex
    align-items: center
    justify-content: center
    scroll-snap-align: start
    font-family: 'notosanskr-medium'
    font-size: 30px
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

  // .wheeler-year
  //   max-height: 30%
  //   overflow-y: scroll
</style>