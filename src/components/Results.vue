<template>
  <div>
    <p>実績紹介</p>
    <v-card v-for="result in results" :key="result.name">
      <v-card-subtitle class="text-left">{{ result.date }}</v-card-subtitle>
      <v-card-title>{{ result.name }}</v-card-title>
      <v-card-actions class="justify-end">
        <a v-if="result.link" :href="result.link"><v-btn>read more</v-btn></a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Result",
  data: () => ({
    results: null
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/results`)
      .then(response => {
        this.results = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  }
};
</script>

<style scoped></style>
