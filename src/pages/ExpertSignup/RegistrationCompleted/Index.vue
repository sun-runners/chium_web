<template>
  <default-template :styleSlots="styleSlots">
    <template #pageHeader>
      <div class="row items-center text-dark q-px-sm" style="height: 44px;">
        <router-link
          :to="{ name: 'my_page' }"
          class="row items-center"
          style="text-decoration:none; width: 56px;"
        >
          <q-icon class="text-dark" name="close" size="24px" />
        </router-link>
      </div>
    </template>
    <template #pageBody>
      <div class="bg-white full-height">
        <div class="row items-center">
          <div style="margin-top:88px;" class="col-12 row justify-center">
            <q-icon class="text-dark" size="60px">
              <q-img src="~assets/circle_check_blue.svg" :ratio="1" />
            </q-icon>
          </div>
          <div class="main-text q-mt-md col-12 notosanskr-medium">
            가입신청 완료
          </div>

          <div class="row justify-center full-width q-mt-xs">
            <div class="sub-text text-center notosanskr-regular">
              전문가 계정으로 가입신청이 완료되었습니다. 업체 자격을 검토 후
              가입이 승인이됩니다.
            </div>
          </div>

          <div
            class="col-12 row justify-center items-center"
            style="height: 68px; margin-top: 36px;"
          >
            <q-icon class="text-dark" style="width: 266px;">
              <q-img src="~assets/procedure-guidance.svg" />
            </q-icon>
          </div>
        </div>
      </div>
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from "src/components/TemplateFrames/DefaultTemplate";
import NavHeaderInfo from "src/components/Utility/NavHeaderInfo";
export default {
  name: "RegistrationCompleted",
  components: {
    "default-template": DefaultTemplate,
    "nav-header-info": NavHeaderInfo,
  },
  data() {
    return {
      styleSlots: {
        bgHeader: "white",
        bgBody: "white",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main-text {
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -1.35px;
  color: #151515;
}

.sub-text {
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.65px;
  color: #959595;
  width: 227px;
}
</style>
