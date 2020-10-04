<template>
  <default-template :styleSlots="styleSlots">
    <template #pageBody>
      <div class="bg-white">
        <div class="q-px-md q-pt-sm">
          <div class="title notosanskr-regular">업체 기본정보</div>
          <!-- name section -->
          <div class="name-section notosanskr-regular">
            <div class="name-text q-pb-sm">업체 명</div>
            <input
              type="text"
              class="name-field full-width q-pa-sm"
              placeholder="업체명을 입력해주세요."
              v-model="form.name"
            />
          </div>
          <!-- phone section -->
          <div class="phone-section">
            <div class="phone-text">
              전화번호
            </div>
            <div class="row q-col-gutter-sm">
              <div class="col-4">
                <input
                  type="number"
                  class="phone-field full-width"
                  name=""
                  id=""
                  v-model="form.phone.fieldOne"
                />
              </div>
              <div class="col-4">
                <input
                  type="number"
                  class="phone-field full-width"
                  name=""
                  id=""
                  v-model="form.phone.fieldTwo"
                />
              </div>
              <div class="col-4">
                <input
                  type="number"
                  class="phone-field full-width"
                  name=""
                  id=""
                  v-model="form.phone.fieldThree"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer"
        style="font-size:17px;"
        :class="{ 'btn-ready': formComplete }"
        :rounded="false"
        flat
        label="다음"
        @click="$router.push({ name: 'company_address' })"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "CompanyInformation",
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
      //   models start here
      form: {
        name: "",
        phone: {
          fieldOne: null,
          fieldTwo: null,
          fieldThree: null,
        },
      },
      formComplete: false,
    };
  },
  methods: {
    isFormFilled() {
      return (
        this.form.phone.fieldOne &&
        this.form.phone.fieldTwo &&
        this.form.phone.fieldThree &&
        this.form.name
      );
    },
  },
  watch: {
    form: {
      handler: function(value) {
        this.isFormFilled()
          ? (this.formComplete = true)
          : (this.formComplete = false);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
/* Hide number arrow on Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Hide number arrow on Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.title {
  font-size: 27px;
  line-height: 40px;
  letter-spacing: -1.35px;
  color: #151515;
}
.name-section {
  margin-top: 36px;
  .name-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
  .name-field {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;
  }
}
.phone-section {
  margin-top: 20px;
  .phone-text {
    padding-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
    color: #151515;
  }
  .phone-field {
    background: #ffffff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    border-radius: 8px;
    height: 60px;

    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #151515;
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
