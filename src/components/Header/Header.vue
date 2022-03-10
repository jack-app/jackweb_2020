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
      <v-btn depressed rounded outlined to="/" style="background: #fff;">
        入部希望者はこちら
      </v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      color="secondary"
      right
      temporary
      fixed
      v-model="drawer"
    >
      <v-btn
        depressed
        rounded
        outlined
        to="/"
        style="background: #fff; margin: 10px 0 0 0;"
      >
        入部希望者はこちら
      </v-btn>
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
export default {
  data: () => ({
    drawer: false,
    links: [
      { title: "プロダクト", to: "/products" },
      { title: "活動内容", to: "/activity" },
      { title: "実績", to: "/achievements" },
      { title: "お問い合わせ", to: "/contact" },
    ],
  }),
};
</script>

<style scoped></style>
