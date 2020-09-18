<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info name="업체문의" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div class="q-py-sm">
        <q-card
          flat
          bordered
          class="my-card"
          style="margin-bottom: 10px"
          v-for="(inquiry, index) in inquiries"
          :key="index"
        >
          <!-- company Name, State -->
          <q-card-section
            class="row justify-between items-center notosanskr-medium q-py-none"
          >
            <div class="company-name">
              {{ inquiry.name }}
            </div>
            <div class="company-state">
              <div class="state-text">{{ inquiry.state }}</div>
            </div>
          </q-card-section>

          <q-separator inset />
          <!-- company info -->
          <q-card-section>
            <div class="info-section ">
              <div class="info-item">
                <span class="q-mr-sm">경력</span>
                {{ inquiry.career }}
              </div>
              <div class="info-item">
                <span class="q-mr-sm">매칭</span>
                {{ inquiry.matching }}
              </div>
              <div class="info-item text-secondary">
                <span class="q-mr-sm">평점</span>
                {{ inquiry.grade }}
              </div>
            </div>
          </q-card-section>

          <q-separator inset />
          <!-- company Q & A -->
          <q-card-section class="row items-center">
            <div
              class="row justify-center items-center bg-dark text-white"
              style="height: 36px; width: 36px; border-radius: 50%;0"
            >
              Q
            </div>
            <div class="question-section">
              <div class="question-message">
                {{ inquiry.question.message }}
              </div>
              <div class="question-date">
                {{ inquiry.question.date }}
              </div>
            </div>
          </q-card-section>
          <q-separator inset v-if="inquiry.answer" />
          <q-card-section
            class="row items-center answer-section"
            v-if="inquiry.answer"
          >
            <div
              class="row justify-center items-center bg-secondary text-white"
              style="height: 36px; width: 36px; border-radius: 50%;0"
            >
              A
            </div>
            <div class="col ">
              <div class="answer-message notosanskr-medium">
                {{ inquiry.answer }}
              </div>
            </div>
          </q-card-section>

          <q-separator inset />
          <!-- buttons section -->
          <q-card-section class="row notosanskr-medium">
            <button class="col btn-modify" v-if="!inquiry.answer">
              수정하기
            </button>
            <button class="col btn-delete">
              삭제하기
            </button>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "Inquire",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleSlots: {
        bgHeader: "white",
        bgBody: "#F3F3F3",
        bgFooter: "",
      },
      inquiries: [
        {
          name: "원철거",
          state: "미답변",
          career: "11년",
          matching: "1,102회",
          grade: "4.0",
          question: {
            message: "100평이상 공간 철거비용 문의합니다.",
            date: "2020-08-01 [비밀글]",
          },
          answer: null,
        },
        {
          name: "혜성인철거",
          state: "미답변",
          career: "11년",
          matching: "1,102회",
          grade: "4.0/5",
          question: {
            message: "100평이상 공간 철거비용 문의합니다.",
            date: "2020-08-01 [비밀글]",
          },
          answer:
            "안녕하세요 고객님 답변이 늦어져서 죄송합니다. 자세한 비용은 저희 업체에 전화해주시길 부탁드립니다. 감사합니다.",
        },
        {
          name: "혜성인철거",
          state: "미답변",
          career: "11년",
          matching: "1,102회",
          grade: "4.0/5",
          question: {
            message: "100평이상 공간 철거비용 문의합니다.",
            date: "2020-08-01 [비밀글]",
          },
          answer:
            "안녕하세요 고객님 답변이 늦어져서 죄송합니다. 자세한 비용은 저희 업체에 전화해주시길 부탁드립니다. 감사합니다.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.company-name {
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  letter-spacing: -0.7px;
  color: #151515;
}
.company-state {
  height: 24px;
  width: 51px;
  background: #2cb3ff1c;
  border-radius: 100px;

  .state-text {
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.65px;
    color: #2cb3ff;
  }
}
.info-item {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  padding-bottom: 8px;
  color: #151515;
  span {
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #767676;
  }
}
.question-section {
  padding-left: 10px;
  .question-message {
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #5a5a5a;
  }
  .question-date {
    font-size: 12px;
    line-height: 18px;
    color: #767676;
  }
}
.answer-section {
  background: #2cb3ff1c;
  padding-top: 15px;
  padding-bottom: 16px;
  .answer-message {
    padding-left: 10px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.65px;
    color: #151515;
  }
}
.btn-modify,
.btn-delete {
  height: 40px;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  border-radius: 4px;
  background: white;
  margin: auto 4px;
}
</style>
