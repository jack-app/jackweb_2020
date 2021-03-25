<template>
  <v-app>
    <v-app-bar
              color="tranceparent"
              src="@/assets/triangle-mosaic.png"
              hide-on-scroll>
      <v-toolbar-title>jack</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container>
        <div class="content">
          <div class="title">団体理念</div>
          <p>やりたいことをやろう</p>
        </div>
        <div class="content">
          <div class="title">団体情報</div>
          <div class="table-wrapper">
            <info-table />
          </div>
        </div>
        <div class="content">
          <div class="title">jackでできること</div>
        </div>
        <div class="content products">
          <div class="products__title title">プロダクト一覧</div>
          <div class="products__lists">
            <Products />
          </div>
        </div>
        <div class="content calendar">
          <h2 class="title">活動予定</h2>
          <Calendar />
        </div>
        <div class="content">
          <div class="title">よくある質問</div>
          <div class="questions-wrapper">
            <question-item />
          </div>
        </div>
        <div class="content">
          <div class="title">お問い合わせ</div>
          <p>お問い合わせを入れる</p>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InfoTable from './components/InfoTable.vue';
import Products from './components/Products.vue';
import Calendar from './components/Calendar.vue'

export default {
  name: 'App',

  components: {
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

.content {
  margin-bottom: 5vh;
}

.title {
  position: relative;
  margin-bottom: 20px;
}

.title:before{
  content: '';
  position: absolute;
  bottom: -5px;
  display: inline-block;
  width: 45px;
  height: 3px;
  left: 50%;
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #F29F05;
  border-radius: 2px;
}

.table-wrapper {
  margin-bottom: 20px;
}

/*吹き出し*/
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
