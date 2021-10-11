<template>
  <div>
    <!--活動内容-->
    <div>
      <p>活動内容</p>
      <div>
        <img src="@/assets/activity.png" />
        <p>通常活動</p>
        <p>
          毎週木曜日、隔週土曜日に集まって活動しています！
          現在はzoomで活動していますが、コロナが開けたら名古屋大学の図書館での活動を再開します。
        </p>
      </div>
      <div>
        <img src="@/assets/event.png" />
        <p>イベント</p>
        <p>
          jackHackというハッカソンを例年ゴールデンウイークに行っています。
          ハッカソンというのは、短期間でテーマに沿ったアプリを作って、アイデアや完成度を競い合う大会です。
          名大祭では、お客さんに作ったものを実際に触って遊んでもらいます。
          例年12月に行われるjackFesでは、1年の活動の成果を発表しあいます。
        </p>
      </div>
    </div>

    <!--年間スケジュール タイムラインvuetifyで表示できた。やったね！-->
    <!--v-timelineタグ内denseですべてのコンテンツを右に配置できる。でもそうすると日時の表示ができんのや。。。-->
    <div>
      <div id="app">
        <v-app id="inspire">
          <div>
            <p>年間スケジュール</p>
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
          </div>
        </v-app>
      </div>
    </div>

    <!--イベント一覧-->
    <p>イベント一覧</p>
    <div v-for="event in events" :key="event.key">
      <p>{{ event.date }}</p>
      <p>{{ event.name }}</p>
      <v-chip label v-for="tag in event.tags" :key="tag">{{ tag }}</v-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data: () => ({
    events: [
      {
        key: 0,
        name: "JPHACKS2021",
        date: "October 23, 2021 → October 30, 2021",
        tags: ["ハッカソン"]
      },
      {
        key: 1,
        name: "jackResult_2021秋",
        date: "October 2, 2021",
        tags: []
      },
      {
        key: 2,
        name: "sampleEvent",
        date: "February 30, 2021",
        tags: ["サンプルタグ"]
      },
      {
        key: 3,
        name: "sampleEvent2",
        date: "January 30, 2021",
        tags: ["サンプルタグ2", "サンプルタグ3"]
      }
    ]
  })
};
</script>

<style scoped></style>
