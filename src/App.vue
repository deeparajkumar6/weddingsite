<template>
  <v-app>
    <v-main>
      <router-view />
      <NavBar />
    </v-main>
  </v-app>
</template>
<script setup>
import { useAppStore } from "@/store/app";
</script>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
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
  // watch route change and scroll screen to top
  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
