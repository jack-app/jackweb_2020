<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" 
          v-for="product in products"
          :key="product.key">
        <ProductCard
          :name="product.name"
          :icon="product.icon"
          :ios="product.ios"
          :web="product.web"
          :android="product.android"
          :description="product.description"
        />
      </v-col>
      <LoadingDisplay ref="load" />
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "../product-card/ProductCard.vue";
import LoadingDisplay from "../loading-display/LoadingDisplay.vue";
import axios from "axios";

export default {
  components: {
    ProductCard,
    LoadingDisplay
},
  props: {
    num: { type: Number, default: undefined },
  },
  data: () => ({
    products: null,
  }),
  mounted() {
    axios
      .get(`/.netlify/functions/api/products`)
      .then((response) => {
        this.products = response.data.message;
        let array = response.data.message.slice();
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        this.products = array.slice(0, this.num);
        this.$refs.load.success();
      })
      .catch(() => {
        this.$refs.load.failure();
      });
  },
};
</script>

<style scoped>
.product__card {
  margin: 20px;
}
</style>
