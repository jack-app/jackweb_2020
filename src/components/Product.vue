<template>
  <div>
    <v-card class="elevation-2">
      <img v-if="icon" :src="icon" />
      <img v-else src="@/assets/noimage.png" />
      <v-card-title> {{ name }} </v-card-title>
      <a v-if="web" :href="web"><img src="@/assets/web-link-badge.png"/></a>
      <a v-if="android" :href="android"
        ><img src="@/assets/google-play-badge.png"
      /></a>
      <a v-if="ios" :href="ios"><img src="@/assets/app-store-badge.svg"/></a>
      <v-card-text class="text-left">{{ description }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["icon", "name", "ios", "android", "web", "description"]
};
</script>

<style scoped></style>
