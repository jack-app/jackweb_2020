import Vuetify from "vuetify";
import LoadingText from "./LoadingText.vue";

export default {
  title: "Components/LoadingText",
  component: LoadingText,
};

const Template = (args, { argTypes }) => ({
  components: { LoadingText },
  template: '<LoadingText />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
};