import Vuetify from "vuetify";
import ScheduleList from "./ScheduleList.vue";

export default {
  title: 'Templates/ScheduleList',
  component: ScheduleList,
};

const Template = (args, { argTypes }) => ({
  components: { ScheduleList },
  template: '<ScheduleList />',
  Vuetify,
  props: Object.keys(argTypes)
});

export const Default = Template.bind({});