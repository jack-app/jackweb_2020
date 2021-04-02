<template>
  <div class="card-container">
    <DekirukotoCard v-for = "content in contents"
      :key ="content.id"
      :icon="content.icon"
      :title="content.title"
      :text="content.text"
    />
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
  width: 85%;
  margin: 0 auto;
}
</style>
