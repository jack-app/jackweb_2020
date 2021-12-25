<template>
  <v-timeline reverse>
    <v-timeline-item v-for="schedule in schedules" :key="schedule.id">
      <span slot="opposite">
        <v-text>{{ schedule.month }}月</v-text>
      </span>
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
