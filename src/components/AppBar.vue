<!-- need to create appbar with 5 text buttons and appbar bg in primary color-->

<template>
  <v-app-bar class="px-6 elevation-0" app color="primary" dark>
    <v-spacer></v-spacer>
    <v-btn
      class="mx-14 text-h5"
      v-for="button in buttonlist"
      :key="button.text"
      :to="button.to"
      variant="plain"
      >{{ button.text }}</v-btn
    >
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    buttonlist: [
      { text: "The Wedding", to: "/" },
      { text: "Events", to: "/events" },
      { text: "Rituals", to: "/rituals" },
      { text: "Travel&Stay", to: "/travel" },
      { text: "RSVP", to: "/rsvp" },
    ],
  }),
};
</script>
<style scoped>
.v-btn {
  text-transform: none !important;
}
</style>
