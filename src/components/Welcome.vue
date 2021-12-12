<template>
  <div>
    <p>見学者向けページ</p>

    <!--jackでできること-->
    <div>
      <div class="midasi">jackでできること</div>
      <Dekirukoto />
    </div>

    <!--活動内容-->
    <div class="activity">
      <div class="midasi">活動内容</div>
      <Activity />
    </div>

    <!--プロダクト一覧-->
    <div>
      <div class="midasi">プロダクト一覧</div>
      <Products />
    </div>

    <!--活動実績-->
    <div>
      <div class="midasi">活動実績</div>
      <Results />
    </div>

    <!--活動予定 -->
    <div>
      <div class="midasi">活動予定</div>
      <Schedule />
    </div>
    <div>
      <div class="midasi">よくある質問</div>
      <Questions />
    </div>
  </div>
</template>

<script>
import Dekirukoto from "@/components/Welcome-Dekirukoto.vue";
import Questions from "@/components/Questions.vue";
import Products from "@/components/Welcome-Products.vue";
import Activity from "@/components/Welcome-Activity.vue";
import Results from "@/components/Welcome-Results.vue";
import Schedule from "@/components/Welcome-Schedule.vue";

export default {
  name: "Welcome",
  components: {
    Questions,
    Dekirukoto,
    Products,
    Activity,
    Results,
    Schedule
  }
};
</script>

<style scoped>
.midasi:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -10px; /*下線の上下位置調整*/
  display: inline-block;
  width: 50px; /*下線の幅*/
  height: 0.2em; /*下線の太さ*/
  -moz-transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translate(-50%); /*位置調整*/
  background-color: #fc913a; /*下線の色*/
}

.midasi {
  margin-top: 6vh;
  margin-bottom: 4vh;
  font-size: 1.6em;
  display: inline-block;
  position: relative;
}

.activity {
  margin: 0 auto;
}
</style>
