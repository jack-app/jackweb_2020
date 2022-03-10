<template>
  <div class="card-wrapper">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-card max-width="800">
          <v-container>
            <v-row>
              <v-col cols="12" md="8" order="last" order-md="first">
                <div class="card-elements">
                  <div class="d-flex flex-column mb-6">
                    <v-card-text class="text-left" max-width="600">
                      毎週木曜日、隔週土曜日の通常活動に加え、様々なイベントを開催しています。
                      イベントイベントイベント
                    </v-card-text>
                    <!-- <v-card-actions class="justify-end"> -->
                    <!-- <v-btn to="/activity" align="center" class="avtivity-btn">more</v-btn> -->
                    <div class="justify-end toactivity-btn">
                      <router-link to="./activity">詳しく見る</router-link>
                    </div>
                    <!-- </v-card-actions> -->
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" order="first" order-md="last">
                <v-img
                  max-height="200"
                  src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
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
  color: #fc913a;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #fca965;
  border-radius: 10px;
  text-decoration: none;
}

.toactivity-btn a::after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #fc913a;
  border-right: 3px solid #fc913a;
  transform: rotate(45deg);
}

.toactivity-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #fca965;
}

.toactivity-btn a:hover::after {
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
}

/* ボタン下ぞろえ用未完成 */
.d-flex {
  margin: auto 16px 6px 16px;
}

@media screen and (max-width: 500px) {
  .toactivity-btn a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vh auto auto auto;
    padding: 0.9em 1.8em;
    width: 260px;
    color: #fc913a;
    font-size: 12px;
    font-weight: 600;
    border: 2px solid #fca965;
    border-radius: 10px;
    text-decoration: none;
  }

  .toactivity-btn a::after {
    content: "";
    width: 5px;
    height: 5px;
    border-top: 3px solid #fc913a;
    border-right: 3px solid #fc913a;
    transform: rotate(45deg);
  }

  .toactivity-btn a:hover {
    color: #333333;
    text-decoration: none;
    background-color: #fca965;
  }

  .toactivity-btn a:hover::after {
    border-top: 3px solid #333333;
    border-right: 3px solid #333333;
  }
}
</style>
