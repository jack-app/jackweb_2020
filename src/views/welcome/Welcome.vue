<template>
  <v-container class="welcome">
    <div class="content-container">
      <ContentTitle title="jackでできること" />
      <AbleListTemplate />
    </div>
    <div class="content-container">
      <ContentTitle title="活動内容" />
      <WelcomeActivity />
    </div>
    <div class="content-container">
      <ContentTitle title="プロダクト" />
      <WelcomeProducts />
    </div>
    <div class="content-container">
      <ContentTitle title="活動実績" />
      <WelcomeAchievements />
    </div>
    <div class="content-container" id="applicant">
      <ContentTitle title="新歓" />
      <ShinkanSchedule :link="link" :btn="btn" />
    </div>
    <div class="content-container">
      <ContentTitle title="FAQ" />
      <Questions />
    </div>
  </v-container>
</template>

<script>
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import AbleListTemplate from "@/components/able-list-template/AbleListTemplate.vue";
import WelcomeActivity from "@/components/welcome-activity/WelcomeActivity.vue";
import WelcomeProducts from "@/components/welcome-products/WelcomeProducts.vue";
import WelcomeAchievements from "@/components/welcome-achievements/WelcomeAchievements.vue";
import ShinkanSchedule from "@/components/shinkan-schedule/ShinkanSchedule.vue";
import Questions from "@/components/questions/Questions.vue";

export default {
  components: {
    ContentTitle,
    AbleListTemplate,
    WelcomeActivity,
    WelcomeProducts,
    WelcomeAchievements,
    ShinkanSchedule,
    Questions,
  },
  data: () => ({
    // text:
    //   "jackでは現在新歓を行っています。\n<オフライン>\n4/8(土)13:45～16:15\n4/16(日)13:45～16:15\n@名古屋学生青年センター",
    num: 2,
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLSeqODt5jRs_UO90-jSWaRq-1HI-_G5RZFCZyLxw3eN3Ugjekg/viewform",
    btn: "新歓申し込みフォームへ",
  }),
};
</script>

<style scoped>
.content-container {
  margin: 20px 0;
}
</style>
