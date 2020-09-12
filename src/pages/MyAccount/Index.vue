<template>
  <default-wrapper>
    <div class="bg-white" style="min-height: 100vh;">
      <nav-header-info name="내 계정" backTo="my_page" />
      <div class="account notosanskr-regular">
        <small>계정</small>
        <div style="padding-top: 7px;">
          <q-icon class="text-dark" size="20px" style="margin-right: 10px;">
            <img src="~assets/apple_link.svg" />
          </q-icon>
          <span class="name"> </span>
          애플 계정 연동
        </div>
      </div>
      <q-separator style="margin-left: 16px;"></q-separator>
    </div>
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
};
</script>

<style lang="scss" scoped>
.account {
  padding: 20px 16px 15px;
  small {
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.65px;
    color: #767676;
  }
  .name {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.8px;
    color: #151515;
  }
}
</style>
