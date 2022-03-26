import Vuetify from "vuetify";
import WelcomeProducts from "./WelcomeProducts.vue";

export default {
  title: "Templates/WelcomeProducts",
  component: WelcomeProducts,
};

const Template = (args, { argTypes }) => ({
  components: { WelcomeProducts },
  template: "<WelcomeProducts />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {};
