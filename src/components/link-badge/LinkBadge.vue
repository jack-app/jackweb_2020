<template>
  <a :href="link">
    <v-img :src="badge" contain />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
    },
    platform: {
      type: String,
      validator: function (value) {
        return ["web", "ios", "android"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    badge() {
      switch (this.platform) {
        case "web":
          return require("@/assets/web-link-badge.png");
          break;
        case "ios":
          return require("@/assets/app-store-badge.svg");
          break;
        case "android":
          return require("@/assets/google-play-badge.png");
          break;
      }
    },
  },
};
</script>
