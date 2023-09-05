<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" v-for="item in buttonlist" :key="item.text">
          <v-card
            class="mx-auto"
            elevation="0"
            max-width="400"
            outlined
            tile
            :to="item.to"
            style="text-align: center"
          >
            <v-img
              :src="item.imgSrc"
              height="100px"
              width="100px"
              class="mx-auto"
            ></v-img>
            <v-card-title class="text-primary">{{ item.title }}</v-card-title>
            <v-card-subtitle class="text-body-1">{{
              item.Date
            }}</v-card-subtitle>
            <v-card-text class="text-body-2">{{ item.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card height="100px" elevation="0"> </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonlist: [
        {
          title: "Pellikoothuru",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Events/pellikoothuru.jpg",
          Date: "Monday, Dec. 11th, from 8 a.m.",
          content: "Madavalagam Street, Puvalur, Lalgudi, Trichy, Tamil Nadu",
        },
        {
          title: "Mehendi",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/mehendi.jpg",
          Date: "Monday, Dec. 11th, from 6:30 p.m.",
          content: "Madavalagam Street, Puvalur, Lalgudi, Trichy, Tamil Nadu",
        },
        {
          title: "Reception",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/reception.jpg",
          Date: "Wednesday, Dec. 13, from 4 p.m",
          content:
            "Manghalam Weddings & Conventions, Srirangam, Trichy, Tamil Nadu",
        },
        {
          title: "Wedding",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/wedding.jpg",
          Date: "Thursday, Dec. 14, 7:54 a.m. – 8:45 a.m.",
          content:
            "Manghalam Weddings & Conventions, Srirangam, Trichy, Tamil Nadu",
        },
      ],
    };
  },
};
</script>
