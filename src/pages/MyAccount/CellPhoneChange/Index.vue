<template>
  <default-wrapper :styleSlots="styleWrapperSlots">
    <template #pageHeader>
      <nav-header-info
        name="핸드폰 변경"
        class="full-width"
        backTo="my_account"
      />
    </template>

    <template #pageContent>
      <div style="padding: 30px 16px;">
        <q-select
          outlined
          v-model="phoneCountry"
          :options="phoneOptions"
          label="핸드폰"
        />
        <input
          type="text"
          class="input-number full-width"
          v-model="phoneNumber"
          placeholder="010-0000-0000"
        />
        <q-btn
          class="full-width notosanskr-regular my-btn verification"
          style="font-size:17px;"
          :rounded="false"
          flat
          :label="'인증번호 받기'"
          :class="{ 'btn-ready': phoneNumber }"
        />
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular my-btn btn-ready"
        style="font-size:17px;"
        :rounded="false"
        flat
        :label="'변경'"
      />
    </template>
  </default-wrapper>
</template>

<script>
import DefaultWrapper from "src/components/PageWrappers/DefaultWrapper";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  components: {
    "default-wrapper": DefaultWrapper,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleWrapperSlots: {
        bgHeader: "white",
        bgBody: "white",
        bgFooter: "white",
      },
      phoneCountry: null,
      phoneOptions: ["대한민국+82", "대한민국+81", "대한민국+80"],
      phoneNumber: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.input-number {
  border: solid 1px #d6d6d6;
  border-top: none;
  border-radius: 5px;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 36px;
  color: #151515;
  &::placeholder {
    color: #c0c0c0;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c0c0c0;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #c0c0c0;
  }
}

.my-btn {
  color: #919698;
  background: #e8eaeb;
  border-radius: 0;
  height: 60px;
  &.verification {
    margin-top: 30px;
    border-radius: 5px;
  }
}

.btn-ready {
  color: #ffffff;
  background: #46b3fc;
}
</style>
