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
              height="150px"
              width="150px"
              class="mx-auto"
            ></v-img>
            <v-card-title class="text-primary text-h5">{{
              item.title
            }}</v-card-title>
            <v-card-subtitle class="text-body-1" style="text-wrap: wrap">{{
              item.Date
            }}</v-card-subtitle>
            <v-card-text class="text-body-1">{{ item.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card height="20vh" elevation="0"> </v-card>
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
          title: "Muthyala",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/muthyadalu.jpg",
          Date: "Tuesday, Dec. 13th, from 9:15 a.m. - 9:45 a.m.",
          content: "Madavalagam Street, Puvalur, Lalgudi, Trichy, Tamil Nadu",
        },
        {
          title: "Muhurthakkal",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/muhurtakal.jpg",
          Date: "Tuesday, Dec. 13th, from 9:45 a.m. - 10:15 a.m.",
          content: "Madavalagam Street, Puvalur, Lalgudi, Trichy, Tamil Nadu",
        },
        {
          title: "Mehendi",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/mehendi.jpg",
          Date: "Monday, Dec. 11th, from 6:30 p.m.",
          content: "Madavalagam Street, Puvalur, Lalgudi, Trichy, Tamil Nadu",
        },
        {
          title: "Mapillai Alaippu",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Events/mappillaiAlaipu.jpg",
          Date: "Wednesday, Dec. 13, from 5:30 p.m",
          content:
            "Manghalam Weddings & Conventions, Srirangam, Trichy, Tamil Nadu",
        },
        {
          title: "Reception",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/reception.jpg",
          Date: "Wednesday, Dec. 13, from 6:30 p.m",
          content:
            "Manghalam Weddings & Conventions, Srirangam, Trichy, Tamil Nadu",
        },
        {
          title: "Music Evening",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Events/musicNight.jpg",
          Date: "Wednesday, Dec. 13, from 7:00 p.m by Super Singer Sai Vignesh & Band",
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
