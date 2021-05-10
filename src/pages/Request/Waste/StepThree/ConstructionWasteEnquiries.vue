<template>
  <div>
    <upload-picture-site @attachImage="setImages" />
  </div>
</template>

<script>
import { UploadPictureSite } from 'src/components/RequestEstimate/Common'
export default {
  components: {
    'upload-picture-site': UploadPictureSite
  },
  computed: {
    layoutState () {
      return {
        totalSteps: 9,
        activeStep: 3,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/waste/four/construction',
        prevPathRoute: '/request/waste/two/construction'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setImages (image) {
      // image content is in image
      this.$emit('setEnquiryData', { image: image })
      this.$emit('next', true)
    }
  }
}
</script>

<style scoped></style>
