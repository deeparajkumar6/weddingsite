<template>
  <div>
    <v-img
      class="mx-auto centerImage"
      :height="heightOfCenterThoranam"
      width="100%"
      src="@/assets/mobilecenterthoranam.png"
      v-if="isMobile"
    ></v-img>

    <v-img
      class="mx-auto centerImage"
      :height="heightOfCenterThoranam"
      width="100%"
      src="@/assets/home-thoranam.png"
      v-else
    ></v-img>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
const { isMobile } = storeToRefs(useAppStore());
</script>
<script>
export default {
  computed: {
    heightOfCenterThoranam() {
      const store = useAppStore();
      return store.isMobile ? "auto" : "30vh";
    },
  },
};
</script>
<style scoped>
.centerImage {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
}
</style>
