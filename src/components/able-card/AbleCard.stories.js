import Vuetify from "vuetify";
import AbleCard from "./AbleCard.vue";

export default {
  title: "Modules/AbleCard",
  component: AbleCard,
};

const Template = (args, { argTypes }) => ({
  components: { AbleCard },
  template: '<AbleCard :src="src" :title="title" :text="text" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Default = Template.bind({});
Default.args = {
  src: require("@/assets/noimage.png"),
  title: "タイトル",
  text: "ほげほげほげほげ",
};