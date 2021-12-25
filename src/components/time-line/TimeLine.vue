<template>
  <v-timeline align-top dense>
    <v-timeline-item
      v-for="schedule in schedules"
      :key="schedule.id"
      class="py-4"
      color="orange"
      left="true"
      fill-dot
    >
      <template v-slot:icon>
        <span style="color: white">{{ schedule.month }}月</span>
      </template>
      <v-card class="elevation-2 text-left">
        <v-card-title class="text-h5">
          {{ schedule.title }}
        </v-card-title>
        <v-card-text>
          {{ schedule.detail }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: ["schedules"],
};
</script>
