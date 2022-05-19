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
  </v-container>
</template>

<script>
import AchievementCard from "../achievement-card/AchievementCard.vue";
import axios from "axios";

export default {
  components: {
    AchievementCard,
  },
  data: () => ({
    achievements: [],
  }),
  mounted() {
    axios
      .get(`/.netlify/functions/api/achievements`)
      .then((response) => {
        this.achievements = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  },
};
</script>

<style scoped>
.achievement__card {
  margin: 20px;
}
</style>
