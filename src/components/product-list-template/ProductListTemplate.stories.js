import Vuetify from "vuetify";
import ProductListTemplate from "./ProductListTemplate.vue";

export default {
  title: "Templates/ProductListTemplate",
  component: ProductListTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { ProductListTemplate },
  template: "<ProductListTemplate />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
