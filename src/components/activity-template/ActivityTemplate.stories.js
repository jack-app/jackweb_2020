import Vuetify from 'vuetify';
import ActivityTemplate from './ActivityTemplate.vue';

export default {
  title: 'Templates/ActivityTemplate',
  component: ActivityTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { ActivityTemplate },
  template: '<ActivityTemplate />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
}