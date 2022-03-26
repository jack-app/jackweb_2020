import Vuetify from "vuetify";
import FurtherButton from "./FurtherButton.vue";

export default {
  title: "Modules/FurtherButton",
  component: FurtherButton,
};

const Template = (args, { argTypes }) => ({
  components: { FurtherButton },
  template: '<FurtherButton :to="to"/>',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  to: "./products",
};
