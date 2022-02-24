<template>
  <v-btn color="#F6B352" :href="link">{{ text }}</v-btn>
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
  },
};
</script>
