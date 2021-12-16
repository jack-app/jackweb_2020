import Vuetify from '@/plugins/vuetify';
import EventList from './EventList.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Components/EventList',
  component: EventList,
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, {argTypes}) => ({
  components: { EventList },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<EventList />',
});

export const NoTag = Template.bind({});
NoTag.args = {

}

export const Default = Template.bind({});