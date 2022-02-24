import Vuetify from "vuetify";
import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  template: '<Button :link="link" :text="text" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  link: "https://google.com",
  text: "テキスト",
};
