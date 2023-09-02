<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup>
import { useAppStore } from "@/store/app";
</script>

<script>
export default {
  components: {
    // AppBar,
  },
  methods: {
    handleResize() {
      let windowWidth = window.innerWidth;
      // store in pinia
      const store = useAppStore();
      store.setWindowWidth(windowWidth);
    },
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>
