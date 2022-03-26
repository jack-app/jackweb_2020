<template>
  <v-btn
    color="#4C4C4C"
    style="border-color: #f6b352;"
    rounded
    outlined
    :to="to"
  >
    詳しく見る→
  </v-btn>
</template>

<script>
export default {
  props: ["to"],
};
</script>
