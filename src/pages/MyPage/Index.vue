<template>
    <div class="bg-primary" style="min-height:100vh;">
        <div class="bg-white">
            <h5 class="text-bold text-center">마이페이지</h5>
            <div class="q-pa-lg column">
                <p class="text-bold q-ma-none" style="font-size: 22px;">박가인 님</p>
                <p class="text-secondary q-ma-none" style="font-size: 30px;">5,000P</p>
            </div>
            <div class="q-px-lg">
                <hr style="color: #42404024;">
            </div>
            <div class="row items-center justify-evenly">
                <q-item-section class="column items-center q-pa-lg">
                    <p class="text-bold text-dark q-ma-none" style="font-size: 24px;">1</p>
                    <p style="font-size: 13px;">리뷰</p>
                </q-item-section>
                <q-separator color="grey-4" vertical inset  size="3px" />
                <q-item-section class="column items-center q-pa-lg">
                    <p class="text-bold text-dark q-ma-none" style="font-size: 24px;">2</p>
                    <p style="font-size: 13px;">상담</p>
                </q-item-section>
            </div>
        </div>
        <div class="bg-white q-mt-md q-py-none q-px-lg">
            <div class="row items-center justify-between">
                <div class="col-8 text-bold q-pa-lg">
                    <p class="text-grey">내 위치</p>
                    <p style="font-size: 16px; line-height: 24px;">경기도 화성시 정남면 괘랑4길 16-38</p>
                </div>
                <div class="q-pa-lg text-bold">
                    <q-btn color="white" text-color="black" label="수정" />
                </div>
            </div>
            <q-separator inset size="2px"  />
            <div class="row items-center justify-between">
                <div class="col-8 text-bold q-pa-lg">
                    <p class="text-grey">연락처</p>
                    <p style="font-size: 16px; line-height: 24px;">010-2398-0374</p>
                </div>
                <div class="q-pa-lg text-bold">
                    <q-btn color="white" bold text-color="black"  label="수정"/>
                </div>
            </div>
            <q-separator inset size="3px" />
            <div class="q-pt-lg q-mt-lg">
                <gallery-sliding-horizontal></gallery-sliding-horizontal>
            </div>
        </div>
    </div>
</template>

<script>
import GallerySlidingHorizontal from 'src/components/GallerySlidingHorizontal'
export default {
  name: 'MyPage',
  components: {
    'gallery-sliding-horizontal': GallerySlidingHorizontal
  }
}
</script>

<style>

</style>
