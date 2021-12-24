import Vuetify from "@/plugins/vuetify";
import Questions from "./Questions.vue";

export default {
  title: "Templates/Questions",
  component: Questions,
};

const Template = (args, { argTypes }) => ({
  components: { Questions },
  props: Object.keys(argTypes),
  Vuetify,
  template: "<Questions />",
});

export const Default = Template.bind({});
