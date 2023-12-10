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
          <router-link to="/Demo1" class="NoUnderline">
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
          <v-app-bar scroll-behavior="hide collapse elevate">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props"
                  ><i class="fi fi-br-menu-burger"></i
                ></v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <template v-slot:append>
              <v-btn icon="mdi-heart"></v-btn>

              <v-btn icon="mdi-magnify"></v-btn>

              <v-btn icon="mdi-dots-vertical"></v-btn>
            </template>
          </v-app-bar>
          <router-view></router-view>
        </div>
        <FooterPage />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "./components/FooterPage.vue";
export default {
  name: "App",
  components: {
    HeaderPage,
    FooterPage,
  },
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
