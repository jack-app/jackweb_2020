<template>
  <div class="card-container">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for = "n in 4"
          :key ="n"
        >
          <DekirukotoCard
            :key ="contents[n-1].id"
            :icon="contents[n-1].icon"
            :title="contents[n-1].title"
            :text="contents[n-1].text"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DekirukotoCard from './DekirukotoCard.vue'

export default {
  components :{
    DekirukotoCard
  },
  data: ()=> ({
    contents:[
      {
        id:0,
        icon:require('@/assets/アプリ開発3.png'),
        title:"アプリ開発",
        text:"スマートフォンで動くアプリを開発することができます。作ったアプリをAppStoreやGooglePlayで世界中にリリースすることができます！"
      },{
        id:1,
        icon:require('@/assets/ゲーム開発.png'),
        title:"ゲーム開発",
        text:"PCやスマートフォンで遊べるゲームを開発することができます。初心者から始めてゲームを作り上げた人もたくさんいます！"
      },{
        id:2,
        icon:require('@/assets/ウェブサービス.png'),
        title:"Webサービス開発",
        text:"「もっと便利な生活がしたい！もっと楽をしたい！」生活をよりよくするWebサービスを開発することができます。"
      },{
        id:3,
        icon:require('@/assets/デザイン2.png'),
        title:"デザイン",
        text:"アプリ・ゲーム・Webサービスの開発には魅力的なデザインが必要です。jackはチーム開発が多いのでデザイナーはとても重宝されます。"
      }
    ]
  }),
}
</script>

<style scoped>
.card-container{
  display: flex;

}
</style>
