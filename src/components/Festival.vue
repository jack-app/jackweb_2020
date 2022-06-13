<template>
  <v-container>
    <a href="https://www.meidaisai.com/index.html" target="_blank"
      >2022年度名大祭</a
    >のお知らせです！<br />
    jackは6/11(土)、6/12(日)に<span class="red--text">全学教育棟C36</span
    >にて展示を行います！<br />
    展示内容はこちら！<br />
    （スケジュールは変更になる場合があります）
    <h3 class="ma-2 blue--text" style="fontColor:'blue'">11日(土)の展示</h3>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="product in products.filter(item => item.sat)"
          :key="product.name"
        >
          <Product
            :name="product.name"
            :icon="product.icon"
            :description="product.description"
            :time="product.sat"
          />
        </v-col>
      </v-row>
    </v-container>

    <h3 class="ma-2 red--text">12日(日)の展示</h3>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="product in products.filter(item => item.sun)"
          :key="product.name"
        >
          <Product
            :name="product.name"
            :icon="product.icon"
            :description="product.description"
            :time="product.sun"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Product from "@/components/FestivalProduct.vue";
import firebase from "firebase";

export default {
  components: {
    Product
  },
  data: () => ({
    products: []
  }),
  created() {
    let ls = firebase.database().ref("festival");
    let self = this;
    //let storage = firebase.storage();
    ls.once("value", snapshot => {
      snapshot.forEach(function(children) {
        self.products.push(children.val()); //配列に入れる
      });
    });
  }
};
</script>

<style scoped></style>
