<template>
<div class='tour-container'>
  <div class="texts">
    <div class="headline">
      <p>jackは現在新歓を開催しています！</p>
    </div>
    <p>jackのメンバーが作ったアプリやゲームを楽しく紹介します！<br>ぜひぜひご参加ください！</p>
  </div>
    <v-card class="card-1" max-width="350">
      <v-card-text>
        <div class="title">
          日程
        </div>
        <div class="body-1 text">
          <ul>
            <li>4/3(土) 15:00~16:00</li>
            <li>4/8(木) 15:00~16:00</li>
            <li>4/10(土) 21:00~22:00（夜の部）</li>
            <li>4/18(日) 15:00~16:00</li>
          </ul>
        </div>
        <br>
        <div class="title">
          場所
        </div>
        <div class="body-1 text">
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
  display: flex;
}
.texts {
  text-align: left;
  padding-top: 3vh;
}

.text{
  text-align: left;
}

.card-1{
  margin:0 auto;
}

.title{
  text-align: left;
}
.accessbutton{
  padding-top: 5%;
  margin: 0 auto;
  text-align: center;
}

.v-card-text{
  margin: 0 auto;
}

.body-1{
  padding-left: 1vw;
}

@media screen and (max-width: 800px) {
        .tour-container {
          display: block;
        }
      }

@media screen and (max-width: 400px) {
        .v-btn {
          max-width:70vw;
        }
      }
</style>
