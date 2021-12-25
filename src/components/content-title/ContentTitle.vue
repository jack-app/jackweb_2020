<template>
  <div class="text-center">
    <h1 class="text-h4 page-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.page-title {
  display: inline-block;
  border-bottom: 5px solid #fc913a;
  margin-bottom: 2rem;
}
</style>
