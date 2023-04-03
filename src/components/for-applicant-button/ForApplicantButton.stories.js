import Vuetify from "vuetify";
import ForApplicantButton from "./ForApplicantButton.vue";

export default {
  title: "Modules/ForApplicantButton",
  component: ForApplicantButton,
};

const Template = (args, { argTypes }) => ({
  components: { ForApplicantButton },
  template: '<ForApplicantButton :to="to"/>',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  to: "./products",
};
