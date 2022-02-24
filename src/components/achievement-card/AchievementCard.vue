<template>
  <v-card style="border: solid #f6b352;">
    <div class="achievement__date">
      <v-card-subtitle class="text-left">
        {{ date }}
      </v-card-subtitle>
    </div>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-actions class="justify-end">
      <Button text="read more" :link="link" />
    </v-card-actions>
  </v-card>
</template>

<script>
import Button from "../button/Button.vue";

export default {
  props: ["name", "date", "link"],
  components: {
    Button,
  },
};
</script>

<style scoped>
.achievement__date {
  color: #f6b352;
}
</style>
