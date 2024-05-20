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
      <ContentTitle title="活動予定" />
      <WelcomeSchedule :text="text" :link="link" :btn="btn" />
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
import WelcomeSchedule from "@/components/welcome-schedule/WelcomeSchedule.vue";
import Questions from "@/components/questions/Questions.vue";

export default {
  components: {
    ContentTitle,
    AbleListTemplate,
    WelcomeActivity,
    WelcomeProducts,
    WelcomeAchievements,
    WelcomeSchedule,
    Questions,
  },
  data: () => ({
    text:
      "こちらの日程で活動しています。\njackの活動に興味のある方は是非一度見に来てください！",
    num: 2,
    link: "https://forms.gle/e27FUtpxokwY9uVR7",
    btn: "見学申し込みフォームへ",
  }),
};
</script>

<style scoped>
.content-container {
  margin: 20px 0;
}
</style>
