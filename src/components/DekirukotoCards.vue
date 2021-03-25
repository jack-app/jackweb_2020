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
        icon:require('@/assets/Talk1.png'),
        title:"アプリ開発",
        text:"スマートフォンで動くアプリを開発することができます。jackでは共同のアカウントを持っているので作ったアプリをAppStoreやGooglePlayで世界中にリリースすることもできます！"
      },{
        id:1,
        icon:require('@/assets/triangle-mosaic.png'),
        title:"ゲーム開発",
        text:"PCやスマートフォンで遊べるゲームを開発することができます。"
      },{
        id:2,
        icon:require('@/assets/triangle-mosaic.png'),
        title:"Webサービス開発",
        text:"「もっと便利な生活がしたい！もっと楽をしたい！」生活をよりよくするサービスを開発することができます。"
      },{
        id:3,
        icon:require('@/assets/triangle-mosaic.png'),
        title:"デザイン",
        text:"アプリ・ゲーム・Webサービスの開発には魅力的なデザインが必要です。jackではチーム開発をすることが多いのでデザイナーはとても重宝されています。"
      }
    ]
  }),
}
</script>

<style scoped>
.card-container{
  display: flex;
  width:80%;
  margin: 0 auto;
}
</style>
