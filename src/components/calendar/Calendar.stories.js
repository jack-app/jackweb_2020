import Vuetify from "@/plugins/vuetify";
import Calendar from "./Calendar.vue";

export default {
  title: "Templates/Calendar",
  component: Calendar,
};

const Template = (args, { argTypes }) => ({
  components: { Calendar },
  props: Object.keys(argTypes),
  Vuetify,
  template: "<Calendar />",
});

export const Default = Template.bind({});
