<template>
  <div class="bg-white notosanskr-regular">
    <div class="q-px-md">
      <div class="ask-work q-pa-none">
        <span>작업 유형</span>
        을 선택해주세요.
      </div>
      <div class="select-work-type">
        <!-- -------------Home Space -->
        <div class="work-type row items-center justify-between" style="margin-bottom: 25px;">
          <div class="row">
            <q-icon class="text-dark" size="30px">
              <img src="~assets/square_home.svg" />
            </q-icon>
            <div class="row items-center q-ml-md">철거</div>
          </div>

          <radio-check-icon
            :currentValue="workType"
            value="demolition"
            name="workType"
            @change="(value)=> workType = value"
          ></radio-check-icon>
        </div>
        <!-- ------------Commercial Space -->
        <div class="work-type row items-center justify-between">
          <div class="row">
            <q-icon class="text-dark" size="30px">
              <img src="~assets/trash.svg" />
            </q-icon>
            <div class="row items-center q-ml-md">폐기물 처리</div>
          </div>

          <radio-check-icon
            :currentValue="workType"
            value="waste_disposal"
            name="workType"
            @change="(value)=> workType = value"
          ></radio-check-icon>
        </div>
      </div>
    </div>
    <!--  Tab panels starts here -->
    <q-tab-panels v-model="workType" animated transition-next="slide-left" flat class>
      <q-tab-panel name="demolition" class="q-pa-none">
        <div style="background: #F2F2F2; height: 10px"></div>
        <div class="q-px-md">
          <div class="specific-type">철거 내용을 선택해주세요.</div>
          <div class="q-py-md row">
            <q-btn
              unelevated
              rounded
              class="work-type-button"
              :class="{'work-type-selected': selectedWorkType == item}"
              v-for="(item, index) in demolitionType"
              :key="index"
              :label="item"
              @click="workTypeSelected(item)"
            />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import RadioCheckIcon from "components/Utility/RadioCheckIcon";
export default {
  components: {
    "radio-check-icon": RadioCheckIcon,
  },
  data() {
    return {
      workType: "",
      selectedWorkType: "",
      demolitionType: ["부분철거", "전체철거"],
    };
  },
  methods: {
    workTypeSelected(value) {
      this.selectedWorkType = value;
      this.$emit("next", true);
    },
  },
  watch: {
    workType: function () {
      if (this.workType == "waste_disposal") {
        this.selectedWorkType = "waste_disposal";
        this.$emit("next", true);
      } else {
        this.selectedWorkType = "";
        this.$emit("next", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ask-work {
  width: 149px;
  font-size: 27px;
  line-height: 40px;
  /* or 148% */

  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 40px;
  /* or 148% */
  margin-top: 30px;
  letter-spacing: -1.35px;
  span {
    color: #46b3fc;
  }
}

.select-space-type {
  padding: 35px 0px;
  .space-type {
    height: 44px;
  }
}

.specific-type {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #888888;
  padding-top: 35px;
}

.work-type-button {
  background: #f1f1f1;
  font-size: 14px;
  line-height: 32px;
  margin: 7.5px 5px;
}

.select-work-type {
  padding: 35px 0px;
  .work-type {
    height: 44px;
  }
}

.work-type-selected {
  background: #46b3fc;
  color: white;
}
</style>