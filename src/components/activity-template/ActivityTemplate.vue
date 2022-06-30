<template>
  <v-container cols="12" class="activities-container">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="12" md="7">
              <v-img :src="require('@/assets/activity.png')" />
            </v-col>
            <v-col cols="12" md="5" class="d-flex flex-column justify-center">
              <v-card-title>通常活動</v-card-title>
              <v-card-text >
                隔週水曜日・隔週金曜日に集まってワイワイ活動しています！
                現在はzoomやgatherで活動していますが、コロナが明けたら名古屋大学の図書館での活動を再開します。
              </v-card-text>
              
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col cols="12" md="5" order="2" order-md="1" class="d-flex flex-column justify-center">
              <v-card-title>イベント</v-card-title>
              <v-card-text>
                jackHackというハッカソンを例年ゴールデンウイークに行っています。
                ハッカソンというのは、短期間でテーマに沿ったアプリを作って、アイデアや完成度を競い合う大会です。
                名大祭では、お客さんに作ったものを実際に触って遊んでもらいます。
                例年12月に行われるjackFesでは、1年の活動の成果を発表しあいます。
              </v-card-text>
            </v-col>
            <v-col cols="12" md="7" order="1" order-md="2">
              <v-img :src="require('@/assets/event.png')" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
