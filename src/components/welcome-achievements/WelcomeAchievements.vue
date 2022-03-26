<template>
  <v-container>
    <v-row justify="center">
      <AchievementTable />
    </v-row>
    <v-row justify="center">
      <FurtherButton to="./achievements" />
    </v-row>
  </v-container>
</template>

<script>
import AchievementTable from "@/components/achievement-table/AchievementTable.vue";
import FurtherButton from "@/components/further-button/FurtherButton.vue";

export default {
  components: {
    AchievementTable,
    FurtherButton,
  },
  data: () => ({
    num: 2,
  }),
};
</script>
