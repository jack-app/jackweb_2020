import Vuetify from "vuetify";
import FailLoading from "./FailLoading.vue";

export default {
  title: "Components/FailLoading",
  component: FailLoading,
};

const Template = (args, { argTypes }) => ({
  components: { FailLoading },
  template: '<FailLoading />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {};
