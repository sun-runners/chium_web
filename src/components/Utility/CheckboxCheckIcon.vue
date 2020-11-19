<template>
  <div>
    <input
      type="radio"
      class="q-pa-none q-ma-none"
      :name="name"
      @change="$emit('change', value)"
      :value="value"
      v-if="value != currentValue"
    />
    <q-icon class="text-dark q-pa-none q-ma-none" size="30px" v-else>
      <img src="~assets/circle_check_blue.svg" class="q-pa-none q-ma-none" />
    </q-icon>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    name: String,
    currentValue: String,
  },
};
</script>

<style scoped>
input[type="radio"] {
  height: 30px;
  width: 30px;
}
</style>
