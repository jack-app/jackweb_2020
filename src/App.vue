<template>
  <v-app>
    <Header />
    <v-main class="page">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c4c4c;
  background-color: #fff;
}

.page {
  width: 80%;
  margin: 10px auto;
}

@media screen and (max-width: 960px) {
  .page {
    width: 90%;
  }
}
</style>
