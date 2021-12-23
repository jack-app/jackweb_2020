import Vuetify from "vuetify";
import ResultListTemplate from "./ResultListTemplate.vue";

export default {
  title: "Templates/ResultListTemplate",
  component: ResultListTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { ResultListTemplate },
  template: "<ResultListTemplate />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
