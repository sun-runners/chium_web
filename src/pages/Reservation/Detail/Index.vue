<template>
  <div style="background: #F2F2F2; min-height: 100vh;" class="q-pa-md">
    <q-card class="my-card" flat>
      <q-card-section class="row justify-between">
        <div class="row">
          <div class="text-dark q-mr-md" style="font-size: 16px;">{{ item.status }}</div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="row">
        <div class="q-mr-sm">
          <q-img src="https://placeimg.com/500/300/nature" width="70px" height="93px" />
        </div>
        <div class="col q-px-sm">
          <div class="name" style="font-size: 14px;">{{ item.name }}</div>
          <div class="address ellipsis" style="font-size: 14px;">{{ item.address }}</div>
          <div class="option row">
            <div flat class="row" v-for="(option, index) in item.options" :key="index">
              <q-btn flat style="color: #888888;" padding="0" size="14px" :label="option" />
              <q-separator class="q-mx-sm" vertical inset />
            </div>
          </div>
          <div
            class="row items-center text-secondary q-pt-md"
            style="font-size: 12px;"
          >{{ item.date }}</div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div v-if="item.status == '견적신청'">
          <q-btn
            :rounded="false"
            class="full-width"
            style="color: #151515; border: 1px solid #E4E4E4"
            label="취소하기"
            unelevated
          />
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="costs-container row justify-between" v-if="item.costs">
        <div>총 견적비용</div>
        <div style="color: #FF4848;">
          <span style="font-size:20px;">{{ item.costs}}</span> 원
        </div>
      </q-card-section>
    </q-card>
    <div class="row q-col-gutter-x-xs q-py-sm">
      <div class="col-6">
        <q-btn
          flat
          outline
          style="border: 1px solid #18A0FB;"
          color="secondary"
          class="full-width bg-white"
          label="전화하기"
        />
      </div>
      <div class="col-6">
        <q-btn
          flat
          outline
          color="secondary"
          style="border: 1px solid #18A0FB;"
          class="full-width bg-white"
          label="문의하기"
        />
      </div>
    </div>
    <!-- ------------------------ -Request Info ---------------------- -->
    <q-card flat class="my-card notosanskr-medium q-mb-md" id="requesterInfoCard">
      <q-card-section class="row items-center q-px-md">
        <q-icon name="o_account_circle" class="text-grey-13 q-pr-sm" style="font-size: 24px;" />
        <div>의뢰자 정보</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="column q-pb-none" style="font-size: 13px;">
        <div class="q-mb-sm">
          <div class="text-grey-13 q-mb-xs" style="color: #888888;">의뢰자</div>
          <p style="color: #151515;">홍길동</p>
        </div>
        <div>
          <div class="text-grey-13 q-mb-xs" style="color: #888888;">연락처</div>
          <p style="color: #151515;">010-2398-0374</p>
        </div>
      </q-card-section>
    </q-card>
    <!-- ------------------------ -Demolition Site Info ---------------------- -->
    <q-card flat class="my-card notosanskr-medium q-mb-md" id="demolitionSiteCard">
      <q-card-section class="row items-center q-px-md">
        <q-icon name="o_place" class="text-grey-13 q-pr-sm" style="font-size: 24px;" />
        <div>철거장소</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="column q-pb-none" style="font-size: 13px;">
        <div class="q-mb-sm">
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">주소</div>
          <p style="color: #151515;">경기도 화성시 괘랑4길 16-38번지 솔가타운하우스</p>
        </div>
        <div>
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">공간유형</div>
          <p style="color: #151515;">주거공간/주택</p>
        </div>
        <div>
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">평수</div>
          <p style="color: #151515;">30-40평</p>
        </div>
      </q-card-section>
    </q-card>
    <!-- ------------------------ -Work Content Info ---------------------- -->
    <q-card flat class="my-card notosanskr-medium q-mb-md" id="workContentsCard">
      <q-card-section class="row items-center q-px-md">
        <q-icon name="o_check_box" class="text-grey-13 q-pr-sm" style="font-size: 24px;" />
        <div>작업내용</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="column q-pb-none" style="font-size: 13px;">
        <div style="margin-bottom: 15px;">
          <div class="text-grey-13" style="color:#888888; margin-bottom: 5px;">유형</div>
          <q-btn
            unelevated
            rounded
            class="demolition-btn"
            style="font-size: 12px;padding: 2px 10px"
            label="전체철거"
          />
        </div>

        <div>
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">희망작업일</div>
          <p style="color: #151515;">1개월이내</p>
        </div>
      </q-card-section>
    </q-card>
    <!-- ------------------------ -Company Information ---------------------- -->
    <q-card flat class="my-card notosanskr-medium q-mb-md" id="companyInformationCard">
      <q-card-section class="row items-center q-px-md">
        <q-icon name="o_local_shipping" class="text-grey-13 q-pr-sm" style="font-size: 24px;" />
        <div>업체정보</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="column q-pb-none" style="font-size: 13px;">
        <div class="q-mb-sm">
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">업체명</div>
          <p style="color: #151515;">전국불도저</p>
        </div>
        <div>
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">경력</div>
          <p style="color: #151515;">11년</p>
        </div>
        <div>
          <div class="text-grey-13 q-mb-xs" style="color:#888888;">매칭수</div>
          <p style="color: #151515;">21,245</p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        status: "견적신청",
        date: "2020.07.01",
        name: "전국불도저",
        address: "경기도 화성시 괘랑4길 16-38번지 솔가타...",
        options: ["주거공간", "30평", "전체철거"],
        costs: "",
      },
    };
  },
};
</script>

<style>
.demolition-btn {
  background: #d4f2ff;
  color: #18a0fb;
}
</style>