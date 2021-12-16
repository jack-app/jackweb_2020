import Vuetify from '@/plugins/vuetify';
import Activity from './Activity.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Pages/Activity',
  component: Activity,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, {argTypes}) => ({
  components: { Activity },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Activity />',
});

export const Default = Template.bind({});