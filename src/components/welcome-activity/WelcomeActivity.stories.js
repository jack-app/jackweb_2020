import Vuetify from "vuetify";
import WelcomeActivity from "./WelcomeActivity.vue";

export default {
  title: "Templates/WelcomeActivity",
  component: WelcomeActivity,
};

const Template = (args, { argTypes }) => ({
  components: { WelcomeActivity },
  template: "<WelcomeActivity />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {};
