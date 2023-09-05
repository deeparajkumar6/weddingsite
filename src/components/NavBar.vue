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
          <v-img height="20" width="20" :src="getImgUrl(button.imgSrc)"></v-img>
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
          imgSrc: "../assets/NavIcons/TheWedding.png",
          to: "/",
        },
        {
          text: "Events",
          imgSrc: "../assets/NavIcons/Events.png",
          to: "/events",
        },
        {
          text: "Rituals",
          imgSrc: "../assets/NavIcons/Rituals.png",
          to: "/rituals",
        },
        {
          text: "Travel & Stay",
          imgSrc: "../assets/NavIcons/Travel.png",
          to: "/travel",
        },
      ],
    };
  },
  methods: {
    getImgUrl(imgSrc) {
      console.log("imgSrc: ", imgSrc);
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
