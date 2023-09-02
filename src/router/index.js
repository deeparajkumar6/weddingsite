// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/TheWedding.vue";
import Events from "@/views/EventsPage.vue";
import RSVP from "@/views/RSVPPage.vue";
import Rituals from "@/views/RitualsPage.vue";
import TravelStay from "@/views/TravelStay.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/rsvp",
    name: "RSVP",
    component: RSVP,
  },
  {
    path: "/rituals",
    name: "Rituals",
    component: Rituals,
  },
  {
    path: "/travel",
    name: "TravelStay",
    component: TravelStay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
