<template>
  <v-card style="border: solid #f6b352;">
    <div class="achievement__date">
      <v-card-subtitle class="text-left">
        {{ date }}
      </v-card-subtitle>
    </div>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-actions class="justify-end">
      <v-btn color="#F6B352" :href="link">read more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["name", "date", "link"],
};
</script>

<style scoped>
.achievement__date {
  color: #f6b352;
}
</style>
