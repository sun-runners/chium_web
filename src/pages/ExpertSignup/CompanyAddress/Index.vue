<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-md q-pt-sm">
          <div class="title notosanskr-regular">업체주소</div>
          <!-- address section -->
          <div class="address-section notosanskr-regular">
            <div class="address-text q-pb-sm">주소</div>
            <div class="row q-col-gutter-sm">
              <div class="col-8">
                <input type="text" class="address-field full-width q-pa-sm" />
              </div>
              <div class="col-4">
                <button class="find-postal-btn full-width">
                  우편번호 찾기
                </button>
              </div>
              <div class="col-12">
                <input type="text" class="address-field full-width q-pa-sm" />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  class="address-field full-width q-pa-sm bg-white"
                  placeholder="나머지 상세주소를 입력하세요."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer btn-ready"
        style="font-size:17px;"
        :rounded="false"
        flat
        label="다음"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "CompanyAddress",
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
    };
  },
  methods: {},
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
.address-section {
  margin-top: 36px;
  .address-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
  .address-field {
    background: #f7f7f6;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;
  }
  .find-postal-btn {
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.7px;
    color: #195de4;
    height: 60px;
    border: 1px solid #195de4;
    box-sizing: border-box;
    border-radius: 8px;
    background: white;
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
