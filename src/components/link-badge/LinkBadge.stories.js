import Vuetify from "vuetify";
import LinkBadge from "./LinkBadge.vue";

export default {
  title: "Components/LinkBadge",
  component: LinkBadge,
};

const Template = (args, { argTypes }) => ({
  components: { LinkBadge },
  template: '<LinkBadge :link="link" :platform="platform" />',
  Vuetify,
  props: Object.keys(argTypes),
});

export const Ios = Template.bind({});
Ios.args = {
  link: "https://apple.com",
  platform: "ios",
};

export const Android = Template.bind({});
Android.args = {
  link: "https://google.com",
  platform: "android",
};

export const Web = Template.bind({});
Web.args = {
  link: "https://jack-web.web.app",
  platform: "web",
};
