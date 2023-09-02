// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    windowWidth: 0,
    isMobile: false,
  }),
  getters: {
    // isMobile() {
    //   return this.windowWidth < 768;
    // },
  },
  actions: {
    setWindowWidth(width) {
      this.windowWidth = width;
      //set isMobile
      this.isMobile = width < 768;
    },
  },
});
