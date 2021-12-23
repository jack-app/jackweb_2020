import Vuetify from "@/plugins/vuetify";
import Results from "./Results.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Pages/Results",
  component: Results,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  components: { Results },
  props: Object.keys(argTypes),
  Vuetify,
  template: "<Results />",
});

export const Default = Template.bind({});
