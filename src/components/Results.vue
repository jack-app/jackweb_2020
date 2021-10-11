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
export default {
  name: "Result",
  data: () => ({
    results: [
      {
        name: "JPHACKS2020 Best Audience Award他「コミックSE」",
        date: "November 28, 2020",
        link: "https://jphacks.com/2020/result/innovator/"
      },
      {
        name: "通知で覚える英単語 リリース",
        date: "October 24, 2020",
        link: "https://apps.apple.com/jp/app/通知で覚える英単語/id1537063008"
      },
      {
        name: "サンプル実績",
        date: "September 28, 2020",
        link: "https://google.com"
      }
    ]
  })
};
</script>

<style scoped></style>
