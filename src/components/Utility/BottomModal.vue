<template lang="pug">
  q-dialog(v-model="modal" position="bottom")
</template>

<script>
import ModalMixins from 'src/mixins/ModalMixins'

export default {
  mixins:['ModalMixins'],
  inject: ['openModal'],
  created() {
    // this.modal = this.openModal;
  },
  watch: {
    openModal: {
      deep: true,
      handler(newVal) {
        console.log("newVal", newVal)
      },
    }
  },
}
</script>