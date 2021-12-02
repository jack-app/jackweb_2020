<template>
  <div>
    <p>見学者向けページ</p>

    <!--jackでできること-->
    <div>
      <p>jackでできること</p>
      <v-card>
        <img
          src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
        />
        <v-card-title>アプリ開発</v-card-title>
        <v-card-text>
          スマートフォンで動くアプリを開発することができます。
          作ったアプリをAppStoreやGooglePlayで世界中にリリースすることができます！
        </v-card-text>
      </v-card>
      <v-card>
        <img
          src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
        />
        <v-card-title>ゲーム開発</v-card-title>
        <v-card-text>
          PCやスマートフォンで遊べるゲームを開発することができます。
          初心者から始めてゲームを作り上げた人もたくさんいます！
        </v-card-text>
      </v-card>
      <v-card>
        <img
          src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
        />
        <v-card-title>Webサービス開発</v-card-title>
        <v-card-text>
          「もっと便利な生活がししたい！もっと楽をしたい！」
          生活をよりよくするサービスを開発することができます。
        </v-card-text>
      </v-card>
      <v-card>
        <img
          src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
        />
        <v-card-title>デザイン</v-card-title>
        <v-card-text>
          アプリ・ゲーム・Webサービスの開発には魅力的なデザインが必要です。
          jackはチーム開発が多いのでデザイナーはとても重宝されます。
        </v-card-text>
      </v-card>
    </div>

    <!--活動内容-->
    <div>
      <p>活動内容</p>
      <img
        src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H2UMXMI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
      />
      <v-card class="elevation-0 ">
        <v-card-text>
          毎週木曜日、隔週土曜日の通常活動に加え、様々なイベントを開催しています。
          イベントイベントイベント
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn to="/activity">more</v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!--プロダクト一覧-->
    <div>
      <p>プロダクト一覧</p>
      <div v-for="product in products" :key="product.name">
        <img v-if="product.icon" :src="product.icon" />
      </div>

      <v-btn class="justify-end" to="/products">more</v-btn>
    </div>

    <!--活動実績-->
    <div>
      <p>活動実績</p>

      <!--テーブルにするなら-->
      <div class="flex" v-for="result in results" :key="result.name">
        <p>{{ result.date }}</p>
        <p>{{ result.name }}</p>
      </div>

      <v-data-table :items="results" :items-per-page="2"></v-data-table>
    </div>

    <!--活動予定 -->
    <div>
      <p>活動予定</p>
      <p>
        こちらの日程で活動しています。
        活動に興味のある方は是非一度見に来てください。
      </p>
      <v-btn to="/contact" color="primary">見学申し込みフォームへ</v-btn>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=jackapp.tmy@gmail.com&ctz=Asia/Tokyo"
        showTitle="0"
        showTabs="0"
        showPrint="0"
      ></iframe>
    </div>
    <p>FAQ</p>
    <Questions />
  </div>
</template>

<script>
import axios from "axios";
import Questions from "@/components/Questions.vue";

export default {
  name: "Welcome",
  components: {
    Questions
  },
  data: () => ({
    products: null,
    results: null
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/results`)
      .then(response => {
        this.results = response.data.message;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/products`)
      .then(response => {
        let array = response.data.message.slice();
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        this.products = array.slice(0, 5);
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  }
};
</script>

<style scoped></style>
