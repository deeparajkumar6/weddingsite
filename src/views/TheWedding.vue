<template>
  <v-responsive class="Wedding fill-height ma-0 pa-0">
    <CenterThoranam />
    <v-row class="d-flex" style="height: 100vh">
      <HomePageSideThoranam :colsThoranam="colsThoranam" :isMobile="isMobile" />
      <v-col
        class="d-flex flex-column justify-center align-center my-auto"
        :class="isMobile ? 'mx-0 pa-0' : ''"
      >
        <CountDown v-if="isMobile" />
        <v-row class="my-2">
          <v-col :cols="isMobile ? null : 3">
            <v-img
              src="../assets/DummyPic.png"
              aspect-ratio="1"
              :width="widthOfPic"
            ></v-img>
          </v-col>
          <CountDown :cols="isMobile ? null : 6" v-if="!isMobile" />
          <v-col :cols="isMobile ? null : 3">
            <v-img
              src="../assets/DummyPic.png"
              aspect-ratio="1"
              :width="widthOfPic"
            ></v-img>
          </v-col>
        </v-row>
        <v-row
          class="text-secondary d-flex flex-column justify-center align-center"
        >
          <div
            class="d-flex my-2 NameClass"
            :class="isMobile ? 'flex-column text-h5' : 'text-h4'"
          >
            <div>Sowjanya</div>
            <div>&nbsp; & &nbsp;</div>
            <div>Kaarthik</div>
          </div>
          <div class="d-flex flex-column justify-center align-center">
            <div class="mt-4">December 13 & 14, 2023</div>
            <div class="mt-2">Manghalam Weddings & Conventions,</div>
            <div>Srirangam, Trichy, Tamil Nadu.</div>
          </div>
        </v-row>
      </v-col>
      <HomePageSideThoranam :colsThoranam="colsThoranam" :isMobile="isMobile" />
    </v-row>
  </v-responsive>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
import CenterThoranam from "./CenterThoranam.vue";
import CountDown from "./CountDown.vue";
const { isMobile } = storeToRefs(useAppStore());
</script>

<script>
import HomePageSideThoranam from "../components/HomePageSideThoranam.vue";
export default {
  data: () => ({
    windowWidth: window.innerWidth,
  }),
  computed: {
    colsThoranam() {
      const store = useAppStore();
      return store.isMobile ? "2" : "1";
    },
    widthOfPic() {
      const store = useAppStore();
      return store.isMobile ? "100" : "200";
    },
  },
  components: { HomePageSideThoranam, CenterThoranam, CountDown },
};
</script>
<style scoped>
.Wedding {
  background-color: #a4091a;
  height: auto;
  color: white;
}

.NameClass {
  font-family: "Ribeye Marrow" !important;
}
</style>
