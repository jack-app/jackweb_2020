import Vuetify from "vuetify";
import AchievementCard from "./AchievementCard.vue";

export default {
  title: "Modules/AchievementCard",
  component: AchievementCard,
};

const Template = (args, { argTypes }) => ({
  components: { AchievementCard },
  template: '<AchievementCard :name="name" :date="date" :link="link" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  name: "JPHACKS2020 Best Audience Award他「コミックSE」",
  date: "November 28, 2020",
  link: "https://jphacks.com/2020/result/innovator/",
};
