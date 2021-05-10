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
      if (this.items[i].status === '견적 신청' || this.items[i].status === '견적 상담') { this.apply += 1 } else if (this.items[i].status === '작업 예정') { this.counsel++ } else { this.done += 1 }
    }
    for (let i = 0; i < this.enquiries.length; i++) {
      const temp = await Vue.prototype.$axios.get('/' + this.enquiries[i] + '/')
      for (let j = 0; j < temp.data.results.length; j++) {
        if (this.enquiries[i] === 'household') {
          temp.data.results[j].options = []
          temp.data.results[j].options.push('가정집 폐기물')
          temp.data.results[j].is_elevator ? temp.data.results[j].options.push('엘레베이터 있음') : temp.data.results[j].options.push('엘레베이터 없음')
          if (temp.data.results[j].items) {
            temp.data.results[j].options.push(temp.data.results.items)
          }
        } else if (this.enquiries[i] === 'business') {
          temp.data.results[j].options = []
          temp.data.results[j].options.push('사업장 폐기물')
          temp.data.results[j].is_elevator ? temp.data.results[j].options.push('엘레베이터 있음') : temp.data.results[j].options.push('엘레베이터 없음')
          if (temp.data.results[j].items) {
            temp.data.results[j].options.push(temp.data.results.items)
          }
        } else if (this.enquiries[i] === 'recycle') {
          temp.data.results[j].options = []
          temp.data.results[j].options.push('재활용 정기수거')
          temp.data.results[j].is_elevator ? temp.data.results[j].options.push('엘레베이터 있음') : temp.data.results[j].options.push('엘레베이터 없음')
          if (temp.data.results[j].items) {
            temp.data.results[j].options.push(temp.data.results.items)
          }
        } else if (this.enquiries[i] === 'construction') {
          temp.data.results[j].options = []
          temp.data.results[j].options.push('건설 폐기물')
          temp.data.results[j].is_elevator ? temp.data.results[j].options.push('엘레베이터 있음') : temp.data.results[j].options.push('엘레베이터 없음')
          if (temp.data.results[j].items) {
            temp.data.results[j].options.push(temp.data.results.items)
          }
        }
        this.items = this.items.concat(temp.data.results)
      }
    }
  }
}
</script>

<style scoped>
div {
  color: #151515;
}
</style>
