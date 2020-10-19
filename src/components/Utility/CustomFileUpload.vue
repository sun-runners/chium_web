<template>
  <div>
    <q-file
      outlined
      class="field"
      ref="myFileSelector"
      :label="label"
      v-model="myFile"
      v-if="!myFile"
    >
      <template v-slot:append>
        <div class="attachment notosanskr-medium">첨부</div>
      </template>
    </q-file>
    <q-file
      outlined
      class="field"
      :class="{'have-content': myFile}"
      ref="myFileSelector"
      v-model="myFile"
      v-else
    >
      <template v-slot:prepend>
        <q-icon name="o_photo_size_select_actual" />
      </template>
      <template v-slot:append>
        <div class="attachment notosanskr-medium">첨부</div>
      </template>
    </q-file>
  </div>
</template>

<script>
/**
 * event @changed will emit the file selected
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
  &.have-content {
    background: #2cb2ff4d;
    color: red;
  }
  .attachment {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.8px;
    color: #195de4;
  }
}
</style>