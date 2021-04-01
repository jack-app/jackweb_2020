<template>
  <v-app>
    <v-app-bar
              color="tranceparent"
              src="@/assets/triangle-mosaic.png"
              hide-on-scroll>
      <v-btn-icon size="1">
        <img src="@/assets/jack-logo2.png">
      </v-btn-icon>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
         <header>
          <h1 align="left">jackは <br>名古屋の <br>アプリ・ゲーム開発サークルです！</h1>
        </header>
      <v-container>
        <div class="content">
          <div class="display-1">団体情報</div>
          <div class="table-wrapper">
            <info-table />
          </div>
        </div>
        <div class="content">
          <div class="display-1">jackでできること</div>
        </div>
        <div class="content">
          <div class="display-1">活動内容</div>
          <div class="activity">
            <activity-introduction />
          </div>
        </div>
        <div class="content products">
          <div class="products__title display-1">プロダクト一覧</div>
          <div class="products__lists">
            <Products />
          </div>
        </div>
        <div class="content calendar">
          <div class="display-1">活動予定</div>
          <Calendar />
        </div>
        <div class="content">
          <div class="display-1">よくある質問</div>
          <div class="questions-wrapper">
            <question-item />
          </div>
        </div>
        <div class="content">
          <div class="display-1">お問い合わせ</div>
          <p>お問い合わせを入れる</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ActivityIntroduction from './components/ActivityIntroduction.vue';
import InfoTable from './components/InfoTable.vue';
import Products from './components/Products.vue';
import Calendar from './components/Calendar.vue';
//import QuestionItem from './components/Question'//

export default {
  name: 'App',

  components: {
    ActivityIntroduction,
    InfoTable,
    Products,
    Calendar
  },

  // data: () => ({
  // }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c4c4c;
  background-color: #fff;
  background-image: url("/triangle-mosaic.png");
  background-repeat: repeat;
}

header {
  position: relative;
  height: 70vh;
  width: 100vw;
  background: cover;
  background-image: url("/jack-web_top.png");
  background-size: contain;
}

h1 {
  color: #fff;
  font-size: 48px;
  line-height: 100px;
  padding-left: 80px;
  padding-top: 20px;
}



.content {
  margin-bottom: 50vh;
}

.display-1 {
  position: relative;
  margin-bottom: 20px;
}

.display-1:before{
  content: '';
  position: absolute;
  bottom: -5px;
  display: inline-block;
  width: 100px;
  height: 4px;
  left: 50%;
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #F6B352;
  border-radius: 2px;
}


.table-wrapper {
  margin-bottom: 20px;
}

</style>
