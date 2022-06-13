<template>
  <v-card>
    <v-card-title>{{ name }}</v-card-title>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img
            :src="icon ? icon : require('@/assets/noimage.png')"
            class="ma-1"
          />
        </v-col>
        <v-col cols="6">
          {{ description }}
        </v-col>
      </v-row>
    </v-container>

    <v-card-text> 展示時間：{{ time }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["icon", "name", "description", "time"]
};
</script>
