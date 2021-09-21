<template>
  <v-app>
    <Menubar />
    <v-main>
      <Top />
      <div class="contents">
        <div class="content" id="can">
          <div class="display-1" >jackでできること</div>
          <DekirukotoCards />
        </div>
        <div class="content" id = "activity">
          <div class="display-1">活動内容</div>
          <div class="activity" >
            <activity-introduction />
          </div>
        </div>
        <div class="content products" id = "products">
          <div class="products__title display-1">プロダクト一覧</div>
          <div class="products__lists">
            <Products />
          </div>
        </div>
        <div class="content calendar" id="schedule">
          <div class="display-1">活動予定</div>
          <Calendar />
        </div>
        <div class="content" id="welcometour">
          <div class="display-1">見学お申し込み</div>
          <WelcomeTour />
        </div>
        <div class="content" id = "FAQ">
          <div class="display-1">よくある質問</div>
          <div class="questions-wrapper">
            <Questions />
          </div>
        </div>
      </div>
    </v-main>
    <footer>
      2021 © jack
    </footer>
  </v-app>
</template>

<script>
import Top from './components/Top.vue'
import Products from './components/Products.vue';
import Calendar from './components/Calendar.vue';
import DekirukotoCards from './components/DekirukotoCards.vue';
import Questions from './components/Questions.vue';
import Menubar from './components/Menubar.vue';
import ActivityIntroduction from './components/ActivityIntroduction.vue';
import WelcomeTour from './components/WelcomeTour2.vue'

export default {
  name: 'App',

  components: {
    Top,
    Menubar,
    DekirukotoCards,
    ActivityIntroduction,
    Products,
    Calendar,
    Questions,
    WelcomeTour,
  },

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

.content {
  margin: 0 auto;
  margin-bottom: 20vh;
}

.display-1 {
  position: relative;
  margin-top: 10vh;
  margin-bottom: 6vh;
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

.questions-wrapper{
  margin: 0 auto !important;
}

.contents {
  width:  75%;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .contents {
  width:  90%;
  }
}
</style>
