<template>
  <v-container>
    <AchievementCard
      v-for="achievement in achievements"
      :key="achievement.name"
      :name="achievement.name"
      :date="achievement.date"
      :link="achievement.link"
      class="achievement__card"
    />
    <LoadingDisplay ref="load"/>
  </v-container>
</template>

<script>
import AchievementCard from "../achievement-card/AchievementCard.vue";
import LoadingDisplay from "../loading-display/LoadingDisplay.vue";
import axios from "axios";

export default {
  components: {
    AchievementCard,
    LoadingDisplay
  },
  data: () => ({
    achievements: [],
    loading:"loading"
  }),
  mounted() {
    axios
      .get(`/.netlify/functions/api/achievements`)
      .then((response) => {
        this.achievements = response.data.message;
        this.$refs.load.success();
      })
      .catch(() => {
        this.$refs.load.failure();
      });
  },
};
</script>

<style scoped>
.achievement__card {
  margin: 20px;
}
</style>
