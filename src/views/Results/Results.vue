<template>
  <v-container>
    <ContentTitle title="活動実績" />
    <ResultListTemplate />
  </v-container>
</template>

<script>
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import ResultListTemplate from "@/components/result-list-template/ResultListTemplate.vue";

export default {
  components: {
    ContentTitle,
    ResultListTemplate,
  },
};
</script>

<style scoped></style>
