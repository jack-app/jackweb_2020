import Vuetify from "@/plugins/vuetify";
import Header from "./Header.vue";

export default {
  title: "Layout-Components/Header",
  component: Header,
};

const Template = (args, { argTypes }) => ({
  components: { Header },
  props: Object.keys(argTypes),
  Vuetify,
  template: "<Header />",
});

export const Default = Template.bind({});
