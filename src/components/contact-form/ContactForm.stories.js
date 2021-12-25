import Vuetify from "@/plugins/vuetify";
import ContactForm from "./ContactForm.vue";

export default {
  title: "Templates/ContactForm",
  component: ContactForm,
};

const Template = (args, { argTypes }) => ({
  components: { ContactForm },
  props: Object.keys(argTypes),
  Vuetify,
  template: "<ContactForm />",
});

export const Default = Template.bind({});
