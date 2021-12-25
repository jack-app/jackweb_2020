<template>
  <v-container class="contact">
    <ContentTitle title="お問い合わせ" />
    <ContactForm />
  </v-container>
</template>

<script>
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import ContactForm from "@/components/contact-form/ContactForm.vue";

export default {
  components: {
    ContentTitle,
    ContactForm,
  },
};
</script>
