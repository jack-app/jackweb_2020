<template>
  <div>
    <v-row>
      <v-col cols="12" md="3" v-for="product in products" :key="product.name">
        <img width="160vw" height="160wh" v-if="product.icon" :src="product.icon" />
      </v-col>
    </v-row>
    <div class="toproducts-btn">
      <a href="./Products.vue">詳しく見る</a>
    </div>
    <!-- <v-btn class="justify-end" to="/products">more</v-btn> -->
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

<style scoped>
.toproducts-btn a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2vh auto auto auto;
  padding: 1em 2em;
  width: 300px;
  color: #FC913A;
  font-size: 18px;
  font-weight: 700;
  border: 3px solid #FCA965;
  border-radius: 10px;
}

.toproducts-btn a::after {
  content: '';
  width: 5px;
  height: 5px;
  border-top: 3px solid #FC913A;
  border-right: 3px solid #FC913A;
  transform: rotate(45deg);
}

.toproducts-btn a:hover {
  color: #333333;
  text-decoration: none;
  background-color: #FCA965;
}

.toproducts-btn a:hover::after {
  border-top: 3px solid #333333;
  border-right: 3px solid #333333;
}
</style>
