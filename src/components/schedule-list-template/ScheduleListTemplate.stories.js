import Vuetify from "vuetify";
import ScheduleListTemplate from "./ScheduleListTemplate.vue";

export default {
  title: 'Templates/ScheduleListTemplate',
  component: ScheduleListTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { ScheduleListTemplate },
  template: '<ScheduleListTemplate />',
  Vuetify,
  props: Object.keys(argTypes)
});

export const Default = Template.bind({});