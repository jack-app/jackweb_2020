import Vuetify from "vuetify";
import AbleListTemplate from "./AbleListTemplate.vue";

export default {
  title: "Templates/AbleListTemplate",
  component: AbleListTemplate,
};

const Template = (args, { argTypes }) => ({
  components: { AbleListTemplate },
  template: "<AbleListTemplate />",
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
