<template>
  <div>
    <div v-for="product in products" :key="product.name">
      <img v-if="product.icon" :src="product.icon" />
    </div>

    <v-btn class="justify-end" to="/products">more</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%8A%E5%AE%B6Bar.png?alt=media",
        name: "お家Bar"
      },
      {
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%86%E3%81%94%E3%81%8F%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%91%E3%83%BC.png?alt=media",
        name: "うごくスイーパー"
      },
      {
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%8A%E9%BA%A9%E3%83%A9%E3%82%A4%E3%83%B3.png?alt=media",
        name: "お麩ライン"
      },
      {
        icon: require("@/assets/ゲーム開発.png"),
        name: "サンプルプロダクト"
      },
      {
        icon: "",
        name: "sampleProduct2"
      }
    ]
  })
};
</script>

<style scoped></style>
