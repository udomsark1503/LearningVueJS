<template>
  <v-row>
    <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3"><CardTest /></v-col>
    <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3"><CardTest /></v-col>
    <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3"><CardTest /></v-col>
    <v-col cols="12" sm="6" md="3" lg="3" xl="3" xxl="3"><CardTest /></v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="7" md="8" lg="8" xl="8" xxl="8"><CardTest /></v-col>
    <v-col cols="12" sm="5" md="4" lg="4" xl="4" xxl="4"><CardTest /></v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card> <v-data-table :items="items"></v-data-table> </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <div class="d-flex fill-height justify-center align-center">
                <div class="text-h2">{{ slide }}</div>
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <div style="height: 100%; width: 100%">
        <l-map style="height: 500px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
        </l-map>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CardTest from "@/components/CardTest.vue";
import { ref } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  name: "HelloWorld",
  components: {
    CardTest,
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["Max", "Maxky", "Udomsark", "Amnuaysookwong", "Age 27"],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [51.505, -0.159],
      markerLatLng: [51.504, -0.159],
    };
  },
  setup() {
    const items = ref([
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
      {
        name: "African Elephant",
        species: "Loxodonta africana",
        diet: "Herbivore",
        habitat: "Savanna, Forests",
      },
    ]);
    return {
      items,
    };
  },
};
</script>
