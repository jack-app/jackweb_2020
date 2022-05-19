import Vuetify from '@/plugins/vuetify';
import Activity from './Activity.vue';

export default {
  title: 'Pages/Activity',
  component: Activity,
};

const Template = (args, {argTypes}) => ({
  components: { Activity },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Activity />',
});

export const Default = Template.bind({});