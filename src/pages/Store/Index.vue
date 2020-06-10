<template>
    <div class="row">
      <div class="col-12 flex  content-center">
          <img
            src="https://placeimg.com/811/411/nature"
            :ratio="16/9"
            class="self-center"
          />
        </div>
      <div class="col-12">
        <q-card flat class="bg-white my-card">
          <q-card-section>
            <div class="text-h6 bold">어게인업</div>
            <div class="text-subtitle2 text-grey">서울특별시 광진구 천호대로 24-5</div>
            <div>
              <q-rating
                size="2em"
                :max="5"
                color="blue"
              />
              <span class="text-subtitle2"> 4.9</span>
            </div>
            <div class="row q-mt-sm">
              <div class="col">
                <q-btn>주거공간</q-btn>
              </div>
              <div class="col">
                <q-btn>주거공간</q-btn>
              </div>
              <div class="col">
                <q-btn>주거공간</q-btn>
              </div>
              <div class="col">
                <q-btn>주거공간</q-btn>
              </div>
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
              <div class="column">
                <div class="col">
                  <div class="row">
                    <div class="col-3 text-grey">매칭 수</div>
                    <div class="col-8 text-bold text-blue">12,050</div>
                  </div>
                </div>

                <div class="col">
                  <div class="row">
                    <div class="col-3 text-grey">매칭 수</div>
                    <div class="col-8 text-bold text-black">12,050</div>
                  </div>
                </div>

                <div class="col">
                  <div class="row">
                    <div class="col-3 text-grey">경력</div>
                    <div class="col-8 text-bold text-black">11년</div>
                  </div>
                </div>

                <div class="col">
                  <div class="row">
                    <div class="col-3 text-grey">작업지역</div>
                    <div class="col-8 text-bold text-black">서울시 전 지역</div>
                  </div>
                </div>

                <div class="col">
                  <div class="row">
                    <div class="col-3 text-grey">전화상담</div>
                    <div class="col-8 text-bold text-black">02-4525-4890</div>
                  </div>
                </div>

                <div class="col">
                  <div class="row">
                    <div class="col-3 text-grey">영업시간</div>
                    <div class="col-8 text-bold text-black">10:00 - 21:00 매주 월요일 휴무</div>
                  </div>
                </div>
              </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Store',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
