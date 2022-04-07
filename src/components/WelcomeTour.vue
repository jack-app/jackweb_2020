<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <div class="texts">
          <div class="headline">
            <p>jackは現在新歓を開催しています！</p>
          </div>
          <p>
            今年度はjackのメンバーがこれまで作ったアプリをいくつか紹介します！<br />ぜひぜひご参加ください！
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6" align="center">
        <v-card class="card-1" max-width="350">
          <v-card-text>
            <div class="title">
              日程（各回1時間程度を予定）
            </div>
            <div class="body-1 text">
              <ul>
                <li>4/4(月) 21:00~</li>
                <li>4/10(日) 15:00~</li>
                <li>4/11(月) 19:00~</li>
                <li>4/15(金) 21:00~</li>
                <li>4/16(土) 11:00~</li>
                <li>4/17(日) 21:00~</li>
              </ul>
            </div>
            <br />
            <div class="title">
              場所
            </div>
            <div class="body-1 text">
              zoomで開催します！
            </div>
            <div class="accessbutton">
              <v-btn
                rounded
                color="#FC913A"
                class="white--text"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfO39VeEERd_6aFewsA76pH80IUERJM3IWBxZ0HKIkxIw7-TQ/viewform"
                target="_blank"
              >
                <v-icon>mdi-open-in-new</v-icon>お申し込みはこちら
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.texts {
  text-align: left;
  padding-top: 3vh;
}

.text {
  text-align: left;
}

.card-1 {
  margin-left: 3vw;
}

.title {
  text-align: left;
}

.accessbutton {
  padding-top: 5%;
  margin: 0 auto;
  text-align: center;
}

.v-card-text {
  margin: 0 auto;
}

.body-1 {
  padding-left: 1vw;
}

@media screen and (max-width: 400px) {
  .v-btn {
    max-width: 70vw;
  }
}
</style>
