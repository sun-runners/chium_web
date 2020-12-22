<template>
  <div>
    <q-btn
      flat
      class="change-btn notosanskr-medium"
      padding="0px"
      @click="dialog = true"
    >
      변경
    </q-btn>
    <q-dialog v-model="dialog" position="bottom">
      <q-card class="notosanskr-regular">
        <q-card-section
          class="q-pa-none q-py-sm row items-center justify-between full-width"
        >
          <div class="heading-title q-pl-md notosanskr-medium">
            의뢰장소 변경
          </div>
          <q-btn color="white" flat text-color="black" @click="dialog = false">
            <q-icon name="close" />
          </q-btn>
        </q-card-section>

        <q-card-section>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="dark"
            align="justify"
          >
            <q-tab name="recent_place">
              <div class="notosanskr-medium tabs-text">
                최근 장소
              </div>
            </q-tab>
            <q-tab name="new_place">
              <div class="notosanskr-medium tabs-text">
                새로운 장소
              </div>
            </q-tab>
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="recent_place">
              <div class="text-h6">Recent Place</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="new_place">
              <div class="text-h6">New Place</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: "",
      tab: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 100%;
  max-width: 1000px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 100vh;
}
.heading-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.75px;
  color: #15161a;
}
.tabs-text {
  font-weight: 500;
  font-size: 15px;
  line-height: 48px;
  text-align: center;
  letter-spacing: -0.75px;
}
.change-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  margin: 0px;
  letter-spacing: -0.8px;
  padding: 0 16px;
  color: #195de4;
}
</style>
