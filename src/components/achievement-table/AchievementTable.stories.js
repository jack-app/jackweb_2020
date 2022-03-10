import Vuetify from "@/plugins/vuetify";
import AchievementTable from "./AchievementTable.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Templates/AchievementTable",
  component: AchievementTable,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  components: { AchievementTable },
  props: Object.keys(argTypes),
  Vuetify,
  template: "<AchievementTable />",
});

export const NoTag = Template.bind({});
NoTag.args = {};

export const Default = Template.bind({});
