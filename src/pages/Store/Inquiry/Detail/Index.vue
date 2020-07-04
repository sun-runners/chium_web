<template>
  <div style="background: #F2F2F2; height: 100vh;" class="q-px-md q-pt-xs">
    <q-card flat bordered class="q-mt-lg my-card">
        <q-card-section style="font-size: 13px;">
            <p class="text-message q-ma-none" style="margin-bottom: 5px;">분당쪽은 작업안하시나요?</p>
            <div class="row text-secondary ">
                <div class="text-grey-14 q-mr-md">이영돈</div>
                <div class="text-grey-14">2020.05.20</div>
            </div>
        </q-card-section>
        <q-separator inset />
        <q-card-section style="font-size: 13px;">
            <p class="text-message q-ma-none" style="margin-bottom: 5px;">분당쪽은 작업안하시나요?ㅠㅠ....</p>
        </q-card-section>
    </q-card>

    <q-card flat bordered class="q-mt-lg my-card">
        <q-card-section style="font-size: 13px;">
            <q-btn class="q-mb-md" outline style="font-size: 12px;" color="secondary" :label="'답변완료'"/>
            <p class="text-message q-ma-none" style="margin-bottom: 5px;">
            안녕하세요~ 어게인업입니다. 어게인업은 서울시에서만 공사를 진행하고있으며 안타깝게도 분당은 서비스 지역이 아닙니다... 죄송합니다.
            </p>
        </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-message{
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */
    letter-spacing: -1.05px;
    color: #222222;
}
.text-secondary {
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.98px;
    color: #888888;
}

</style>
