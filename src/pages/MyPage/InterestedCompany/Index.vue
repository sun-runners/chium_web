<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <nav-header-info name="내 계정" class="full-width" backTo="my_page" />
    </template>
    <template #pageBody>
      <div class="q-pa-sm">
        <q-card
          flat
          bordered
          class="my-card"
          style="margin-bottom: 10px"
          v-for="(company, index) in interestedCompanies"
          :key="index"
        >
          <q-card-section class="item-header notosanskr-medium q-py-none">
            {{ company.storeName }}
          </q-card-section>

          <q-separator inset />

          <q-card-section class="row">
            <q-img
              src="https://placeimg.com/500/300/nature"
              style="max-width: 60px; height: 80px; margin-right: 14px;"
            >
            </q-img>
            <div class="col row justify-between items-center notosanskr-medium">
              <div class="info-section ">
                <div class="info-item">
                  <span class="q-mr-sm">경력</span>{{ company.career }}
                </div>
                <div class="info-item">
                  <span class="q-mr-sm">매칭</span>{{ company.matching }}
                </div>
                <div class="info-item">
                  <span class="q-mr-sm">평점</span>{{ company.rating }}
                </div>
              </div>
              <q-icon class="text-dark" size="30px" style="margin-right: 10px;">
                <img src="~assets/delete_circle.svg" />
              </q-icon>
            </div>
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
  name: "InterestedCompany",
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
      interestedCompanies: [
        {
          storeName: "어게인업",
          career: "11년",
          matching: "11,022회",
          rating: 4.9,
        },
        {
          storeName: "어게인업",
          career: "9년",
          matching: "920회",
          rating: 4.9,
        },
        {
          storeName: "어게인업",
          career: "920회",
          matching: "920회",
          rating: 4.9,
        },
        {
          storeName: "어게인업",
          career: "15년",
          matching: "1,1022회",
          rating: 4.9,
        },
        {
          storeName: "어게인업",
          career: "15년",
          matching: "1,1022회",
          rating: 4.9,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.item-header {
  font-weight: 500;
  font-size: 14px;
  line-height: 44px;
  letter-spacing: -0.7px;
  color: #151515;
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
</style>
