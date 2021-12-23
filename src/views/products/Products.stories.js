import Vuetify from '@/plugins/vuetify';
import Products from './Products.vue';

export default {
  title: 'Pages/Products',
  component: Products,
};

const Template = (args, {argTypes}) => ({
  components: { Products },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Products />',
});

export const Default = Template.bind({});