<template>
  <!-- set background colour as primary -->
  <v-responsive class="Travel fill-heigth pa-0 ma-0">
    <v-card-text
      class="text-center text-white"
      :class="isMobile ? 'text-body-1 pa-5' : 'text-h6 pa-14 pt-10 pb-2'"
    >
      We are so excited to have you join us for our wedding! We look forward to
      celebrating with you!
    </v-card-text>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text
          width="60vw"
          class="d-flex flex-column justify-left align-left"
          :class="isMobile ? 'text-body-1 pa-5' : 'text-h6 pa-14 pt-10 pb-2'"
          elevation="0"
          ><v-text>
            <v-text
              class="text-secondary align-center justify-center"
              :class="isMobile ? 'text-h6 ' : 'text-h4 '"
              >Venue</v-text
            ><br />

            <v-text
              class="text-white"
              :class="isMobile ? 'text-body-1' : 'text-h6'"
            >
              Manghalam Weddings & Conventions,<br />Srirangam, Trichy, Tamil
              Nadu
            </v-text>
          </v-text>
        </v-text>
      </v-col>

      <v-col cols="12" sm="6" color="primary">
        <v-card
          class="align-right justify-right"
          :class="isMobile ? 'mx-5 mt-0' : 'mx-14 mt-14'"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4182762321298!2d78.69602357486984!3d10.855756857725746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf75127e5f2c1%3A0xa61252a6afa34a6a!2sMANGHALAM%20WEDDINGS%20%26%20CONVENTIONS!5e0!3m2!1sen!2sus!4v1694081771920!5m2!1sen!2sus"
            width="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>

    <v-card
      color="primary"
      class="Travel d-flex flex-column justify-left align-left"
      elevation="0"
      :class="isMobile ? 'px-5 py-10' : 'pa-14'"
    >
      <v-text class="align-center justify-center" elevation="0">
        <v-text-title
          class="text-secondary align-center justify-center"
          :class="isMobile ? 'text-h6' : 'text-h5'"
          >Getting There</v-text-title
        ><br />

        <v-text-text
          class="pt-5 text-white"
          :class="isMobile ? 'text-subtitle-1' : 'text-h6'"
        >
          * The nearest airport is Tiruchirappalli International Airport (TRZ). </v-text-text
        ><br />
        <v-text-text
          class="text-white"
          :class="isMobile ? 'text-subtitle-1' : 'text-h6'"
        >
          * The nearest railway station is Tiruchirappalli Junction (TPJ).
        </v-text-text>
      </v-text>
    </v-card>
  </v-responsive>

  <v-card-text class="text-h6 text-center">
    <v-text-title
      class="text-primary text-h5 align-center justify-center"
      :class="isMobile ? 'text-h6' : 'text-h5'"
      >RSVP</v-text-title
    ><br />

    <v-text-text
      class="text-h6"
      :class="isMobile ? 'text-subtitle-1' : 'text-h6'"
    >
      Sanjit +917538808351</v-text-text
    ><br />
    <v-text-text
      class="text-h6"
      :class="isMobile ? 'text-subtitle-1' : 'text-h6'"
    >
      Please let us know if you would like to stay at the venue.
    </v-text-text>
  </v-card-text>
  <v-card
    class="pa-14 d-flex flex-column justify-left align-left"
    elevation="0"
  ></v-card>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/app";
const { isMobile } = storeToRefs(useAppStore());
</script>

<style scoped>
.Travel {
  background-color: #a4091a;
  height: 100;
  width: 100vw;
  padding: 0;
}
</style>
