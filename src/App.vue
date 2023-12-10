<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/Demo1">
            <v-list-item
              prepend-icon="mdi-folder"
              title="My Files"
              value="myfiles"
            ></v-list-item>
          </router-link>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Shared with me"
            value="shared"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="h-100">
        <HeaderPage />
        <div class="ContentBody">
          <router-view></router-view>
        </div>
        <footer class="textMid">End</footer>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
export default {
  name: "App",
  components: { 
    HeaderPage 
  },
};
</script>
