import Vuetify from "@/plugins/vuetify";
import ShinkanSchedule from "./ShinkanSchedule.vue";

export default {
  title: "Components/ShinkanSchedule",
  component: ShinkanSchedule,
};

const Template = (args, { argTypes }) => ({
  components: { ShinkanSchedule },
  template: '<ShinkanSchedule :text="text" :btn="btn" :link="link"/>',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  btn: "見学お申し込みフォームへ",
  link: "https://google.com",
};
