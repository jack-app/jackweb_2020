<template>
  <a :href="link">
    <v-img :src="badgeSrc" contain />
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    platform: {
      type: String,
      validator: function (value) {
        return ["web", "ios", "android"].indexOf(value) !== -1;
      },
    },
  },
  data: () => ({
    badges: [
      { name: "web", badge_src: require('@/assets/web-link-badge.png') },
      { name: "ios", badge_src: require('@/assets/app-store-badge.svg') },
      { name: "android", badge_src: require('@/assets/google-play-badge.png') },
    ]
  }),
  computed: {
    badgeSrc() {
      const badgeData = this.badges.find((badge) => badge.name == this.platform)
      return badgeData.badge_src
    }
  },
};
</script>
