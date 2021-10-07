<template>
  <div>
    <p>プロダクト一覧</p>
    <div>
      <Product v-for="product in products" :key="product.key" />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "Products",
  components: {
    Product,
  },
  data: () => ({
    products: [],
  }),
  created() {
    for (var i = 0; i < 5; i++) {
      this.products.push({ key: i });
    }
  },
};
</script>

<style scoped></style>
