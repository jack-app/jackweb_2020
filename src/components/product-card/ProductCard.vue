<template>
  <v-card outlined elevation="2">
    <v-container>
      <v-row justify="center">
        <v-col cols="7">
          <img
            :src="icon ? icon : require('@/assets/noimage.png')"
            class="product__image"
          />
        </v-col>
        <v-col cols="5">
          <div class="text-subtitle-2 product__name text-center">
            {{ name }}
          </div>
          <div class="badge-image">
            <LinkBadge v-if="web" :link="web" platform="web" />
          </div>
          <div class="badge-image">
            <LinkBadge v-if="ios" :link="ios" platform="ios" />
          </div>
          <div class="badge-image">
            <LinkBadge v-if="android" :link="android" platform="android" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-card-text class="text-left text-caption">
          {{ description }}
        </v-card-text>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import LinkBadge from "@/components/link-badge/LinkBadge.vue";

export default {
  name: "Product",
  components: {
    LinkBadge,
  },
  props: ["icon", "name", "ios", "android", "web", "description"],
};
</script>

<style scoped>
.product__name {
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
