<template>
  <v-container>
    <div class="questions">
      <div class="baloon_l">
        <v-avater size="80">
          <img src="@/assets/Talk1.png" alt="考える人" >
        </v-avater>
        <p class="says">未経験でも大丈夫ですか？</p>
      </div>
      <div class="baloon_r">
        <div class="says"><p>大丈夫です。</p></div>
        <v-avater size="80">
          <img src="@/assets/Talk2.png" alt="答える人" >
        </v-avater>
      </div>
      <div class="baloon_l">
        <v-avater size="80">
          <img src="@/assets/Talk3.png" alt="考える人" >
        </v-avater>
        <p class="says">サークル参加の最低条件はありますか？</p>
      </div>
      <div class="baloon_r">
        <div class="says"><p>入会にあたって必要な条件はありません！</p></div>
        <v-avater size="80">
          <img src="@/assets/Talk4.png" alt="答える人" >
        </v-avater>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.balloon_l,
.balloon_r{
  margin: 30px 0;
  display:flex;
  justify-content: flex-start;
  align-items: flex-start; /*縦位置を上揃え*/
/*   align-items: center; */ /*縦位置を真ん中揃え*/
}
.balloon_r{
  justify-content:flex-end;
}
.faceicon img{
  width: 80px; /*任意のサイズ*/
  height: auto;
}
.balloon_r .faceicon{
  margin-left:25px;
}
.balloon_l .faceicon{
  margin-right:25px;
}
.balloon_r .faceicon{
  order:2 !important;
}
.says {
  max-width:500px; /*最大幅は任意*/
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 17px 13px 15px 18px;
  border-radius: 12px;
  background: #FFCC80;/*色は任意*/
  box-sizing:border-box;
  margin:20px !important;
  line-height:1.5;
/*   align-items: center; */
}
.says p{
  margin:8px 0 0 !important;
}
.says p:first-child{
  margin-top:0 !important;
}
.says:after {
  content: "";
  position: absolute;
  border: 10px solid transparent;
/*   margin-top:-3px;  */
}
.balloon_l .says:after {
  left: -26px;
  border-right: 22px solid #FFCC80;
}
.balloon_r .says:after {
  right: -26px;
  border-left: 22px solid #FFCC80;
}
</style>

