<template>
  <v-card class="card-component" elevation="3" outlined>
    <v-img :src="src" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text class="text-left">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["src", "title", "text"],
};
</script>

<style scoped>
.achievement__date {
  color: #f6b352;
}
</style>
