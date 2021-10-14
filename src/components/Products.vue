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
import Product from "@/components/Product.vue";

export default {
  name: "Products",
  components: {
    Product
  },
  data: () => ({
    products: [
      {
        android: "",
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%8A%E5%AE%B6Bar.png?alt=media",
        ios: "",
        name: "お家Bar",
        web: "http://www.ouchi-bar.com/",
        description:
          "お家Barはお家のお酒とコンビニで買えるもので作れるカクテルを探せるWEBサービスです。手元のお酒を登録するだけで、今すぐに作れるカクテルがわかります。"
      },
      {
        android: "",
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%86%E3%81%94%E3%81%8F%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%91%E3%83%BC.png?alt=media",
        ios: "",
        name: "うごくスイーパー",
        web: "https://ugokusweeper.web.app/",
        description: "爆弾が動くマインスイーパー"
      },
      {
        android:
          "https://play.google.com/store/apps/details?id=tmy.jack.ofuline",
        icon:
          "https://firebasestorage.googleapis.com/v0/b/jack-web2020.appspot.com/o/productimage%2F%E3%81%8A%E9%BA%A9%E3%83%A9%E3%82%A4%E3%83%B3.png?alt=media",
        ios:
          "https://apps.apple.com/jp/app/%E3%81%8A%E9%BA%A9%E3%83%A9%E3%82%A4%E3%83%B3/id1573418409",
        name: "お麩ライン",
        web: "",
        description:
          "広告なし！課金なし！超ハイパーカジュアルなあみだゲーム！！"
      },
      {
        android: "https://play.google.com/",
        icon: require("@/assets/ゲーム開発.png"),
        ios: "https://apps.apple.com/",
        name: "サンプルプロダクト",
        web: "",
        description: "サンプル説明でーーーーーーーーーす"
      },
      {
        android: "",
        icon: "",
        ios: "",
        name: "sampleProduct2",
        web: "https://google.com",
        description:
          "サンプル説明でございます。サンプル説明でございます。サンプル説明でございます。サンプル説明でございます。サンプル説明でございます。"
      }
    ]
  })
};
</script>

<style scoped></style>
