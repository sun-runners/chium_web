<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-md q-pt-sm">
          <div class="title notosanskr-regular">서비스 지역</div>
          <!-- service selection section -->
          <div class="selection-section notosanskr-regular">
            <div class="selection-text q-pb-sm">
              서비스 지역 선택
              <span style="color: #959595">(중복 선택 가능)</span>
            </div>
            <div class="row q-col-gutter-sm q-mt-lg notosanskr-regular">
              <div
                class="service-item "
                v-for="(item, index) in serviceItems"
                :key="index"
                :class="{ selected: selectedServices.includes(item) }"
                @click="selectItem(item)"
              >
                <q-icon
                  name="done"
                  class="done-icon"
                  size="16px"
                  v-if="selectedServices.includes(item)"
                  style="color:' #195de4'"
                ></q-icon
                >{{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer "
        style="font-size:17px;"
        :rounded="false"
        flat
        label="다음"
        :class="{ 'btn-ready': selectedServices.length }"
        @click="$router.push({ name: 'representative_service' })"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "ServiceArea",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleSlots: {
        bgBody: "white",
        bgFooter: "white",
      },
      selectedServices: [],
      serviceItems: [
        "전국",
        "서울",
        "인천",
        "경기",
        "강원",
        "세종",
        "충남/충북",
        "경남/경북",
        "대전",
        "전남/전북",
        "대구",
        "울산",
        "부산",
        "제주",
      ],
    };
  },
  methods: {
    selectItem(item) {
      if (!this.selectedServices.includes(item)) {
        this.selectedServices.push(item);
      } else {
        this.selectedServices = this.selectedServices.filter(
          (service) => service != item
        );
      }
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 27px;
  line-height: 40px;
  letter-spacing: -1.35px;
  color: #151515;
}
.selection-section {
  margin-top: 36px;
  .selection-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }

  .service-item {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #151515;

    border: 1px solid #d9d9d9;
    background: #ffffff;

    box-sizing: border-box;
    border-radius: 1000px;
    padding: 8px 20px;
    margin: 6px 12px 6px 0;

    &.selected {
      padding-left: 4px;
      border: 1px solid #195de4;
      color: #195de4;
    }
    .done-icon {
      padding: 0px;
    }
  }
}
.btn-footer {
  color: #919698;
  background: #e8eaeb;
  border-radius: 0;
  height: 60px;
}

.btn-ready {
  color: #ffffff;
  background: #46b3fc;
}
</style>
