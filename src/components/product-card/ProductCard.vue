<template>
  <v-card outlined elevation="2">
    <v-container>
      <v-row justify="center">
        <v-col cols="7">
          <img v-if="icon" :src="icon" class="product__image" />
          <img v-else src="@/assets/noimage.png" class="product__image" />
        </v-col>
        <v-col cols="5">
          <div class="text-subtitle-2 product__name">
            {{ name }}
          </div>
          <div class="badge-image">
            <a v-if="web" :href="web"
              ><v-img src="@/assets/web-link-badge.png" contain
            /></a>
          </div>
          <div class="badge-image">
            <a v-if="android" :href="android" class="badge-image"
              ><v-img src="@/assets/google-play-badge.png" contain
            /></a>
          </div>
          <div class="badge-image">
            <a v-if="ios" :href="ios"
              ><v-img src="@/assets/app-store-badge.svg" contain
            /></a>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class="text-left text-caption">{{
          description
        }}</v-card-text>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: ["icon", "name", "ios", "android", "web", "description"],
};
</script>

<style scoped>
.product__name {
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid #fc913a;
}

.product__image {
  width: 90%;
}

.badge-image {
  margin: 5px auto;
  width: 80%;
}
</style>
