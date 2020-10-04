<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-sm q-pt-sm">
          <div class="title notosanskr-regular">대표 서비스</div>
          <!-- service selection section -->
          <div
            class="representative-service"
            v-if="selectRepresentativeComplete"
          >
            <div class="selection-text notosanskr-regular">
              선택된 대표 서비스
            </div>

            <div class="selected-item row justify-between q-mt-sm">
              <div class="text  notosanskr-medium">
                <span
                  class="q-mr-lg"
                  v-for="(item, i) in selectedRepresentative"
                  :key="i"
                  ># {{ item }}</span
                >
              </div>
              <button @click="cancelSelection()">선택취소</button>
            </div>
          </div>
          <!--  Select representative service STARTS -->
          <div class="selection-section" v-if="!selectRepresentativeComplete">
            <div class="selection-text q-pb-sm  notosanskr-medium">
              대표 서비스 선택
              <span style="color: #959595">(중복 선택 가능)</span>
            </div>
            <div class="row q-col-gutter-sm q-px-sm q-mt-lg notosanskr-regular">
              <div
                class="service-item"
                style="margin: 6px 12px 6px 0;"
                v-for="(item, index) in representativeService"
                :key="index"
                :class="{ selected: selectedRepresentative.includes(item) }"
                @click="selectRepresentativeItem(item)"
              >
                <q-icon
                  name="done"
                  class="done-icon"
                  size="16px"
                  v-if="selectedRepresentative.includes(item)"
                  style="color:' #195de4'"
                ></q-icon
                >{{ item }}
              </div>
            </div>
          </div>
          <!--  Select Select waste sub-field  STARTS -->
          <div
            class="selection-section"
            v-if="
              selectedRepresentative.includes('폐기물') &&
                selectRepresentativeComplete
            "
          >
            <div class="selection-text q-pb-sm  notosanskr-medium">
              폐기물 세부 분야 선택
              <span style="color: #959595">(중복 선택 가능)</span>
            </div>
            <div class="row q-col-gutter-sm q-mt-lg notosanskr-regular">
              <div
                class="service-item"
                v-for="(item, index) in wasteItems"
                :key="index"
                :class="{ selected: selectedWasteItems.includes(item) }"
                @click="selectWasteItem(item)"
                style="width:165px; margin: 6px;"
              >
                <q-icon
                  name="done"
                  class="done-icon"
                  size="16px"
                  v-if="selectedWasteItems.includes(item)"
                  style="color:' #195de4'"
                ></q-icon
                >{{ item }}
              </div>
            </div>
          </div>
          <!--  Selection of detailed areas for demolition ENDS -->
          <div
            class="selection-section"
            v-if="
              selectedRepresentative.includes('철거') &&
                selectRepresentativeComplete
            "
          >
            <div class="selection-text q-pb-sm  notosanskr-medium">
              철거 세부 분야 선택
              <span style="color: #959595">(중복선택가능)</span>
            </div>
            <div class="row q-col-gutter-sm q-mt-lg notosanskr-regular">
              <div
                class="service-item"
                v-for="(item, index) in demolitionArea"
                :key="index"
                :class="{ selected: selectedDemolitionArea.includes(item) }"
                @click="selectDemolitionArea(item)"
                style="width:165px; margin: 6px;"
              >
                <q-icon
                  name="done"
                  class="done-icon"
                  size="16px"
                  v-if="selectedDemolitionArea.includes(item)"
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
        :disabled="!nextBtnReady"
        :class="{ 'btn-ready': nextBtnReady }"
        @click="goNext()"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "RepresentativeService",
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
      nextBtnReady: false,
      selectRepresentativeComplete: false,
      selectedRepresentative: [],
      representativeService: ["폐기물", "철거"],
      selectedWasteItems: [],
      wasteItems: [
        "가정집 폐기물",
        "사업장 폐기물",
        "건설 폐기물",
        "재활용 정기수거",
      ],
      selectedDemolitionArea: [],
      demolitionArea: ["내부철거", "건물철거", "구조물 철거", "석면철거"],
    };
  },
  methods: {
    selectRepresentativeItem(item) {
      if (!this.selectedRepresentative.includes(item)) {
        this.selectedRepresentative.push(item);
      } else {
        this.selectedRepresentative = this.selectedRepresentative.filter(
          (service) => service != item
        );
      }
      this.isNextReady();
    },
    selectWasteItem(item) {
      if (!this.selectedWasteItems.includes(item)) {
        this.selectedWasteItems.push(item);
      } else {
        this.selectedWasteItems = this.selectedWasteItems.filter(
          (service) => service != item
        );
      }
      this.isNextReady();
    },
    selectDemolitionArea(item) {
      if (!this.selectedDemolitionArea.includes(item)) {
        this.selectedDemolitionArea.push(item);
      } else {
        this.selectedDemolitionArea = this.selectedDemolitionArea.filter(
          (service) => service != item
        );
      }
      this.isNextReady();
    },
    isNextReady() {
      if (
        !this.selectRepresentativeComplete &&
        this.selectedRepresentative.length
      ) {
        this.nextBtnReady = true;
      } else if (
        this.selectRepresentativeComplete &&
        (this.selectedWasteItems.length || this.selectedDemolitionArea.length)
      ) {
        this.nextBtnReady = true;
      } else {
        this.nextBtnReady = false;
      }
    },
    goNext() {
      if (!this.selectRepresentativeComplete) {
        this.selectRepresentativeComplete = true;
        this.nextBtnReady = false;
      } else {
        this.$router.push({ name: "proof_company" });
      }
    },
    cancelSelection() {
      this.selectedRepresentative = [];
      this.selectedWasteItems = [];
      this.selectRepresentativeComplete = false;
      this.nextBtnReady = false;
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
.representative-service {
  margin-top: 36px;
  .selected-item {
    background: #f7f7f6;
    height: 68px;
    padding: 16px;
    font-weight: 500;

    .text {
      font-size: 22px;
      line-height: 36px;
      letter-spacing: -1.1px;
      color: #151515;
    }

    button {
      border: 1px solid #d9d9d9;
      background: #ffffff;
      box-sizing: border-box;
      border-radius: 4px;
      height: 28px;
      font-size: 13px;
      line-height: 26px;
      text-align: center;
      letter-spacing: -0.6px;
      color: #767676;
      cursor: pointer;
    }
  }
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
    width: 192px;
    border: 1px solid #d9d9d9;
    background: #ffffff;

    box-sizing: border-box;
    border-radius: 1000px;
    padding: 8px 20px;

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
