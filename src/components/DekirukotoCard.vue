<template>
  <v-card class="card">
    <img class="cardimg"
      v-bind:src="icon"
    />
    <v-card-title>{{title}}</v-card-title>
    <v-card-text>
      {{text}}
    </v-card-text>
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
