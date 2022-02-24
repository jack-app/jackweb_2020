<template>
  <v-btn
    text
    depressed
    raised="false"
    plain
    :ripple="false"
    class="text-decoration-underline"
    :to="to"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    to: String,
    text: String,
  },
};
</script>
