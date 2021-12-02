<template>
  <div>
    <p>プロダクト一覧</p>
    <div>
      <Product
        v-for="product in products"
        :key="product.name"
        :name="product.name"
        :icon="product.icon"
        :ios="product.ios"
        :web="product.web"
        :android="product.android"
        :description="product.description"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/Product.vue";

export default {
  name: "Products",
  components: {
    Product
  },
  data: () => ({
    products: null
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_VERCEL_URL}/api/products`)
      .then(response => {
        this.products = response.data.message;
        let array = response.data.message.slice();
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        this.products = array;
      })
      .catch(() => {
        //エラーが来た時にどうしようねってやつ。特に対処法を思いついていない。
      });
  }
};
</script>

<style scoped></style>
