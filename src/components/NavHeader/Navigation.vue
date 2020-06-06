<template>
    <div class="q-pb-md">
        괘랑4길 16-38
        <q-btn v-if="currentRoute === 'home'" icon="arrow_drop_down_circle" dense color="secondary" rounded flat></q-btn>
        <div class="row justify-center" v-if="currentRoute === 'search'">
            <div class="col" :style="widthMax">
                <q-input filled borderless placeholder="철거업체 통합검색">
                    <template v-slot:prepend>
                        <q-icon name="search"  />
                    </template>
                    <template v-slot:append>
                        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
                    </template>
                </q-input>
                <q-tabs
                    inline-label
                    dense
                    align="justify"
                    class="q-mt-sm"
                >
                    <q-tab class="text-secondary q-pa-sm" name="mails" label="업체명" />
                    <q-tab class="text-secondary q-pa-sm" name="alarms" label="장소" />
                </q-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: ['currentRoute', 'widthMax'],
  data () {
    return {
    }
  }
}

</script>
