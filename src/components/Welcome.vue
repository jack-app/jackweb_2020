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
import Questions from "@/components/Questions.vue";

export default {
  name: "Welcome",
  components: {
    Questions
  },
  data: () => ({
    products: [
      {
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%8A%E5%AE%B6Bar.png?alt=media",
        name: "お家Bar"
      },
      {
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%86%E3%81%94%E3%81%8F%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%91%E3%83%BC.png?alt=media",
        name: "うごくスイーパー"
      },
      {
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%8A%E9%BA%A9%E3%83%A9%E3%82%A4%E3%83%B3.png?alt=media",
        name: "お麩ライン"
      },
      {
        icon: require("@/assets/ゲーム開発.png"),
        name: "サンプルプロダクト"
      },
      {
        icon: "",
        name: "sampleProduct2"
      }
    ],
    results: [
      {
        name: "JPHACKS2020 Best Audience Award他「コミックSE」",
        date: "November 28, 2020"
      },
      {
        name: "通知で覚える英単語 リリース",
        date: "October 24, 2020"
      },
      {
        name: "サンプル実績",
        date: "September 28, 2020"
      }
    ]
  })
};
</script>

<style scoped></style>
