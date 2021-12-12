<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="results"
      hide-default-header
      hide-default-footer
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    headers: [
      {
        text: "日付",
        value: "date"
      },
      {
        text: "実績",
        value: "name"
      }
    ],
    results: []
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/results`)
      .then(response => {
        this.results = response.data.message.slice(0, 5);
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  }
};
</script>

<style scoped></style>
