<template>
  <div class="">
    <div class="row q-col-gutter-md q-pa-md">
      <div v-for="(list, key) in options" :key="key" class="col-6">
        <q-btn
          @click="selectItem(list)"
          class="full-width selected-btn row wrap justify-"
          :class="{ selected: (discardedItems.includes(list)) }"
          flat
        >
          <q-icon v-if="discardedItems.includes(list)" size="20px" name="check" color="blue" />
          {{ list }}
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { filter } from 'lodash'

export default {
  props: {
    options: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      myItem: '',
      label: '',
      discardedItems: []
    }
  },

  methods: {
    selectItem (val) {
      if (this.discardedItems.includes(val)) {
        this.discardedItems = filter(this.discardedItems, (item) => {
          return item !== val
        })
        return
      }

      this.discardedItems.push(val)
    },
    addToDiscarded () {
      if (this.myItem && !this.discardedItems.includes(this.myItem)) {
        this.discardedItems.push(this.myItem);
      }
      this.myItem = "";
      this.$refs.myItemField.blur();
    },
    removeFromDiscarded (item) {
      if (this.discardedItems.includes(item)) {
        this.discardedItems = this.discardedItems.filter((i) => i != item);
      }
    },
  },
  watch: {
    discardedItems (newVal) {
      this.$emit("next", true);
      if (!newVal.length) {
        this.$emit("next", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.heading-title {
  font-size: 27px;
  line-height: 38px;
  display: flex;
  align-items: center;
  letter-spacing: -1.35px;
  color: #15161a;
  padding-bottom: 36px;
}
.heading-subtitle {
  color: #959595;
}
.selected-btn {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 1000px;
  font-size: 15px;
  line-height: 48px;
}

.selected {
  border: 1px solid #195DE4;
  color: #195DE4;
}
</style>
