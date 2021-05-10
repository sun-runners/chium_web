<template>
  <div style="background: #F2F2F2; min-height: 100vh;">
    <top-toolbar></top-toolbar>
    <div class="top-tab-container row">
      <q-card class="my-card q-pa-sm full-width" flat>
        <q-separator inset />
        <div class="row justify-around">
          <q-card-section>
            <div class="full-width text-center text-secondary" style="font-size:12px">전체</div>
            <div class="full-width text-center text-secondary" style="font-size: 24px">{{items.length}}</div>
          </q-card-section>
          <q-separator vertical inset />
          <q-card-section>
            <div class="full-width text-center" style="font-size:12px">견적신청/상담</div>
            <div class="full-width text-center" style="font-size: 24px">{{this.apply}}</div>
          </q-card-section>
          <q-separator vertical inset />
          <q-card-section>
            <div class="full-width text-center" style="font-size:12px">작업예정</div>
            <div class="full-width text-center" style="font-size: 24px">{{this.counsel}}</div>
          </q-card-section>
          <q-separator vertical inset />
          <q-card-section>
            <div class="full-width text-center" style="font-size:12px">작업완료</div>
            <div class="full-width text-center" style="font-size: 24px">{{this.done}}</div>
          </q-card-section>
        </div>
      </q-card>
    </div>
    <div class="reservations-container">
      <div class="q-my-sm" flat v-for="(item, index) in items" :key="index">
        <reservation-item :item="item"></reservation-item>
      </div>
    </div>
  </div>
</template>

<script>
import ReservationItem from 'src/components/Reservation/ReservationItem'
import TopToolbar from 'src/components/Reservation/TopToolbar.vue'
import Vue from "vue";
export default {
  name: 'Reservation',
  components: {
    'reservation-item': ReservationItem,
    'top-toolbar': TopToolbar
  },
  created () {
    this.$emit('changeHeadingName', '어게인업')
  },
  data () {
    return {
      search: '',
      apply: 0,
      counsel: 0,
      done: 0,
      enquiries: ['household', 'business', 'recycle', 'construction'],
      items: [
      ]
    }
  },
  async mounted () {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].status === '견적신청' || this.items[i].status === '견적상담') { this.apply += 1 } else if (this.items[i].status === '작업예정') { this.counsel++ } else { this.done += 1 }
    }
    for (let i = 0; i < this.enquiries.length; i++) {
      const temp = await Vue.prototype.$axios.get('/' + this.enquiries[i] + '/')
      this.items = this.items.concat(temp.data.results);
    }
    console.log(this.items)
  },
}
</script>

<style scoped>
div {
  color: #151515;
}
</style>
