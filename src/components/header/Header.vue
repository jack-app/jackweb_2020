<template>
  <header>
    <v-app-bar color="#fc913a">
      <v-btn icon size="1" :ripple="false" to="/">
        <img src="@/assets/jack-logo.png" />
      </v-btn>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn
          text
          depressed
          raised="false"
          plain
          :ripple="false"
          class="text-decoration-underline"
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          >{{ link.title }}
        </v-btn>
      </div>
      <ForApplicantButton :to="to" />
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer color="#FC913A" right temporary fixed v-model="drawer">
      <ForApplicantButton :to="to" />
      <v-list nav flat>
        <v-list-item-group>
          <v-list-item v-for="link in links" :key="link.to" :to="link.to">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import ForApplicantButton from "@/components/for-applicant-button/ForApplicantButton.vue";

export default {
  components: {
    ForApplicantButton,
  },
  data: () => ({
    drawer: false,
    links: [
      { title: "プロダクト", to: "/products" },
      { title: "活動内容", to: "/activity" },
      { title: "実績", to: "/achievements" },
      { title: "お問い合わせ", to: "/contact" },
    ],
    to: {
      name: "/",
    },
  }),
};
</script>

<style scoped></style>
