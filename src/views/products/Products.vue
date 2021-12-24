<template>
  <v-container class="products">
    <ContentTitle title="プロダクト" />
    <ProductListTemplate />
  </v-container>
</template>

<script>
import ContentTitle from "@/components/content-title/ContentTitle.vue";
import ProductListTemplate from "@/components/product-list-template/ProductListTemplate.vue";

export default {
  components: {
    ContentTitle,
    ProductListTemplate,
  },
};
</script>
