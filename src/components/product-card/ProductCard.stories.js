import Vuetify from "vuetify";
import ProductCard from "./ProductCard.vue";

export default {
  title: "Modules/ProductCard",
  component: ProductCard,
  argTypes: {
    icon: { control: { type: "text" } },
    ios: { control: { type: "text" } },
    android: { control: { type: "text" } },
    web: { control: { type: "text" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ProductCard },
  template:
    '<ProductCard :name="name" :icon="icon" :ios="ios" :android="android" :web="web" :description="description"/>',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Webapp = Template.bind({});
Webapp.args = {
  name: "webアプリ",
  web: "https://www.google.com",
  description: "これはプロダクト説明です",
};

export const Smartphoneapp = Template.bind({});
Smartphoneapp.args = {
  name: "スマホアプリ",
  icon: require("@/assets/アプリ開発3.png"),
  ios: "https://www.apple.com",
  android: "https://www.android.com",
  description: "これはプロダクト説明です",
};
