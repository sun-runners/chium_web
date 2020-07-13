<template>
    <div class="bg-grey-3" style="min-height:100vh;">
        <div class="bg-white">
            <div class="name-point q-px-sm q-py-md column">
                <p class="name q-ma-none">박가인 님</p>
                <p class="point text-secondary q-ma-none">5,000P</p>
            </div>
            <div class="q-px-lg">
                <q-separator color="grey-4" size="1px" />
            </div>
            <div class="row items-center justify-evenly">
                <q-item-section class="review column items-center q-pa-lg">
                    <p class=" text-dark q-ma-none" style="font-size: 24px;">1</p>
                    <p class="text" style="font-size: 13px;">리뷰</p>
                </q-item-section>
                <q-separator color="grey-4" vertical inset  size="1px" />
                <q-item-section class="consult column items-center q-pa-lg">
                    <p class=" text-dark q-ma-none" style="font-size: 24px;">2</p>
                    <p class="text" style="font-size: 13px;">상담</p>
                </q-item-section>
            </div>
        </div>
        <div class="bg-white q-mt-md q-pa-none">
            <div class="row items-center justify-between">
                <div class="col-8 q-pa-lg">
                    <p class="text-grey q-ma-none">내 위치</p>
                    <p class="q-ma-none q-pt-sm" style="font-size: 16px; line-height: 24px;">경기도 화성시 정남면 괘랑4길 16-38</p>
                </div>
                <div class="q-pa-lg ">
                    <q-btn color="white" text-color="black" outline label="수정" />
                </div>
            </div>
            <q-separator size="1px"/>
            <div class="row items-center justify-between">
                <div class="col-8 q-pa-lg">
                    <p class="q-ma-none text-grey">연락처</p>
                    <p class="q-ma-none q-pt-sm" style="font-size: 16px; line-height: 24px;">010-2398-0374</p>
                </div>
                <div class="q-pa-lg ">
                    <q-btn color="white" bold text-color="black"  outline label="수정"/>
                </div>
            </div>
            <q-separator size="1px" />
            <div class="q-pa-none q-pt-md q-mt-lg">
                <p style="font-size: 18px; line-height: 27px;" class=" q-pl-sm">최근 본 업체</p>
                <gallery-sliding-horizontal></gallery-sliding-horizontal>
            </div>
        </div>
        <div class="bg-white q-mt-md q-py-none q-px-lg">
            <q-list separator inset size="3px">
                <q-item style="height: 60px;" v-for="(item, index) in items" :key="index" clickable v-ripple>
                    <q-item-section style="line-height: 23px; font-size: 15px;">{{ item }}</q-item-section>
                    <span class="material-icons" style="font-size: 26px;">
                        keyboard_arrow_right
                    </span>
                </q-item>
            </q-list>
        </div>
    </div>
</template>

<script>
import GallerySlidingHorizontal from 'src/components/Galleries/GallerySlidingHorizontal'
export default {
  name: 'MyPage',
  components: {
    'gallery-sliding-horizontal': GallerySlidingHorizontal
  },
  data () {
    return {
      items: [
        '개인정보',
        '단골업체',
        '철거내역',
        '문의내역',
        '공지사항',
        '로그아웃'
      ]
    }
  }
}
</script>

<style scoped>
p{
    font-family: Noto Sans CJK KR;
}

.name-point .name{
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
}

.name-point .point{
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    color: #18A0FB;
}

.consult .text, .review .text{
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: #999999;
}
</style>
