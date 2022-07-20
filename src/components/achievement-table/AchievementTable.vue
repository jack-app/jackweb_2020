<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="results"
      hide-default-header
      hide-default-footer
      v-if="results.length!=0"
    >
    </v-data-table>
    <LoadingDisplay ref="load"/>
  </div>
</template>

<script>
import axios from "axios";
import LoadingDisplay from "../loading-display/LoadingDisplay.vue";

export default {
  components:{
    LoadingDisplay
  },
  data: () => ({
    headers: [
      {
        text: "日付",
        value: "date",
      },
      {
        text: "実績",
        value: "name",
      },
    ],
    results: [],
  }),
  mounted() {
    axios
      .get(`/.netlify/functions/api/achievements`)
      .then((response) => {
        this.results = response.data.message.slice(0, 5);
        this.$refs.load.success();
      })
      .catch(() => {
        this.$refs.load.failure();
      });
  },
};
</script>

<style scoped></style>
