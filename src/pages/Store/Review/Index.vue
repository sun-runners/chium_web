<template>
  <div class="bg-grey-3 notosanskr-regular">
    <div class="bg-white q-px-md">
      <div class="row">
        <div class="col q-py-md">
          <p style="font-size: 22px; line-height: 33px;" class="q-py-none q-my-none">업체 만족도</p>
          <div class="row content-center q-my-none">
            <q-rating
              v-model="reviewRate"
              size="24px"
              :max="5"
              color="secondary"
              class="q-py-none q-my-none"
            />
            <p class="text-rating q-pa-none q-ma-none q-pl-sm">
              {{ reviewRate }}
              <span>/ 5</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white q-mt-md">
      <div class="row justify-centerl" style="padding-top: 36px;">
        <div class="col q-px-md row">
          <q-btn
            class="btn-sort items-center full-width q-px-sm"
            flat
            padding="0px"
            align="between"
            @click="dialogCriteria=true"
          >
            최신순
            <q-icon name="keyboard_arrow_down" size="16px"></q-icon>
          </q-btn>
        </div>
        <div class="col-8 q-px-md row justify-center">
          <q-btn
            class="btn-reviews"
            flat
            label="포토후기만 모아보기 (116)"
            :to="{ name: 'store_review_photos'}"
          />
        </div>
      </div>
      <q-card class="q-pt-md q-p" flat>
        <review-lists :posts="review.all"></review-lists>
      </q-card>
    </div>
    <!-- Modal Popup for changing Criteria -->
    <q-dialog v-model="dialogCriteria" position="bottom" full-width>
      <div style="box-shadow: none">
        <q-card
          style="width: 100%; border-radius: 18px;"
          class="criteria-card col-12 row q-pa-none"
        >
          <q-card-section class="col-12 q-pa-none" style="height: 60px;">
            <q-btn flat class="notosanskr-medium full-width full-height" label="최신순" v-close-popup />
          </q-card-section>

          <q-card-section class="col-12 q-pa-none" style="height: 60px;">
            <q-btn
              flat
              class="notosanskr-medium full-width full-height"
              label="별점 높은순"
              v-close-popup
            />
          </q-card-section>

          <q-card-actions class="col-12 q-pa-none" style="height: 60px;">
            <q-btn
              flat
              class="notosanskr-medium full-width full-height"
              label="별점 낮은순"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
        <br />
        <q-card style="border-radius: 18px;" class="cancel-card col-12 q-mb-xl">
          <q-card-actions class="q-pa-none" style="height: 60px">
            <q-btn flat class="notosanskr-medium full-width full-height" label="취소" v-close-popup />
          </q-card-actions>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import SlideGrade from "src/components/Utility/SlideGrade";
import ReviewLists from "src/components/StoreReview/ReviewLists";
export default {
  name: "StoreReview",
  components: {
    "slide-grade": SlideGrade,
    "review-lists": ReviewLists,
  },
  created() {
    this.$emit("changeHeadingName", "어게인업");
  },
  data() {
    return {
      dialogCriteria: false,
      reviewRate: 4,
      review: {
        all: [
          {
            name: "박가인",
            score: 4,
            details: ["주거공간", "오피스텔", "12평", "서울시 종로구"],
            gallery: [
              "https://placeimg.com/80/80/architecture",
              "https://placeimg.com/80/80/architecture",
              "https://placeimg.com/80/80/architecture",
              "https://placeimg.com/80/80/architecture",
              "https://placeimg.com/80/80/architecture",
            ],
            message:
              "안전하게 철거해주셔서 감사했습니다. 작업해주신 분들도 너무 친절하고 좋아요 ^ ^",
            date: "2020/08/26",
          },
          {
            name: "박가인",
            score: 5,
            details: ["상업공간", "카페/식당", "20평", "서울시 종로구"],
            gallery: [
              "https://placeimg.com/80/80/architecture",
              "https://placeimg.com/80/80/architecture",
            ],
            message:
              "가게를 처음하는거라 어떻게 해야할지 막막했어요 ㅠㅠ 인테리어부터 싹뜯어내고 다시해야할거 같아서 철거업체에 의뢰를 하여 진행했습니다. 너무나 안전하게 시공날짜에 맞춰서 신속하게 진행해줘서 감사했어요 ㅎㅎ 덕분에 가게 인테리어도 기분좋게 끝냈습니다.",
            date: "2020/09/26",
          },
          {
            name: "박가인",
            score: 3,
            details: ["상업공간", "상가/매장", "15평", "서울 송파구"],
            gallery: [],
            message: "감사합니다 ^^ 덕분에 리모델링도 잘끝났어요~",
            date: "2020/05/26",
          },
        ],
      },
    };
  },
  methods: {
    onItemClick() {
      console.log("dropdown Item clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.text-rating {
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.55px;
  color: #15161a;
  span {
    color: #959595;
  }
}

.btn-sort,
.btn-reviews {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.7px;
  color: #15161a;

  cursor: pointer;
}
.btn-reviews {
  width: 100%;
}
.criteria-card {
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.9px;
  color: #195de4;
}
.cancel-card {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #151515;
}
</style>
