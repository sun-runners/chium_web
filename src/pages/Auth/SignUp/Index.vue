<template lang="pug">    
  div(class="row flex justify-center")
    q-tab-panels(v-model="steps" animated class="full-width" style="max-width: 375px")
      q-tab-panel(class="col"  name="1")
        include blocks/step1
      q-tab-panel(class="col" name="2")
        include blocks/step2
      q-tab-panel(class="col" name="3")
        include blocks/step3
      q-tab-panel(class="col" name="4")
        include blocks/step4
  
</template>

<script>
import { mapGetters } from 'vuex';
import { AsYouType, findPhoneNumbersInText, parsePhoneNumberFromString, parsePhoneNumber, ParseError } from 'libphonenumber-js'
import { cloneDeep, set, isEmpty, includes } from 'lodash'

const CONTACT_SCHEMA = {
  country_code: null,
  phone_number: null,
};

const CODE_SCHEMA = {
  c1: null,
  c2: null,
  c3: null,
  c4: null,
}

export default {
  created() {
    this.steps = this.$route.params.step;
  },
  data() {
    return {
      agree: false,
      steps: 1,
      model: cloneDeep(CONTACT_SCHEMA),
      code: cloneDeep(CODE_SCHEMA),
      openModal: false,
    }
  },
  computed: {
    ...mapGetters('resources', ['contactOptions']),
    isValidNumber() {
      try {
        const phoneNumber = parsePhoneNumber(this.model.phone_number, 'KR')
        return phoneNumber.isValid()
      } catch (error) {
        if (error instanceof ParseError) {
          return false
        }
      }
    },
    isActivate() {
      const { activate } = this.$route.query;

      return activate || false;
    }
  },
  methods: {
    includes,
    isEmpty,
    sendCode() {
      if (this.isValidNumber) {
        this.$router.push({ path: '/auth/sign_up/2?activate=true' })
      }
    },
    goToTermsCondition(name) {
      this.$router.push({ path: `/auth/sign_up/terms_condition/${name}` });
    },
    AsYouType(val) {
      const num = new AsYouType('KR').input(val);
      set(this.model, 'phone_number', num)
    },
    revealDatePicker() {
      this.openModal = !this.openModal
    }
  },
  watch: {
    '$route.params.step': {
      deep: true,
      handler(_) {
        this.steps = _;
        this.$emit('changeStepping', _)
      },
    }
  },
  components:{
    DateWheelPicker,
  }
}
</script>

<style lang="stylus">
.title
    font-size: 27px
    font-family: 'notosanskr-regular'
.sub-title
    font-size: 14px
    font-family: 'notosanskr-regular'
    color: #5A5A5A

.see-more-btn
  border: 1px solid #CCCCCC
  min-height: 24px
  border-radius: 4px

.see-more-label
  font-family: 'notosanskr-regular'
  font-size: 12px

.q-checkbox__bg
  border-radius: 50px
  min-width: 20px
  min-height: 20px

.list-title
  font-family: 'notosanskr-regular'
  font-size: 15px

.item-lists
  padding-right: 0px
  padding-left: 0px
  padding-top: 10px
  padding-bottom: 10px

.get-verification-number-btn
  background-color: #C0C4C8
  max-height: 50px
  color: #fff
  font-family: 'notosanskr-medium'
  font-size: 15px

.field-qt
  max-height: 60px

.resend-auth-btn
  border: 1px solid #CCCCCC
  border-radius: 4px
  font-family: 'notosanskr-medium'
  font-size: 13px

.next-btn
  color: #ffffff
  background-color: #BCC0C5
  height: 52px
  border-radius: 5px
  font-family: 'notosanskr-medium'
  font-size: 13px
</style>