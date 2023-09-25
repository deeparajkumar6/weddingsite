<template>
  <div>
    <v-card
      class="pa-2 d-flex flex-column justify-center align-center"
      elevation="0"
    >
      <v-card-title class="text-primary text-h5">Rituals</v-card-title>
      <v-card-title class="text-primary text-h6 text-center"
        >Parampara.Pratishtha.Anushasan</v-card-title
      >
      <v-card-text class="text-body-1 text-center">
        The myriad of traditional and elegant ceremonies that make up a Hindu
        wedding not only brings the families of the bride and groom closer
        together, but also ensures that no one leaves the festivities without
        having a good time.
      </v-card-text>
    </v-card>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" v-for="item in buttonlist" :key="item.title">
          <v-card
            elevation="2"
            :height="isMobile ? '' : '300'"
            :to="item.to"
            class="d-flex align-center pa-1"
            style="text-align: center"
          >
            <v-img
              aspect-ratio="1"
              :src="item.imgSrc"
              max-height="100vh"
              :width="isMobile ? '90' : '150'"
              class="mx-auto flex-shrink-0"
            ></v-img>
            <div>
              <v-card-title
                class="text-primary text-h6"
                style="white-space: initial"
                >{{ item.title }}</v-card-title
              >
              <v-card-text :class="isMobile ? 'text-body-2' : 'text-body-1'">{{
                item.content
              }}</v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card height="20vh" elevation="0"> </v-card>
  </div>
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
          title: "Maṅgala Snānaṃ",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Rituals/mangala-snanam.png",

          content:
            "The wedding day starts with Maṅgaḷa Snānaṃ custom, where the bride and groom are required to take an auspicious bath.",
        },
        {
          title: "Gauri Pūja",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Rituals/gauripooja.png",

          content:
            "Before the wedding ceremony, the bride performs the Gowri pooja, conducted at her house with all her family members and relatives, to seek the blessings of Goddess Gowri for a happy married life.",
        },
        {
          title: "Kāśī Yātra",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Rituals/kasiyatra.png",

          content:
            "The groom pretends to go to Kashi and says that he has discarded the worldly pleasures such as marriage, relations and properties, and is no longer interested. He is then stopped by the brother of the bride, who persuades him to return to the mandapam for marriage.",
        },
        {
          title: "Kanyādānaṃ",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Rituals/kanyadaan.png",

          content:
            "Kanyādānaṃ is the ceremony in which the girl's family hands over their daughter's responsibility to the groom.",
        },
        {
          title: "Paṇigrahaṇaṃ",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Rituals/panigrahanam.png",

          content:
            "This means holding hands. The groom holds the hand of the bride. The groom is made to assure the bride's father three times that he will remain her companion in joy and sorrow forever.",
        },
        {
          title: "Jīlakarra Bellaṃ",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Rituals/jilakarabellam.png",

          content:
            "The priest recites the ślokaṃs from the Vedas. Then the couple are asked to place a paste made from cumin seeds and jaggery on each other’s head. This ceremony is observed to communicate that the married couple's relationship is unbreakable ",
        },
        {
          title: "Maṅgaḷasūtra Dhāraṇa",
          imgSrc:
            "https://d11wxd06uhkmuf.cloudfront.net/Rituals/mangalsutra.png",

          content:
            "Maṅgaḷasūtra Dhāraṇa means tying Maṅgaḷasūtraṃ (holy thread). The groom ties the string Maṅgaḷasūtraṃ, around the bride's neck, in three knots. The three knots signify the grooms acceptance of the bride in Thoughts, Speech & Actions.",
        },
        {
          title: "Saptapadi",
          imgSrc: "https://d11wxd06uhkmuf.cloudfront.net/Rituals/saptapadi.png",

          content:
            "The groom and bride walk together seven steps around the sacred fire, while taking their oaths to nourish each other, to grow together in strength, to preserve their wealth, to share joys and sorrows, to care for each other.",
        },
      ],
    };
  },
};
</script>
'.b'
