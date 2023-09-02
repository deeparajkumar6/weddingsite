<template>
  <v-col :cols="colsThoranam" class="flex-grow-0 flex-shrink-0">
    <v-img v-show="isMobile" src="@/assets/sidethoranam1.png"></v-img>
    <v-img
      v-show="!isMobile"
      max-height="600"
      src="@/assets/sidethoranam1.png"
    ></v-img>
  </v-col>
</template>

<script>
export default {
  props: {
    colsThoranam: {
      type: String,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
