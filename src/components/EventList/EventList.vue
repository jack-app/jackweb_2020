<template>
  <v-data-table :headers="headers" :items="events" :items-per-page="5">
    <template v-slot:[`item.tags`]="{ item }">
      <v-chip label v-for="(tag, index) in item.tags" :key="index">{{
        tag
      }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'EventList',
  data: () => ({
    headers: [
      { text: '日付', value: 'date' },
      { text: 'イベント名', value: 'name' },
      { text: 'タグ', value: 'tags' },
    ],
    events: [
      {
        key: 0,
        name: 'JPHACKS2021',
        date: 'October 23, 2021 → October 30, 2021',
        tags: ['ハッカソン'],
      },
      {
        key: 1,
        name: 'jackResult_2021秋',
        date: 'October 2, 2021',
        tags: [],
      },
      {
        key: 2,
        name: 'sampleEvent',
        date: 'February 30, 2021',
        tags: ['サンプルタグ'],
      },
      {
        key: 3,
        name: 'sampleEvent2',
        date: 'January 30, 2021',
        tags: ['サンプルタグ2', 'サンプルタグ3'],
      },
    ],
  }),
};
</script>