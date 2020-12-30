<template lang="pug">
  div(class="row justify-center items-center")
    div(class="col-12")
      q-tab-panels(v-model="steps" animated class="full-width")
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
import { mapGetters } from 'vuex'
import { AsYouType, parsePhoneNumber, ParseError } from 'libphonenumber-js'
import { cloneDeep, set, isEmpty, includes } from 'lodash'

const CONTACT_SCHEMA = {
  country_code: null,
  phone_number: null
}

const CODE_SCHEMA = {
  c1: null,
  c2: null,
  c3: null,
  c4: null
}

export default {
  created () {
    this.steps = this.$route.params.step;
  },
  data () {
    return {
      agree: false,
      steps: 1,
      model: cloneDeep(CONTACT_SCHEMA),
      code: cloneDeep(CODE_SCHEMA),
      openModal: false
    }
  },
  computed: {
    ...mapGetters('contact', ['contactOptions']),
    isValidNumber () {
      try {
        const phoneNumber = parsePhoneNumber(this.model.phone_number, 'KR')
        return phoneNumber.isValid()
      } catch (error) {
        if (error instanceof ParseError) {
          return false
        }
        return true
      }
    },
    isActivate () {
      const { activate } = this.$route.query
      return activate || false
    }
  },
  methods: {
    includes,
    isEmpty,
    sendCode () {
      if (this.isValidNumber) {
        this.$router.push({ path: '/auth/sign_up/2?activate=true' })
      }
    },
    goToTermsCondition (name) {
      this.$router.push({ path: `/auth/sign_up/terms_condition/${name}` })
    },
    AsYouType (val) {
      const num = new AsYouType('KR').input(val);
      set(this.model, 'phone_number', num)
    },
    revealDatePicker () {
      this.openModal = !this.openModal
    }
  },
  watch: {
    '$route.params.step': {
      deep: true,
      handler (_) {
        this.steps = _;
        this.$emit('changeStepping', _)
      }
    }
  },
  components: {
    // DateWheelPicker,
  }
}
</script>