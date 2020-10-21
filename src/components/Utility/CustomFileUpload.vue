<template>
  <div>
    <q-file
      outlined
      class="field"
      ref="filepicker"
      :label="label"
      v-model="myFile"
      v-show="!myFile"
    >
      <template v-slot:append>
        <div class="attachment notosanskr-medium">첨부</div>
      </template>
    </q-file>

    <div
      class="picked-file row justify-between items-center"
      @click="toggleFilePicker"
      v-show="myFile"
    >
      <q-icon name="o_photo_size_select_actual" color="secondary" />
      <div class="q-pl-sm col text-secondary">{{ myFile ? myFile.name : ''}}</div>

      <div class="attachment notosanskr-medium">첨부</div>
    </div>
  </div>
</template>

<script>
/**
 * event emit @changed will emit the file selected
 */
export default {
  name: "CustomFileUploader",
  data() {
    return {
      myFile: null,
    };
  },
  props: {
    label: "",
  },
  methods: {
    toggleFilePicker() {
      this.$refs.filepicker.pickFiles();
    },
  },
  watch: {
    myFile() {
      this.$emit("changed", this.myFile);
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  .attachment {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.8px;
    color: #195de4;
  }
}
.picked-file {
  padding: 18px;
  background: #2cb2ff4d;
  cursor: pointer;
}
</style>