<template>
 <v-container>
   <div class="activity">
     <div class="f-container">
       <div class="flexitem item1">
          <div class="headline" align="left">通常活動</div>
              <div class="body-1" align="left">
                <p>毎週木曜日、隔週土曜日に集まって活動しています！</p>
                <p>現在はzoomで活動していますが、コロナが開けたら名古屋大学の図書館での活動を再開します。</p>
              </div>
        </div>
        <div class="flexitem item2">
          <v-img max-height="300" max-width="480" src="@/assets/activity.png"></v-img>
        </div>
     </div>
       <div class="f-container">
         <div class="flexitem item3">
           <v-img max-height="300" max-width="480" src="@/assets/event.png"></v-img>
         </div>
         <div class="flexitem item4">
           <div class="headline" align="left">イベント</div>
              <div class="body-1" align="left">
                <p>jackHackというハッカソンを例年ゴールデンウイークに行っています。</p>
                <p>ハッカソンというのは、短期間でテーマに沿ったアプリを作って、アイデアや完成度を競い合う大会です。</p>
                <p>名大祭では、お客さんに作ったものを実際に触って遊んでもらいます。</p>
                <p>例年12月に行われるjackFesでは、1年の活動の成果を発表しあいます。</p>
             </div>
         </div>
       </div>
   </div>
 </v-container>
</template>

<style scoped>
 .headline{
  border-bottom: solid 2px #F6B352;
  padding-left:20px;
}

.item2,.item3{
  width: 40vw
}


.f-container{
  display: flex;
  margin-bottom: 10vh;
}

.item2{
  margin-left: 5vw;
}
.item3{
  margin-right: 5vw;
}
</style>
