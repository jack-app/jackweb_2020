<template>
  <v-container class="schedule">
    <v-row justify="center">
      <ContentTitle title="年間スケジュール" />
      <v-col cols="12">
        <v-timeline :reverse="reverse">
          <v-timeline-item v-for="n in 2" :key="n">
            <span slot="opposite">
              <v-text>〇月</v-text>
            </span>
            <v-card class="elevation-2 text-left">
              <v-card-title class="text-h5">
                EVENTNAME
              </v-card-title>
              <v-card-text>
                ここに活動内容が入ります。1～2行くらい。
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
import ContentTitle from "../content-title/ContentTitle.vue";

export default {
  components: {
    ContentTitle,
  }
}
</script>

<style lang="sass" scoped>
.schedule {
}
</style>