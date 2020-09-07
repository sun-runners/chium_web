<template>
  <div class="bg-grey-3" style="min-height:100vh;">
    <div class="bg-white">
      <div class="account-info notosanskr-regular">
        <div class="user-greet">
          홍길동 님 안녕하세요.
        </div>
        <q-icon class="text-dark" size="24px">
          <img src="~assets/arrow_right.svg" />
        </q-icon>
      </div>
      <div class="q-px-none">
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

    <div class="bg-white q-mt-sm q-pa-none ">
      <div class="my-location row items-center justify-between">
        <div class="col-8 notosanskr-regular">
          <p class="text-label q-ma-none notosanskr-medium">내 위치</p>
          <p class="address-text q-ma-none  notosanskr-regular">
            경기도 치움시 철거면 치움4길 16-38 치움타운하우스
          </p>
        </div>
        <q-icon class="text-dark" size="20px">
          <img src="~assets/arrow_right.svg" />
        </q-icon>
      </div>
      <div class="my-phone row items-center justify-between">
        <div class="col  notosanskr-regular">
          <p class="q-ma-none text-grey notosanskr-medium">연락처</p>
          <p class="phone-number q-ma-none q-pt-sm notosanskr-bold">
            010-2398-0374
          </p>
        </div>

        <button class="verification-completed">
          <q-icon name="done" class="text-dark" size="16px"> </q-icon>
          인증완료
        </button>
      </div>
      <q-separator size="1px" />

      <div class="notosanskr-medium">
        <div class="recent-quote-heading">
          최근견적
        </div>
        <q-separator size="3px" style="background: #151515" />
        <div class="store-info">
          <button class="store-name">전국불도저</button>
          <button class="store-call">
            <q-icon class="text-dark" size="24px">
              <img src="~assets/store_call.svg" />
            </q-icon>
            070-345-0789
          </button>

          <q-card
            class="my-card q-mt-md"
            style="    padding: 20px;"
            :bordered="false"
          >
            <q-card-section class="info-items row justify-between">
              <div class="label-text col-3">주소</div>
              <div class="info-text col-9">
                경기도 치움시 철거4길 16-38번지 치움 타운하우스
              </div>
            </q-card-section>
            <q-card-section class="info-items row justify-between">
              <div class="label-text col-3">타입</div>
              <div class="info-text col-9 row">
                <div>
                  주거공간
                </div>
                <q-separator size="2px" vertical style="margin: 0 6px;" />
                <div>
                  30평
                </div>
              </div>
            </q-card-section>
            <q-card-section class="info-items row justify-between">
              <div class="label-text col-3">작업 유형</div>
              <div class="info-text col-9">
                폐기물
              </div>
            </q-card-section>
            <q-card-section class="info-items row justify-between">
              <div class="label-text col-3">작업 일시</div>
              <div class="info-text col-9">
                미정
              </div>
            </q-card-section>
            <q-card-section class="info-items row justify-between">
              <div class="label-text col-3">진행 상태</div>
              <div class="info-text col-9 text-secondary">
                견적신청
              </div>
            </q-card-section>
          </q-card>
        </div>
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
export default {
  name: "MyPage",
  components: {},
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

<style lang="scss" scoped>
.account-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  padding: 0 16px;
  .user-greet {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;
    letter-spacing: -1.1px;
    color: #151515;
  }
}

.top-tabs {
  min-width: 114px;
  min-height: 110;
  cursor: pointer;
}

.my-location {
  height: 118px;
  padding: 20px 16px;
  .text-label {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #767676;
  }
  .address-text {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: #151515;
    margin-top: 10px;
  }
}

.my-phone {
  padding: 20px 16px;
  .phone-number {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #151515;
  }
  .verification-completed {
    background: white;
    padding: 4px 8px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 4px;
  }
}

.recent-quote-heading {
  padding: 41px 16px 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #151515;
}

.store-info {
  padding: 25px 16px;
  button {
    border-radius: 100px;
    border: none;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.65px;
    color: #ffffff;
    &.store-name {
      background: #2cb3ff;
      margin-right: 8px;
    }

    &.store-call {
      color: #151515;
      background: #f7f7f6;
      border: 1px solid #f0f0f0;
    }
  }
  .info-items {
    padding: 0 0 15px;
    .label-text {
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.65px;
      color: #767676;
    }
    .info-text {
      font-weight: normal;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: -0.65px;
      color: #151515;
    }
  }
}
</style>
