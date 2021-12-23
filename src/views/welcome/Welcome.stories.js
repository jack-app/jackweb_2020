import Vuetify from '@/plugins/vuetify';
import Welcome from './Welcome.vue';

export default {
  title: 'Pages/Welcome',
  component: Welcome,
};

const Template = (args, {argTypes}) => ({
  components: { Welcome },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Welcome />',
});

export const Default = Template.bind({});