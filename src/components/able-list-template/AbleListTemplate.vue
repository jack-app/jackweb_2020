<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        v-for="able in ables"
        :key="able.key"
      >
        <AbleCard :src="able.src" :title="able.title" :text="able.text" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AbleCard from "../able-card/AbleCard.vue";

export default {
  components: {
    AbleCard,
  },
  data: () => ({
    ables: [
      {
        key: 0,
        src: require("@/assets/アプリ開発3.png"),
        title: "アプリ開発",
        text: "スマートフォンで動くアプリを開発することができます。作ったアプリをAppStoreやGooglePlayで世界中にリリースすることができます！",
      },
      {
        key: 1,
        src: require("@/assets/ゲーム開発.png"),
        title: "ゲーム開発",
        text: "PCやスマートフォンで遊べるゲームを開発することができます。初心者から始めてゲームを作り上げた人もたくさんいます！",
      },
      {
        key: 2,
        src: require("@/assets/ウェブサービス.png"),
        title: "Webサービス開発",
        text: "「もっと便利な生活がしたい！もっと楽をしたい！」生活をよりよくするWebサービスを開発することができます。",
      },
      {
        key: 3,
        src: require("@/assets/デザイン2.png"),
        title: "デザイン",
        text: "アプリ・ゲーム・Webサービスの開発には魅力的なデザインが必要です。jackはチーム開発が多いのでデザイナーはとても重宝されます。",
      },
    ],
  }),
};
</script>

<style scoped></style>
