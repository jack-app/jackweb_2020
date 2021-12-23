import Vuetify from "vuetify";
import ProductCard from "./ProductCard.vue";

export default {
  title: "Modules/ProductCard",
  component: ProductCard,
};

const Template = (args, { argTypes }) => ({
  components: { ProductCard },
  template:
    '<ProductCard :name="name" :icon="icon" :ios="ios" :android="android" :web="web" :description="description"/>',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  name: "プロダクト名",
  icon: null,
  ios: null,
  android: null,
  web: "https://www.google.com",
  description: "これはプロダクト説明です",
};
