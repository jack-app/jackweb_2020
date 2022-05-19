<template>
  <v-data-table
    :headers="headers"
    :items="events"
    :items-per-page="5"
    hide-default-footer
    disable-sort
  >
    <template v-slot:[`item.tags`]="{ item }">
      <v-chip label v-for="(tag, index) in item.tags" :key="index">{{
        tag
      }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: "EventList",
  data: () => ({
    headers: [
      { text: "日付", value: "date" },
      { text: "イベント名", value: "name" },
      { text: "タグ", value: "tags" },
    ],
    events: [],
  }),
  mounted() {
    axios
      .get(`${process.env.URL}/.netlify/functions/api/events`)
      .then((response) => {
        this.events = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  },
};
</script>
