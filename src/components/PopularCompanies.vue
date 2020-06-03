<template>
  <div>
      <p class="q-pt-md text-h4">인기 업체</p>
      <div  v-for="(company, index) in companies" :key="index">
          <div class="row q-py-md">
              <div class="col-3 q-px-sm q-pb-md">
                  <img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  style="width: 100%; height: 100%"
                  >
              </div>
              <div class="col-8 q-pl-md">
                <div class="col content-center justify-center">
                  <p padding class="text-h5">
                      {{ company.title }}
                  </p>
                  <p>
                    {{ company.desc }}
                  </p>
                </div>
              </div>
              <div class="col-1">
                <p class="text-center"><span class="fa fa-star text-light-blue" style="font-size:20px"></span></p>
                <p class="text-center">{{ company.star }}</p>
              </div>
          </div>
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
          star: 4.9
        },
        {
          image: '',
          title: '바나나리스토어',
          desc: '경기도 과천시 과천동 576-21',
          star: 4.8
        },
        {
          image: '',
          title: '파란환경철거 동탄점',
          desc: '경기도 과천시 과천동 576-21',
          star: 4.5
        },
        {
          image: '',
          title: '바나나리스토어',
          desc: '경기도 과천시 과천동 576-21',
          star: 5
        },
        {
          image: '',
          title: '바나나리스토어',
          desc: '경기도 과천시 과천동 576-21',
          star: 5
        }
      ]
    }
  }
}
</script>

<style>

</style>
