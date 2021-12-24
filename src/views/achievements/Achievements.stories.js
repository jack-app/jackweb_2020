import Vuetify from '@/plugins/vuetify';
import Achievements from './Achievements.vue';

export default {
  title: 'Pages/Achievements',
  component: Achievements,
};

const Template = (args, {argTypes}) => ({
  components: { Achievements },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Achievements />',
});

export const Default = Template.bind({});