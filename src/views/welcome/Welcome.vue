<template>
  <v-container class="welcome">
    <ContentTitle title="jackでできること" />
    <AbleListTemplate />
    <ContentTitle title="活動内容" />
    <WelcomeActivity />
    <ContentTitle title="プロダクト" />
    <ProductListTemplate :num="num" />
    <v-btn
      color="#4C4C4C"
      style="border-color: #f6b352;"
      rounded
      outlined
      to="./products"
    >
      詳しく見る→
    </v-btn>
    <ContentTitle title="活動実績" />
    <AchievementTable />
    <v-btn
      color="#4C4C4C"
      style="border-color: #f6b352;"
      rounded
      outlined
      to="./achievements"
    >
      詳しく見る→
    </v-btn>
    <ContentTitle title="活動予定" />
    <WelcomeSchedule
      :text="text"
      link="https://google.com"
      btn="見学申し込みフォームへ"
    />

    <ContentTitle title="FAQ" />
    <Questions />
  </v-container>
</template>

<script>
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import AbleListTemplate from "@/components/able-list-template/AbleListTemplate.vue";
import WelcomeActivity from "@/components/welcome-activity/WelcomeActivity.vue";
import ProductListTemplate from "@/components/product-list-template/ProductListTemplate.vue";
import AchievementTable from "@/components/achievement-table/AchievementTable.vue";
import WelcomeSchedule from "@/components/welcome-schedule/WelcomeSchedule.vue";
import Questions from "@/components/questions/Questions.vue";

export default {
  components: {
    ContentTitle,
    AbleListTemplate,
    WelcomeActivity,
    ProductListTemplate,
    AchievementTable,
    WelcomeSchedule,
    Questions,
  },
  data: () => ({
    text:
      "こちらの日程で活動しています。\n活動に興味のある方は是非一度見に来てください",
    num: 2,
  }),
};
</script>
