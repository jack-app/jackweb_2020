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
      <v-data-table :headers="headers" :items="events" :items-per-page="5">
        <template v-slot:[`item.tags`]="{ item }">
          <v-chip label v-for="(tag, index) in item.tags" :key="index">{{
            tag
          }}</v-chip>
        </template>
      </v-data-table>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Activity',
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

/* .container .title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0.5rem;
  font-size: 36px;
  text-align: center;
  text-decoration-line: underline;
} */

/* .container .usualImg {
  position: absolute;
  top: 50px;
  left: 10%;
  width: 55%;
  height: 300px;
  max-width: none;
  object-fit: cover;
  z-index: 5;
} */

/* .container .usualText {
  position: absolute;
  top: 80px;
  right: 100px;
  height: 20rem;
  width: 20rem;
  max-width: none;
  padding: 1.5rem;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: #f6b352;
  color: #fff;
  font-size: 1.1rem;
  line-height: 2;
  place-items: center;
  z-index: 10;
} */

/* .container .eventsImg {
  position: absolute;
  top: 350px;
  right: 10%;
  width: 55%;
  height: 300px;
  object-fit: cover;
  z-index: 1;
} */

/* .container .eventsText {
  display: grid;
  position: absolute;
  top: 300px;
  left: 15%;
  height: 30rem;
  width: 30rem;
  padding: 2.25rem;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: #fc913a;
  color: #fff;
  font-size: 1.1rem;
  line-height: 1.75;
  place-items: center;
  z-index: 10;
} */

/* v-cardで丸のところ作る！ */

/* .usual {
  position: relative;
  /* margin: 1rem;
 

.usualImg {
  display: grid;
  position: absolute;
  top: 0;
  left: 50px;
  height: 25rem;
}
.usualText {
  display: grid;
  position: absolute;
  top: 70px;
  left: 350px;
  height: 25rem;
  width: 25rem;
  padding: 1.5rem;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: #fc913a;
  color: #fff;
  font-size: 1.1rem;
  line-height: 2;
  place-items: center;
}

.events {
  position: relative;
}

/* .eventsImg {
  display: grid;
  position: absolute;
  top: 20%;
  left: 10%;
  height: 25rem;
} */

/* style書く順番
display
position
float
width
height
margin
padding
border
background-color
color
font
text-decoration
text-align
vertical-align
まず要素を表示するか？
要素をどこに配置するか？
要素のボックスモデルはどういうものになるか？
背景は？
テキストなど前景にあるものは？
*/
</style>
