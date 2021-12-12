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
export default {
  data: () => ({
    headers: [
      {
        text: "日付",
        value: "date"
      },
      {
        text: "書く",
        value: "name"
      }
    ],
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
