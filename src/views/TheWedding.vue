<template>
  <v-responsive class="Wedding fill-height ma-0 pa-0">
    <v-row class="d-flex">
      <HomePageSideThoranam :colsThoranam="colsThoranam" :isMobile="isMobile" />
      <v-col>
        <v-img
          class="mx-auto"
          :height="heightOfCenterThoranam"
          max-width="800"
          src="@/assets/home-thoranam.png"
        ></v-img>
        <div>Countdown to our big day!</div>
      </v-col>
      <HomePageSideThoranam :colsThoranam="colsThoranam" :isMobile="isMobile" />
    </v-row>
  </v-responsive>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
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
    heightOfCenterThoranam() {
      const store = useAppStore();
      return store.isMobile ? "auto" : "25vh";
    },
  },
  components: { HomePageSideThoranam },
};
</script>
<style scoped>
.Wedding {
  background-color: #a4091a;
  height: auto;
  color: white;
}
</style>
