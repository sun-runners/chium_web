<template>
  <div class="bg-white row justify-center">
    <q-layout view="hHh lpR fFf" class="justify-center">
      <q-header :elevated="elevatedHeader" class="bg-white" v-if="hasHeader()">
        <q-toolbar class="q-pa-none row justify-center">
          <div :style="sectionStyle('header')">
            <slot name="pageHeader" />
          </div>
        </q-toolbar>
      </q-header>

      <q-page-container class="row justify-center" style="min-height: 100vh">
        <div :style="sectionStyle('body')">
          <slot name="pageBody"></slot>
        </div>
      </q-page-container>

      <q-footer
        :elevated="elevatedFooter"
        class="bg-white row justify-center"
        v-if="hasFooter()"
      >
        <q-toolbar :style="sectionStyle('footer')" class="q-pa-none">
          <slot name="pageFooter" />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "DefaultTemplate",
  data() {
    return {};
  },
  props: {
    elevatedHeader: Boolean,
    elevatedFooter: Boolean,
    styleSlots: {
      type: Object,
      default: function() {
        return {
          bgHeader: "",
          bgBody: "",
          bgFooter: "",
        };
      },
    },
  },
  // mounted() {
  //   console.log("mounted");
  //   console.log(this.$slots.pageFooter);
  //   console.log(this.$slots.pageHeader);
  // },
  methods: {
    sectionStyle(section) {
      return {
        width: window.innerWidth + "px",
        "max-width": "1000px",
        "background-color": this.applySectionBg(section),
      };
    },
    applySectionBg(section) {
      switch (section) {
        case "header":
          return this.styleSlots.bgHeader;
          break;
        case "body":
          return this.styleSlots.bgBody;
          break;
        case "footer":
          return this.styleSlots.bgFooter;
          break;
        default:
          return "#F3F3F3";
          break;
      }
    },
    hasHeader() {
      return this.$slots.pageHeader;
    },
    hasFooter() {
      return this.$slots.pageFooter;
    },
  },
};
</script>

<style lang="scss" scoped></style>
