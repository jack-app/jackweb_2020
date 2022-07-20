<template>
  <v-container>
    <template v-if="loading=='loading'">
      <LoadingText/>
    </template>
    <template v-if="loading=='failure'">
      <FailLoading />
    </template>
  </v-container>
</template>

<script>
import LoadingText from "../loading-text/LoadingText.vue";
import FailLoading from "../fail-loading/FailLoading.vue";

export default{
  components:{
    LoadingText,
    FailLoading
  },
  props:['loading']
}
</script>
