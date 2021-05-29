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
        totalSteps: 6,
        activeStep: 3,
        btnLabel: '다음',
        isBtnReady: true,
        isBtnHidden: false,
        requestComplete: false,
        nextPathRoute: '/request/demolition/four/structure',
        prevPathRoute: '/request/demolition/two/structure'
      }
    }
  },
  mounted () {
    this.$emit('setStateLayout', this.layoutState)
  },
  methods: {
    setImages (image) {
      // image content is in image
      console.log(image)
      this.$emit('setEnquiryData', { image: image })
      this.$emit('next', true)
    }
  }
}
</script>

<style lang="scss" scoped></style>
