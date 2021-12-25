<template>
  <v-container class="activities">
    <!--活動内容-->
    <v-container class="activity">
      <ContentTitle title="活動内容" />
      <ActivityTemplate />
    </v-container>
    <!-- 年間スケジュール -->
    <v-container class="schedule">
      <ContentTitle title="年間スケジュール" />
      <ScheduleListTemplate />
    </v-container>
    <!--イベント一覧-->
    <v-container class="event-list">
      <ContentTitle title="イベント一覧" />
      <EventList />
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import ActivityTemplate from "@/components/activity-template/ActivityTemplate.vue";
import EventList from "../../components/event-list/EventList.vue";
import ScheduleListTemplate from "../../components/schedule-list-template/ScheduleListTemplate.vue";

export default {
  components: {
    ContentTitle,
    ActivityTemplate,
    EventList,
    ScheduleListTemplate,
  },
  data: () => ({
    headers: [
      { text: "日付", value: "date" },
      { text: "イベント名", value: "name" },
      { text: "タグ", value: "tags" },
    ],
    events: [
      {
        key: 0,
        name: "JPHACKS2021",
        date: "October 23, 2021 → October 30, 2021",
        tags: ["ハッカソン"],
      },
      {
        key: 1,
        name: "jackResult_2021秋",
        date: "October 2, 2021",
        tags: [],
      },
      {
        key: 2,
        name: "sampleEvent",
        date: "February 30, 2021",
        tags: ["サンプルタグ"],
      },
      {
        key: 3,
        name: "sampleEvent2",
        date: "January 30, 2021",
        tags: ["サンプルタグ2", "サンプルタグ3"],
      },
    ],
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/events`)
      .then((response) => {
        this.events = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  },
};
</script>
