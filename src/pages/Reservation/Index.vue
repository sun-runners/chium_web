<template>
    <div style="background: #F2F2F2; height: 100vh;" class="q-pa-md">
       <div class="search-bar-container row">
            <q-input
                v-model="search"
                debounce="1000"
                filled
                placeholder="작업주소/업체명으로 검색"
                color="secondary"
                hint=""
                class="col-12"
                bg-color="white"
            >
                <template v-slot:prepend>
                <q-icon name="search" />
                </template>
            </q-input>
        </div>
        <div class="reservations-container">
            <p>contet</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>