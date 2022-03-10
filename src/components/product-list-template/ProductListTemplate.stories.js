import Vuetify from "vuetify";
import ProductListTemplate from "./ProductListTemplate.vue";

export default {
  title: "Templates/ProductListTemplate",
  component: ProductListTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { ProductListTemplate },
  template: '<ProductListTemplate :num="num" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});

export const Short = Template.bind({});
Short.args = {
  num: 2,
};
