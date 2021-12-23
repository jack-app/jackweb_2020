import Vuetify from "vuetify";
import ResultCard from "./ResultCard.vue";

export default {
  title: "Components/ResultCard",
  component: ResultCard,
};

const Template = (args, { argTypes }) => ({
  components: { ResultCard },
  template: '<ResultCard :name="name" :date="date" :link="link" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  name: "JPHACKS2020 Best Audience Award他「コミックSE」",
  date: "November 28, 2020",
  link: "https://jphacks.com/2020/result/innovator/",
};
