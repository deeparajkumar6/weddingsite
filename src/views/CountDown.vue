<template>
  <v-col
    class="d-flex flex-column justify-center align-center ma-0 pa-0"
    :class="isMobile ? null : 'text-h6'"
  >
    <div class="mb-2">Countdown to our big day!</div>

    <div class="d-flex">
      <div
        class="countdown-item d-flex flex-column justify-center align-center"
      >
        <div>{{ days }}</div>
        <div>Days</div>
      </div>
      <div
        class="countdown-item d-flex flex-column justify-center align-center mx-1"
      >
        <div>:</div>
      </div>
      <div
        class="countdown-item d-flex flex-column justify-center align-center"
      >
        <div>{{ hours }}</div>
        <div>Hours</div>
      </div>
      <div
        class="countdown-item d-flex flex-column justify-center align-center mx-1"
      >
        <div>:</div>
      </div>
      <div
        class="countdown-item d-flex flex-column justify-center align-center"
      >
        <div>{{ minutes }}</div>
        <div>Minutes</div>
      </div>
      <div
        class="countdown-item d-flex flex-column justify-center align-center mx-1"
      >
        <div>:</div>
      </div>
      <div
        class="countdown-item d-flex flex-column justify-center align-center"
      >
        <div>{{ seconds }}</div>
        <div>Seconds</div>
      </div>
    </div>
  </v-col>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
const { isMobile } = storeToRefs(useAppStore());
</script>

<script>
export default {
  data: () => ({
    countDownDate: new Date("Dec 12, 2023 00:00:00").getTime(),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    interval: null,
  }),
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      this.interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.countDownDate - now;
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          clearInterval(this.interval);
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
        }
      }, 1000);
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
