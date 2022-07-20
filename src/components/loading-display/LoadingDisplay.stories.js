import Vuetify from "vuetify";
import LoadingDisplay from "./LoadingDisplay.vue";

export default {
  title: "Components/LoadingDisplay",
  component: LoadingDisplay,
};

const Template = (args, { argTypes }) => ({
  components: { LoadingDisplay },
  template: '<LoadingDisplay :loading="loading" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Loading = Template.bind({});
Loading.args = {
  loading:"loading"
};

export const Failure = Template.bind({});
Failure.args = {
  loading:"failure"
};

export const Success = Template.bind({});
Success.args = {
  loading:"success"
};