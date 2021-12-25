<template>
  <v-container class="achievements">
    <ContentTitle title="活動実績" />
    <AchievementListTemplate />
  </v-container>
</template>

<script>
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import AchievementListTemplate from "@/components/achievement-list-template/AchievementListTemplate.vue";

export default {
  components: {
    ContentTitle,
    AchievementListTemplate,
  },
};
</script>
