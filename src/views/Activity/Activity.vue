<template>
  <v-container class="activities">
    <!--活動内容-->
    <v-container cols="12" class="activities-container">
      <v-row>
        <v-col cols="12" md="12" class="title">活動内容</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="usual">
          <v-card class="cards" max-height="400px">
            <v-row>
              <v-col cols="7">
                <v-img src="@/assets/activity.png" />
              </v-col>
              <v-col cols="3">
                <v-card-title>通常活動</v-card-title>
                <v-card-text>
                  毎週木曜日、隔週土曜日に集まって活動しています！
                  現在はzoomで活動していますが、コロナが開けたら名古屋大学の図書館での活動を再開します。</v-card-text
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="usual">
          <v-card class="cards">
            <v-row>
              <v-col cols="4">
                <v-card-title>イベント</v-card-title>
                <v-card-text>
                  jackHackというハッカソンを例年ゴールデンウイークに行っています。<br />
                  ハッカソンというのは、短期間でテーマに沿ったアプリを作って、アイデアや完成度を競い合う大会です。<br />
                  名大祭では、お客さんに作ったものを実際に触って遊んでもらいます。<br />
                  例年12月に行われるjackFesでは、1年の活動の成果を発表しあいます。<br
                /></v-card-text>
              </v-col>
              <v-col cols="8">
                <v-img src="@/assets/activity.png" />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!--年間スケジュール タイムラインvuetifyで表示できた。やったね！-->
    <v-container class="schedule">
      <v-row>
        <v-col cols="12">年間スケジュール</v-col>
      </v-row>
      <v-row>
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

    <!--イベント一覧-->
    <v-container class="event-list">
      <p>イベント一覧</p>
      <EventList />
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
import EventList from '../../components/EventList/EventList.vue';

export default {
  components: {
    EventList
  },
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
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/events`)
      .then(response => {
        this.events = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  }
};
</script>


<style scoped>
.cards {
  margin: 10px 100px;
}

.container {
  display: block;
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
}
.ActivitiesContainer {
  position: relative;
  margin: none;
  place-items: center;
}
</style>
