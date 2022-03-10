import Vuetify from '@/plugins/vuetify';
import WelcomeSchedule from './WelcomeSchedule.vue';

export default {
  title: 'Components/WelcomeSchedule',
  component: WelcomeSchedule,
};

const Template = (args, { argTypes }) => ({
  components: { WelcomeSchedule },
  template: '<WelcomeSchedule :text="text" :btn="btn" :link="link"/>',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
    text: "こちらの日程で活動しています。\n活動に興味のある方は是非一度見に来てください。",
    btn: "見学お申し込みフォームへ",
    link:"https://google.com"
}