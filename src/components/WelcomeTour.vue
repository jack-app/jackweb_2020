<template>
<div class='tour-container'>
  <div class="text">
    <div class="headline">
      <p>jackは現在新歓を開催しています！</p>
    </div>
        <p>jackのメンバーが作ったアプリやゲームを楽しく紹介します！
        ぜひぜひご参加ください！</p>
  </div>

  <v-card max-width="350">
    <v-card-text>
      <div class="title">
        日程
      </div>
      <div class="body-1">
        <ul>
        <li>4/3(土) 15:00~16:00</li>
        <li>4/6(火) 15:00~16:00</li>
        <li>4/8(木) 15:00~16:00</li>
        <li>4/10(土) 21:00~22:00（夜の部）</li>
        <li>4/18(日) 15:00~16:00</li>
        </ul>
      </div>
        <br>
      <div class="title">
        場所
      </div>
      <div class="body-1">
        zoomで開催しています。
      </div>
      <div class="accessbutton">
        <v-btn
          rounded
          color="#FC913A"
          class="white--text"
        >
          <v-icon>mdi-open-in-new</v-icon>お申し込みはこちら
        </v-btn>
      </div>
    </v-card-text>
  </v-card>


</div>
</template>

<script>

</script>

<style scoped>
.tour-container{
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
.accessbutton{
  margin: 0 auto;
  text-align: center;
}

.v-card-text{
  margin: 0 auto;
}

.body-1{
  padding-left: 1vw;
}
</style>
