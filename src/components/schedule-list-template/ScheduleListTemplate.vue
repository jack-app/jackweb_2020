<template>
  <v-container class="schedule">
    <v-row justify="center">
      <v-col cols="12">
        <TimeLine :schedules="schedules" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TimeLine from "../time-line/TimeLine.vue";

export default {
  components: {
    TimeLine,
  },
  data: () => ({
    schedules: [
      {
        id: 1,
        month: 4,
        title: "新入生歓迎会",
        detail: "新歓を行います。",
      },
      {
        id: 2,
        month: 5,
        title: "jackHack",
        detail: "jack内部でハッカソンをします。",
      },
      {
        id: 3,
        month: 6,
        title: "名大祭",
        detail: "成果物を外部のお客さんに触れてもらいます。",
      },
      {
        id: 4,
        month: 8,
        title: "jackAdvice",
        detail:
          "夏休みの目標を発表し合って、方針のアドバイスをやり取りします。",
      },
      {
        id: 5,
        month: 12,
        title: "jackFes",
        detail: "メンバーみんなが参加して、1年間の成果を披露しあいます。",
      },
    ],
  }),
};
</script>

<style lang="sass" scoped></style>
