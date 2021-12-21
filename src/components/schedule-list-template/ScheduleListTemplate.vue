<template>
  <v-container class="schedule">
    <v-row justify="center">
      <ContentTitle title="年間スケジュール" />
      <v-col cols="12">
        <TimeLine :schedules="schedules" />
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import ContentTitle from "../content-title/ContentTitle.vue";
import TimeLine from "../time-line/TimeLine.vue";

export default {
  components: {
    ContentTitle,
    TimeLine
  },
  data: () => ({
    schedules: [
      // ここにapiから取ってきたやついれて
      {
      id: 1,
      month: 12,
      title: "jackFes",
      detail: "テキストテキスト"
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
</style>