<template>
  <v-card class="card">
    <v-container>
      <v-row>
        <v-col cols="4" sm="12">
          <img class="cardimg"
          v-bind:src="icon"
          />
        </v-col>
        <v-col cols="8" sm="12">
          <v-card-title>{{title}}</v-card-title>
        </v-col>
        <v-col cols="12">
          <v-card-text>
            {{text}}
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script>
export default {
  props: ['icon','title','text'],
}


</script>

<style scoped>
.card {
  width:100%;
  margin: 0 10px;
}
.cardimg{
  width: 100%;
}
</style>
