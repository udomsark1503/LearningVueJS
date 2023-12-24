<template>
  <v-row class="h-100vh">
    <v-col cols="12">
      <v-card class="h-100 d-flex align-center justify-center" variant="tonal">
        <router-link to="/"><v-btn>ไปหน้า /Demo1 (กำหนด router)</v-btn></router-link>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
