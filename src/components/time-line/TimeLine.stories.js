import Vuetify from 'vuetify';
import TimeLine from './TimeLine.vue';

export default {
  title: 'Components/TimeLine',
  component: TimeLine,
};

const Template = (args, { argTypes }) => ({
  components: { TimeLine },
  template: '<TimeLine :schedules="schedules" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  schedules: [{
    id: 1,
    month: 12,
    title: "jackFes",
    detail: "みんなの1年間の成果を発表する会"
  },{
    id: 2,
    month: 4,
    title: "jackHack",
    detail: "それすなわち死"
  }],
}