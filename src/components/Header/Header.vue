<template>
  <header>
    <v-app-bar color="#fc913a">
      <v-btn icon size="1" :ripple="false" to="/">
        <img src="@/assets/jack-logo.png" />
      </v-btn>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <RouteButton to="/products" text="プロダクト" />
        <RouteButton to="/activity" text="活動内容" />
        <RouteButton to="/achievements" text="実績" />
        <RouteButton to="/contact" text="お問い合わせ" />
      </div>
      <v-btn depressed plain> 入部希望者はこちら </v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer right temporary fixed v-model="drawer">
      <v-list nav flat>
        <v-list-item-group>
          <v-list-item to="/products">
            <v-list-item-title>プロダクト</v-list-item-title>
          </v-list-item>
          <v-list-item to="/activity">
            <v-list-item-title>活動内容</v-list-item-title>
          </v-list-item>
          <v-list-item to="/results">
            <v-list-item-title>実績</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact">
            <v-list-item-title>お問い合わせ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import RouteButton from "@/components/route-button/RouteButton.vue";

export default {
  components: {
    RouteButton,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>

<style scoped></style>
