<template>
  <v-container>
    <ResultCard
      v-for="result in results"
      :key="result.name"
      :name="result.name"
      :date="result.date"
      :link="result.link"
      class="result__card"
    />
  </v-container>
</template>

<script>
import ResultCard from "../result-card/ResultCard.vue";
import axios from "axios";

export default {
  components: {
    ResultCard,
  },
  data: () => ({
    results: [],
  }),
  mounted() {
    console.log(document.domain);
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/results`)
      .then((response) => {
        this.results = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  },
};
</script>

<style lang="sass" scoped>
.result__card{
  margin: 20px
}
</style>
