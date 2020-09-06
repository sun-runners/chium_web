<template>
  <div class="bg-grey-3" style="min-height:100vh;">
    <div class="bg-white">
      <div class="name-point q-px-sm q-py-md column">
        <p class="name q-ma-none notosanskr-medium">박가인 님</p>
        <p class="point notosanskr-bold text-secondary q-ma-none">5,000P</p>
      </div>
      <div class="q-px-lg">
        <q-separator color="grey-4" size="1px" />
      </div>
      <div class="row items-center justify-evenly">
        <q-item-section class="top-tabs column items-center">
          <q-img
            :src="require('src/assets/interested_companies.svg')"
            :ratio="1"
          />
        </q-item-section>

        <q-item-section class="top-tabs column items-center">
          <q-img :src="require('src/assets/company_inquiry.svg')" :ratio="1" />
        </q-item-section>

        <q-item-section class="top-tabs column items-center">
          <q-img :src="require('src/assets/work_schedule.svg')" :ratio="1" />
        </q-item-section>
      </div>
    </div>
    <div class="bg-white q-mt-md q-pa-none">
      <div class="row items-center justify-between">
        <div class="col-8 q-pa-lg">
          <p class="text-grey q-ma-none notosanskr-medium">내 위치</p>
          <p
            class="q-ma-none q-pt-sm notosanskr-regular"
            style="font-size: 16px; line-height: 24px;"
          >
            경기도 화성시 정남면 괘랑4길 16-38
          </p>
        </div>
        <div class="q-pa-lg">
          <q-btn
            color="white"
            text-color="black"
            class="notosanskr-medium"
            outline
            label="수정"
          />
        </div>
      </div>
      <q-separator size="1px" />
      <div class="row items-center justify-between">
        <div class="col-8 q-pa-lg">
          <p class="q-ma-none text-grey notosanskr-medium">연락처</p>
          <p
            class="q-ma-none q-pt-sm notosanskr-bold"
            style="font-size: 16px; line-height: 24px;"
          >
            010-2398-0374
          </p>
        </div>
        <div class="q-pa-lg">
          <q-btn
            color="white"
            class="notosanskr-medium"
            text-color="black"
            outline
            label="수정"
          />
        </div>
      </div>
      <q-separator size="1px" />
      <div class="q-pa-none q-pt-md q-mt-lg notosanskr-medium">
        <p style="font-size: 18px; line-height: 27px;" class="q-pl-sm">
          최근 본 업체
        </p>
        <gallery-sliding-horizontal></gallery-sliding-horizontal>
      </div>
    </div>
    <div class="bg-white q-mt-md q-py-none q-px-lg">
      <q-list separator inset size="3px">
        <q-item
          style="height: 60px;"
          v-for="(item, index) in items"
          :key="index"
          clickable
          v-ripple
        >
          <q-item-section style="line-height: 23px; font-size: 15px;">{{
            item
          }}</q-item-section>
          <span class="material-icons" style="font-size: 26px;"
            >keyboard_arrow_right</span
          >
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import GallerySlidingHorizontal from "src/components/Galleries/GallerySlidingHorizontal";
export default {
  name: "MyPage",
  components: {
    "gallery-sliding-horizontal": GallerySlidingHorizontal,
  },
  data() {
    return {
      items: [
        "개인정보",
        "단골업체",
        "철거내역",
        "문의내역",
        "공지사항",
        "로그아웃",
      ],
    };
  },
  created() {
    this.$emit("changeHeadingName", "마이페이지");
  },
};
</script>

<style scoped>
.name-point .name {
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
}

.name-point .point {
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  color: #18a0fb;
}

.top-tabs {
  min-width: 114px;
  min-height: 110;
  cursor: pointer;
}
</style>
