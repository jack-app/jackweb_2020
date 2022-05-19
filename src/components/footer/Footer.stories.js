import Vuetify from '@/plugins/vuetify';
import Footer from './Footer.vue';

export default {
  title: 'Layout-Components/Footer',
  component: Footer,
};

const Template = (args, {argTypes}) => ({
  components: { Footer },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Footer />',
});

export const Default = Template.bind({});