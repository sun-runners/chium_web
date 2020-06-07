<template>
  <div>
      <p class="q-pt-md text-h4">인기 업체</p>
      <div  v-for="(company, index) in companies" :key="index">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <img src="https://cdn.quasar.dev/img/mountains.jpg"  width="70px" height="70px">
            </q-item-section>
            <q-item-section class="q-py-lg">
              <q-item-label class="text-weight-bolder">{{ company.title }}</q-item-label>
              <q-item-label caption class="text-bold" lines="2">{{ company.desc }}</q-item-label>
            </q-item-section>

            <q-item-section side center>
              <q-icon name="star" color="blue" />
              <q-item-label class="text-dark text-bold">{{ company.star }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator inset />
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      companies: [
        {
          image: '',
          title: 'M_PLUS',
          desc: '충청북도 청주시 흥덕구 옥산면 옥산신...',
          star: '4.9'
        },
        {
          image: '',
          title: '바나나리스토어',
          desc: '경기도 과천시 과천동 576-21',
          star: '4.8'
        },
        {
          image: '',
          title: '파란환경철거 동탄점',
          desc: '경기도 과천시 과천동 576-21',
          star: '4.5'
        },
        {
          image: '',
          title: '바나나리스토어',
          desc: '경기도 과천시 과천동 576-21',
          star: '5.0'
        },
        {
          image: '',
          title: '바나나리스토어',
          desc: '경기도 과천시 과천동 576-21',
          star: '5.0'
        }
      ]
    }
  }
}
</script>

<style>

</style>
