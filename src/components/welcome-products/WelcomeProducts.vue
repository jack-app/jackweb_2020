<template>
  <v-container>
    <v-row justify="center">
      <ProductListTemplate :num="num" />
      <FurtherButton to="./products" style="inline-center" />
    </v-row>
  </v-container>
</template>

<script>
import ProductListTemplate from "@/components/product-list-template/ProductListTemplate.vue";
import FurtherButton from "@/components/further-button/FurtherButton.vue";

export default {
  components: {
    ProductListTemplate,
    FurtherButton,
  },
  data: () => ({
    num: 2,
  }),
};
</script>
