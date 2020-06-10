<template>
    <q-tabs
        v-model="tab"
        inline-label
        shrink
        stretch
        >
            <q-tab v-for="tab in tabs" :key="tab.name" v-bind="tab" />
    </q-tabs>
</template>

<script>
export default {
    name: "headingTabs",
    data () {
        return {

        }
    },
}

</script>