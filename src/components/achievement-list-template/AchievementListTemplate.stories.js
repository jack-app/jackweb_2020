import Vuetify from "vuetify";
import AchievementListTemplate from "./AchievementListTemplate.vue";

export default {
  title: "Templates/AchievementListTemplate",
  component: AchievementListTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { AchievementListTemplate },
  template: "<AchievementListTemplate />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
