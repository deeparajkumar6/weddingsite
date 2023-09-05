<template>
  <v-card
    color="white"
    class="ma-2"
    :class="isMobile ? 'NavBarMobile' : 'NavBar'"
    rounded="5"
    :width="isMobile ? '96%' : '70%'"
  >
    <div class="d-flex justify-space-evenly align-center">
      <v-card
        v-for="button in buttonlist"
        :key="button.text"
        :to="button.to"
        class="ma-2 elevation-0"
        :class="isMobile ? 'text-body-2' : ''"
      >
        <div class="d-flex flex-column justify-center align-center">
          <v-img height="20" width="20" :src="button.imgSrc"></v-img>
          <div class="text-primary">{{ button.text }}</div>
        </div>
      </v-card>
    </div>
  </v-card>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
const { isMobile } = storeToRefs(useAppStore());
</script>

<script>
export default {
  data() {
    return {
      buttonlist: [
        {
          text: "The Wedding",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/NavIcons/TheWedding.png",
          to: "/",
        },
        {
          text: "Events",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/NavIcons/Events.png",
          to: "/events",
        },
        {
          text: "Rituals",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/NavIcons/Rituals.png",
          to: "/rituals",
        },
        {
          text: "Travel & Stay",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/NavIcons/Travel.png",
          to: "/travel",
        },
      ],
    };
  },
  methods: {
    async getImgUrl(imgSrc) {
      let url = new URL(imgSrc, import.meta.url);
      return url.href;
    },
  },
};
</script>
<style scoped>
.v-btn {
  text-transform: none !important;
}
.NavBarMobile {
  position: absolute;
  bottom: 0;
  z-index: 2;
  text-align: center;
}

.NavBar {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
}
</style>
