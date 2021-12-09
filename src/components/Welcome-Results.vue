<template>
  <div>
    <!--テーブルにするなら-->
    <div class="flex" v-for="result in results" :key="result.name">
      <p>{{ result.date }}</p>
      <p>{{ result.name }}</p>
    </div>

    <v-data-table :items="results" :items-per-page="2"></v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    results: [
      {
        name: "JPHACKS2020 Best Audience Award他「コミックSE」",
        date: "November 28, 2020"
      },
      {
        name: "通知で覚える英単語 リリース",
        date: "October 24, 2020"
      },
      {
        name: "サンプル実績",
        date: "September 28, 2020"
      }
    ]
  })
};
</script>

<style scoped></style>
