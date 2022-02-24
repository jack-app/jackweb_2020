import Vuetify from "vuetify";
import RouteButton from "./RouteButton.vue";

export default {
  title: "Components/RouteButton",
  component: RouteButton,
};

const Template = (args, { argTypes }) => ({
  components: { RouteButton },
  template: '<RouteButton to="to" text="text" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  to: "/products",
  text: "プロダクト",
};
