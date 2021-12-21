import Vuetify from 'vuetify';
import ContentTitle from './ContentTitle.vue';

export default {
  title: 'Components/ContentTitle',
  component: ContentTitle,
};

const Template = (args, { argTypes }) => ({
  components: { ContentTitle },
  template: '<ContentTitle :title="title" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  title: 'タイトル',
}