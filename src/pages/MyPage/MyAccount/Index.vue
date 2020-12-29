<template>
  <default-template :styleSlots="styleWrapperSlots">
    <template #pageHeader>
      <nav-header-info name="내 계정" class="full-width" backTo="my_page" />
    </template>

    <template #pageBody>
      <div style="padding-left: 16px;">
        <!-- Account Info Section -->
        <div class="account notosanskr-regular">
          <small>계정</small>
          <div style="padding-top: 7px;">
<!--            <q-icon class="text-dark" size="20px" style="margin-right: 10px;">-->
<!--              <img src="~assets/apple_link.svg" />-->
<!--            </q-icon>-->
            <span class="name">카카오 계정 연동</span>
          </div>
        </div>
        <q-separator></q-separator>
        <!-- Name Section -->
        <div class="username notosanskr-regular">
          <small>이름</small>
          <input style="display:block; width: 100%; border: 0; margin-top: 5px;" class="name"
                 v-model="name"
                 placeholder="이름을 입력해주세요."/>
        </div>
        <q-separator></q-separator>
        <!-- Phone Section -->
        <div class="phone notosanskr-regular row justify-between items-center">
          <div>
            <small>핸드폰</small>
            <input style="display:block; width: 100%; border: 0; margin-top: 5px;" class="name"
                   v-model="phone"
                   placeholder="핸드폰 번호를 입력해주세요."/>
          </div>
<!--          <div class="q-pr-sm">-->
<!--            <q-btn-->
<!--              :to="{ name: 'account_phone_change' }"-->
<!--              flat-->
<!--              class="change-btn"-->
<!--              padding="4px 12px"-->
<!--              text-color="black"-->
<!--              label="변경"-->
<!--            />-->
<!--            <button class="verification-btn">-->
<!--              <q-icon name="done" class="text-dark" size="16px"></q-icon-->
<!--              >인증완료-->
<!--            </button>-->
<!--          </div>-->
        </div>
        <q-separator></q-separator>
      </div>
    </template>
    <template #pageFooter>
      <q-btn
        class="full-width notosanskr-regular btn-footer btn-ready"
        style="font-size:17px;"
        :rounded="false"
        flat
        :label="'저장'"
        @click="save"
      />
    </template>
  </default-template>
</template>

<script>
import DefaultTemplate from 'src/components/TemplateFrames/DefaultTemplate'
import NavHeaderInfo from 'src/components/Utility/NavHeaderInfo'
export default {
  components: {
    'default-template': DefaultTemplate,
    'nav-header-info': NavHeaderInfo
  },
  data () {
    return {
      styleWrapperSlots: {
        bgHeader: 'white',
        bgBody: 'white',
        bgFooter: 'white'
      },
      name: null,
      phone: null
    }
  },
  created () {
    this.name = this.$store.getters.user.name
    this.phone = this.$store.getters.user.phone
  },
  methods: {
    async save () {
      await this.$store.commit('patchUser', { name: this.name, phone: this.phone })
    }
  }
}
</script>

<style lang="scss" scoped>
.account,
.username,
.phone {
  padding: 20px 0 15px;
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

.change-btn {
  background: #f4f4f6;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.65px;
  color: #151515;
}
.verification-btn {
  margin-left: 8px;
  padding: 4px 8px;
  border: 1px solid #d6d6d6;
  background: white;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.65px;
  color: #767676;
  i {
    margin-right: 5px;
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
