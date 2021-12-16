import Vuetify from '@/plugins/vuetify';
import Contact from './Contact.vue';

export default {
  title: 'Components/Contact',
  component: Contact,
};

const Template = (args, {argTypes}) => ({
  components: { Contact },
  props: Object.keys(argTypes),
  Vuetify,
  template: '<Contact />',
});

export const Default = Template.bind({});