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
              class="rounded-pill"
              src="https://d11wxd06uhkmuf.cloudfront.net/sowjanya.jpg"
              aspect-ratio="1"
              :width="widthOfPic"
            ></v-img>
          </v-col>
          <CountDown :cols="isMobile ? null : 6" v-if="!isMobile" />
          <v-col :cols="isMobile ? null : 3">
            <v-img
              src="https://d11wxd06uhkmuf.cloudfront.net/kaarthik.jpg"
              aspect-ratio="1"
              class="rounded-pill"
              :width="widthOfPic"
            ></v-img>
          </v-col>
        </v-row>
        <v-row
          class="text-secondary d-flex flex-column justify-center align-center"
        >
          <div
            class="d-flex my-2 NameClass"
            :class="isMobile ? 'flex-column text-h4' : 'text-h2'"
          >
            <div>Sowjanya</div>
            <div>&nbsp; & &nbsp;</div>
            <div>Kaarthik</div>
          </div>
          <div
            class="d-flex flex-column justify-center align-center"
            :class="isMobile ? 'text-body-1' : 'text-h5'"
          >
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

  methods: {
    start() {
      this.$confetti.start({
        particlesPerFrame: 0.8,
        windSpeedMax: 0.25,
        particles: [
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(1).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(2).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(3).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(4).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(5).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(6).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(7).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(8).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(9).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(10).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(11).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(12).png",
          },
        ],
      });
    },

    stop() {
      this.$confetti.stop();
    },

    updateConfetti() {
      this.$confetti.update({
        particles: [
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(1).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(2).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(3).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(4).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(5).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(6).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(7).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(8).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(9).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(10).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(11).png",
          },
          {
            type: "image",
            url: "https://d11wxd06uhkmuf.cloudfront.net/confetti/flower%20(12).png",
          },
        ],
      });
    },
  },
  mounted() {
    this.updateConfetti();
    // start confetti and after 5 seconds stop it
    this.start();
    setTimeout(() => {
      this.stop();
    }, 5000);
  },
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
  text-align: center;
}
</style>
