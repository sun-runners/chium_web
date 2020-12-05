<template>
  <div class="bg-white">
    <q-input
      filled
      borderless
      placeholder="철거업체 통합검색"
      class="full-width"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <q-tabs inline-label dense align="justify" class="q-mt-sm bg-white">
      <q-route-tab
        class="text-secondary q-pa-sm"
        v-for="tab in tabs"
        :key="tab.name"
        :name="tab.name"
        v-bind="tab"
        :to="{ name: tab.routeName }"
      />
    </q-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { name: "company_name", label: "전국" },
        { name: "place1", label: "서울시" },
        { name: "place2", label: "경기도" },
        { name: "place3", label: "인천" },
        { name: "place4", label: "대구" },
        { name: "place5", label: "경남/경북" },
        { name: "place6", label: "전라/충청" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
