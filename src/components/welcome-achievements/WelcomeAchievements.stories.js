import Vuetify from "vuetify";
import WelcomeAchievements from "./WelcomeAchievements.vue";

export default {
  title: "Templates/WelcomeAchievements",
  component: WelcomeAchievements,
};

const Template = (args, { argTypes }) => ({
  components: { WelcomeAchievements },
  template: "<WelcomeAchievements />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {};
