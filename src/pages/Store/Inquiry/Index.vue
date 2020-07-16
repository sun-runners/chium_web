<template>
  <div style="background: #F2F2F2; height: 100vh;" class="q-pa-md">
    <q-card flat bordered class="my-card" style="border: 1px solid #18A0FB;">
      <q-card-section class="text-secondary text-center">
        공사 문의하기
      </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mt-lg my-card">
        <q-card-section>
            <div><span class="text-bold">2</span>건 문의</div>
        </q-card-section>

        <div v-for="(inquiry, index) in inquiries" :key="index">
            <q-separator inset />
            <q-card-section style="font-size: 13px;">
                <p>{{ inquiry.message }}</p>
                <div class="text-grey-14">{{ inquiry.name }}</div>
                <div class="row justify-between">
                    <div class="text-grey-14">{{ inquiry.date }}</div>
                    <div>
                        <q-icon name="lock" class="q-mr-sm"/>
                        <q-btn outline style="font-size: 12px;" color="secondary" :label="inquiry.status"/>
                    </div>
                </div>
            </q-card-section>
        </div>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inquiries: [
        {
          message: '24평 네일숍 매장 철거 비용과 걸리는 시간 알 수 있을까요?',
          name: '김영희',
          date: '2020.05.20',
          status: '답변완료'
        },
        {
          message: '분당쪽은 작업안하시나요?',
          name: '이영돈',
          date: '2020.05.20',
          status: '미답변'
        }
      ]
    }
  }
}
</script>

<style>

</style>
