<template>
  <div class="card-wrapper">
    <v-card max-width="800">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
            <div class="card-elements">
              <div class="d-flex flex-column mb-6">
                <v-card-text class="text-left" max-width="600">
                  毎週木曜日、隔週土曜日の通常活動に加え、様々なイベントを開催しています。
                  イベントイベントイベント
                </v-card-text>
                  <!-- <v-card-actions class="justify-end"> -->
                  <!-- <v-btn to="/activity" align="center" class="avtivity-btn">more</v-btn> -->
                <div class="justify-end toactivity-btn">
                  <a href="./Activity.vue">詳しく見る</a>
                </div>
                  <!-- </v-card-actions> -->
              </div>
            </div>
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
            <v-img max-height="200"
                src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
                />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script></script>

<style scoped>
.toactivity-btn a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6vh auto auto auto;
  padding: 1em 2em;
  width: 300px;
  color: #FC913A;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #FCA965;
  border-radius: 10px;
}

.toactivity-btn a::after {
  content: '';
  width: 5px;
  height: 5px;
  border-top: 3px solid #FC913A;
  border-right: 3px solid #FC913A;
  transform: rotate(45deg);
}

.toactivity-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #FCA965;
}

.toactivity-btn a:hover::after {
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
}

/* ボタン下ぞろえ用未完成 */
.d-flex {
  margin: auto 16px 6px 16px;
}

</style>
