<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" order="last" order-md="first">
        <v-card-text>
          毎週木曜日、隔週土曜日の通常活動に加え、様々なイベントを開催しています。
          イベントイベントイベント
        </v-card-text>
        <div class="button__wrapper">
          <v-btn
            color="#4C4C4C"
            style="border-color: #f6b352;"
            rounded
            outlined
            to="./activity"
          >
            詳しく見る　→
          </v-btn>
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
</template>

<script></script>

<style>
.button__wrapper {
  text-align: center;
}
</style>
